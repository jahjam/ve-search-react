import * as Styled from './styles';

const MethodCard = props => {
  return (
    <Styled.MethodCard>
      <h2>Step {props.id}:</h2>

      <p>{props.method}</p>
    </Styled.MethodCard>
  );
};

export default MethodCard;
