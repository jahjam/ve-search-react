import { useContext, useState, useEffect } from 'react';
import AuthContext from '../store/auth-context';
import useRequest from '../hooks/use-request';

import {
  StyledHeaderContainer,
  BookmarkButton,
  BookmarkSolidIconStyles,
  BookmarkIconStyles,
} from '../styled/styledPages/styledResult';

const HeaderContainer = props => {
  const authCtx = useContext(AuthContext);
  const [recipeBookmarked, setRecipeBookmarked] = useState({
    isBookmarked: false,
  });

  useEffect(() => {
    setRecipeBookmarked(state => ({
      ...state,
      isBookmarked: authCtx.userDetails.user?.bookmarks
        .map(recipes => recipes.id)
        .includes(props.recipe.id),
    }));
  }, [authCtx.userDetails.user?.bookmarks, props.recipe.id]);

  const { sendRequest: bookmarkRequest } = useRequest();

  const bookmarkHandler = () => {
    const receiver = data => {
      authCtx.setUserDetailsHandler(data);

      setRecipeBookmarked(state => ({
        ...state,
        isBookmarked: !recipeBookmarked.isBookmarked,
      }));
    };

    if (recipeBookmarked.isBookmarked) {
      return bookmarkRequest(
        {
          url: `/api/v1/users/removeBookmark/${props.recipe.id}`,
          method: 'DELETE',
        },
        receiver
      );
    }

    bookmarkRequest(
      {
        url: `/api/v1/users/addBookmark/${props.recipe.id}`,
        method: 'PATCH',
      },
      receiver
    );
  };

  return (
    <StyledHeaderContainer>
      <h2>{props.name}</h2>

      {authCtx.isLoggedIn && (
        <BookmarkButton
          onClick={bookmarkHandler}
          icon="true"
          type="button"
          btnSize="small"
        >
          {recipeBookmarked.isBookmarked ? (
            <BookmarkSolidIconStyles />
          ) : (
            <BookmarkIconStyles />
          )}
        </BookmarkButton>
      )}
    </StyledHeaderContainer>
  );
};

export default HeaderContainer;
