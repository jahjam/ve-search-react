import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FlexColumn, Flex } from '../helpers/mixins';

import { useContext, useState, useMemo } from 'react';
import AuthContext from '../store/auth-context';
import Pagination from '../comps/temps/Pagination';

import RecipeCard from '../comps/temps/RecipeCard';

const ContainerStyled = styled(motion.section)`
  margin-top: 2rem;
  width: 100rem;
  height: auto;
  padding: 2rem;
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
  column-gap: 1rem;
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

let pageSize = 9;

const MyRecipes = () => {
  const authCtx = useContext(AuthContext);
  const [searchInput, setSearchInput] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const { userDetails } = authCtx;

  console.log(userDetails);

  // eslint-disable-next-line array-callback-return
  const filteredRecipes = userDetails.user?.recipes.map(recipe => {
    if (recipe.name.toLowerCase().includes(searchInput)) return recipe;
  });

  console.log(filteredRecipes);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;
    return filteredRecipes?.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, filteredRecipes]);

  console.log(currentTableData);

  const onChangeHandler = e => {
    setSearchInput(e.target.value);
  };

  return (
    <>
      <ContainerStyled
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ opacity: 0 }}
      >
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
          {!filteredRecipes?.every(el => el === undefined) ? (
            currentTableData?.map(recipe => {
              if (!recipe) return;

              return (
                <RecipeCard
                  key={recipe.id}
                  id={recipe.id}
                  photo={recipe.coverImage}
                  name={recipe.name}
                  desc={recipe.description}
                />
              );
            })
          ) : (
            <NoRecipesMsg>No recipes found!</NoRecipesMsg>
          )}
        </Results>

        {filteredRecipes && (
          <Pagination
            currentPage={currentPage}
            totalCount={filteredRecipes.length}
            pageSize={pageSize}
            onPageChange={page => setCurrentPage(page)}
          />
        )}
      </ContainerStyled>
    </>
  );
};

export default MyRecipes;
