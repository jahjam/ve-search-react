import styled from 'styled-components';
import { breakpoint } from '../../breakpoints';

export const MethodCardStyled = styled.div`
  width: 80%;

  border: var(--main-border);

  padding: 2rem;

  & h2 {
    font-size: 2rem;
  }

  & p {
    font-size: 1.4rem;
  }

  @media (${breakpoint('maxBreakOne')}) {
    & h2 {
      font-size: 1.8rem;
    }

    & p {
      font-size: 1.2rem;
    }
  }
`;
