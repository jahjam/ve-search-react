import { useLocation, useNavigate } from 'react-router-dom';

import * as Styled from './styles';

import { ReactComponent as IngIcon } from '../../imgs/svg/title-icon.svg';
import { ReactComponent as Bookmark } from '../../imgs/svg/bookmark.svg';

const DetailsSection = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const myRecipesHandler = () => {
    navigate('/me/my-recipes');
  };

  const myBookmarksHandler = () => {
    navigate('/me/my-bookmarks');
  };

  // location is used to determine background colour of button in styled comps
  return (
    <Styled.Details location={location}>
      <ul>
        <li onClick={myRecipesHandler}>
          <IngIcon />
          <span>My recipes</span>
        </li>
        <li onClick={myBookmarksHandler}>
          <Bookmark />
          <span>My bookmarks</span>
        </li>
      </ul>
    </Styled.Details>
  );
};

export default DetailsSection;
