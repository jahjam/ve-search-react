import { MethodCardStyled } from '../../styled/styledComps/styledTemps/styledMethodCard';

const MethodCard = props => {
  return (
    <MethodCardStyled>
      <h2>Step {props.id}:</h2>

      <p>{props.method}</p>
    </MethodCardStyled>
  );
};

export default MethodCard;
