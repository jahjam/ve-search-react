import { ReactComponent as IngIcon } from '../imgs/svg/title-icon.svg';
import styled from 'styled-components';

const IngIconStyles = styled(IngIcon)`
  height: 20px;
  width: 20px;
`;

const Ingredient = props => {
  const seperator = () => {
    if (props.measurement.length > 3 || props.measurement === 'cup') return ' ';
  };

  return (
    <ul>
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
    </ul>
  );
};

export default Ingredient;
