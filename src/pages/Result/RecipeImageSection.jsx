import * as Styled from './styles';
import { API } from '../../config';

const RecipeImageSection = props => {
  return (
    <Styled.StyledRecipeImageSection>
      <img src={`${API}/public/img/recipes/${props.coverImage}`} alt="Food" />
    </Styled.StyledRecipeImageSection>
  );
};

export default RecipeImageSection;
