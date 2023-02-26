import { StyledRecipeImageBox } from '../styled/styledPages/styledResult';

const RecipeImageBox = props => {
  return (
    <StyledRecipeImageBox>
      <img src={`/public/img/recipes/${props.coverImage}`} alt="Food" />
    </StyledRecipeImageBox>
  );
};

export default RecipeImageBox;
