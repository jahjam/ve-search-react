import { useNavigate } from 'react-router-dom';

import truncateParagraph from '../../helpers/truncateParagraph';

import { RecipeCardStyles } from '../../styled/styledComps/styledTemps/styledRecipeCard';

const RecipeCard = props => {
  const navigate = useNavigate();

  const onClickHandler = () => {
    navigate(`/search/${props.id}`);
  };

  return (
    <RecipeCardStyles onClick={onClickHandler}>
      <div>
        <div>
          <img src={`/public/img/recipes/${props.photo}`} alt="recipe" />
        </div>
        <div>
          <h2>{props.name}</h2>
          <p>{truncateParagraph(props.desc)}</p>
        </div>
      </div>
    </RecipeCardStyles>
  );
};

export default RecipeCard;
