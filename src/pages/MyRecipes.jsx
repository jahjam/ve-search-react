import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FlexColumn, Flex } from '../helpers/mixins';

import { useContext, useState } from 'react';
import AuthContext from '../store/auth-context';

import RecipeCard from '../comps/temps/RecipeCard';

const ContainerStyled = styled(motion.section)`
  margin-top: 2rem;
  width: 80%;
  height: auto;
  padding: 1.6rem;
  border: 0.2rem solid black;

  ${FlexColumn()}
  gap: 2rem;
`;

const Results = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  align-items: center;
  row-gap: 2rem;
  column-gap: 2rem;
`;

const SearchBar = styled.div`
  align-self: flex-end;

  ${Flex()}
  gap: 1.4rem;

  & label {
    font-size: 1.6rem;
  }

  & input {
    font-family: inherit;
    padding: 1rem;
    border: var(--main-border);
  }
`;

const NoRecipesMsg = styled.span`
  grid-column: 1/4;

  font-size: 2rem;
`;

const MyRecipes = () => {
  const authCtx = useContext(AuthContext);
  const [searchInput, setSearchInput] = useState('');

  const { userDetails } = authCtx;

  console.log(userDetails);

  const filteredRecipes = userDetails.user?.recipes.map(recipe => {
    if (recipe.name.toLowerCase().includes(searchInput)) return recipe;
  });

  const onChangeHandler = e => {
    setSearchInput(e.target.value);
  };

  return (
    <>
      <ContainerStyled>
        <SearchBar>
          <label htmlFor="search">Search:</label>
          <input
            id="search"
            type="text"
            placeholder="tofu"
            value={searchInput}
            onChange={onChangeHandler}
          ></input>
        </SearchBar>
        <Results>
          {!filteredRecipes?.some(el => el === undefined) ? (
            filteredRecipes?.map(recipe => (
              <RecipeCard
                key={recipe.id}
                id={recipe.id}
                photo={recipe.coverImage}
                name={recipe.name}
                desc={recipe.description}
              />
            ))
          ) : (
            <NoRecipesMsg>No recipes found!</NoRecipesMsg>
          )}
        </Results>
      </ContainerStyled>
    </>
  );
};

export default MyRecipes;
