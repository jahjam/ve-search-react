import * as Styled from './styles';

import Ingredient from '../../components/Ingredient/Ingredient';

const IngredientSection = props => {
  return (
    <Styled.StyledIngredientSection>
      <h2>Ingredients</h2>

      <ul>
        {props.ings.map(ingredient => (
          <Ingredient
            key={ingredient._id}
            amount={ingredient.amount}
            measurement={ingredient.measurement}
            name={ingredient.name}
          />
        ))}
      </ul>
    </Styled.StyledIngredientSection>
  );
};

export default IngredientSection;
