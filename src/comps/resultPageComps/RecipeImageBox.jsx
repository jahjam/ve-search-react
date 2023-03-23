import { StyledRecipeImageBox } from '../../styled/styledPages/styledResult';
import { API } from '../../config';

const RecipeImageBox = props => {
  return (
    <StyledRecipeImageBox>
      <img src={`${API}/public/img/recipes/${props.coverImage}`} alt="Food" />
    </StyledRecipeImageBox>
  );
};

export default RecipeImageBox;
