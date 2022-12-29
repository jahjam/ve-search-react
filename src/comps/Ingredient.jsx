import { IngIconStyles } from '../styled/styledComps/styledIngredient';

const Ingredient = props => {
  const seperator = () => {
    if (props.measurement.length > 3 || props.measurement === 'cup') return ' ';
  };

  return (
    <li>
      <span>
        <IngIconStyles />
        <p>
          {props.amount}
          {seperator()}
          {props.measurement} {props.name.toLowerCase()}
        </p>
      </span>
    </li>
  );
};

export default Ingredient;
