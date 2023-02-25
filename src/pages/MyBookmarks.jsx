import { useContext, useState, useMemo } from 'react';
import AuthContext from '../store/auth-context';
import Pagination from '../comps/temps/Pagination';

import {
  ContainerStyled,
  Results,
  SearchBar,
  NoRecipesMsg,
} from '../styled/styledPages/styledMyRecipes';

import RecipeCard from '../comps/temps/RecipeCard';

let PAGE_SIZE = 9;

const MyBookmarks = () => {
  const authCtx = useContext(AuthContext);
  const [searchInput, setSearchInput] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const { userDetails } = authCtx;

  const filteredRecipes = userDetails.user?.bookmarks.filter(recipe =>
    recipe.name.toLowerCase().includes(searchInput)
  );

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PAGE_SIZE;
    const lastPageIndex = firstPageIndex + PAGE_SIZE;
    return filteredRecipes?.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, filteredRecipes]);

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
              {
                /* if (!recipe) return; */
              }

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
            pageSize={PAGE_SIZE}
            onPageChange={page => setCurrentPage(page)}
          />
        )}
      </ContainerStyled>
    </>
  );
};

export default MyBookmarks;
