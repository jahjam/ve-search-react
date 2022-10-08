import styled from 'styled-components';

const MethodCardStyled = styled.div`
  width: 80%;

  border: var(--main-border);

  padding: 2rem;

  & h2 {
    font-size: 2rem;
  }

  & p {
    font-size: 1.4rem;
  }
`;

const MethodCard = props => {
  return (
    <MethodCardStyled>
      <h2>Step {props.id}:</h2>

      <p>{props.method}</p>
    </MethodCardStyled>
  );
};

export default MethodCard;
