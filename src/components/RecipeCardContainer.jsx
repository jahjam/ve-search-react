import { useContext, useState } from 'react';
import AuthContext from '../store/auth-context';

import UserRecipeCards from './UserRecipeCards/UserRecipeCards';

let PAGE_SIZE = 9;

const RecipeCardContainer = props => {
  const authCtx = useContext(AuthContext);
  const [searchInput, setSearchInput] = useState('');

  const { userDetails } = authCtx;

  const filteredRecipes =
    props.pageType === 'bookmarks'
      ? userDetails.user.bookmarks.filter(recipe =>
          recipe.name.toLowerCase().includes(searchInput)
        )
      : userDetails.user.recipes.filter(recipe =>
          recipe.name.toLowerCase().includes(searchInput)
        );

  const onChangeHandler = e => {
    setSearchInput(e.target.value);
  };

  return (
    <UserRecipeCards
      filteredRecipes={filteredRecipes}
      PAGE_SIZE={PAGE_SIZE}
      onChangeHandler={onChangeHandler}
      searchInput={searchInput}
    />
  );
};

export default RecipeCardContainer;
