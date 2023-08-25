import { useNavigate } from 'react-router-dom';

import truncateParagraph from '../../helpers/truncateParagraph';

import * as Styled from './styles';

const RecipeCard = props => {
  const navigate = useNavigate();

  const onClickHandler = () => {
    navigate(`/search/${props.id}`);
  };

  return (
    <Styled.RecipeCard onClick={onClickHandler}>
      <div>
        <div>
          <img src={`${props.photo}`} alt="recipe" />
        </div>
        <div>
          <h2>{props.name}</h2>
          <p>{truncateParagraph(props.desc)}</p>
        </div>
      </div>
    </Styled.RecipeCard>
  );
};

export default RecipeCard;
