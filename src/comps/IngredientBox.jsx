import { StyledIngredientBox } from '../styled/styledPages/styledResult';

import Ingredient from './Ingredient';

const IngredientBox = props => {
  return (
    <StyledIngredientBox>
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
    </StyledIngredientBox>
  );
};

export default IngredientBox;
