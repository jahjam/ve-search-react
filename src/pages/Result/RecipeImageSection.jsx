import * as Styled from './styles';
import { API } from '../../config';

const RecipeImageSection = props => {
  return (
    <Styled.StyledRecipeImageSection>
      <img src={`${API}/public/imgs/${props.coverImage}`} alt="Food" />
    </Styled.StyledRecipeImageSection>
  );
};

export default RecipeImageSection;
