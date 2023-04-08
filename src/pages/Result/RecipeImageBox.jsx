import * as Styled from './styles';
import { API } from '../../config';

const RecipeImageBox = props => {
  return (
    <Styled.StyledRecipeImageBox>
      <img src={`${API}/public/img/recipes/${props.coverImage}`} alt="Food" />
    </Styled.StyledRecipeImageBox>
  );
};

export default RecipeImageBox;
