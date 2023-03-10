import { useState, useMemo } from 'react';
import Pagination from '../temps/Pagination';

import {
  ContainerStyled,
  Results,
  SearchBar,
  NoRecipesMsg,
} from '../../styled/styledComps/styledUserRecipeCards';

import RecipeCard from '../temps/RecipeCard';

const UserRecipeCards = props => {
  const [currentPage, setCurrentPage] = useState(1);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * props.PAGE_SIZE;
    const lastPageIndex = firstPageIndex + props.PAGE_SIZE;
    return props.filteredRecipes?.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, props.PAGE_SIZE, props.filteredRecipes]);

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
            value={props.searchInput}
            onChange={props.onChangeHandler}
          ></input>
        </SearchBar>

        <Results>
          {!props.filteredRecipes?.every(el => el === undefined) ? (
            currentTableData?.map(recipe => {
              /* if (!recipe) return; */

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

        {props.filteredRecipes && (
          <Pagination
            currentPage={currentPage}
            totalCount={props.filteredRecipes.length}
            pageSize={props.PAGE_SIZE}
            onPageChange={page => setCurrentPage(page)}
          />
        )}
      </ContainerStyled>
    </>
  );
};

export default UserRecipeCards;
