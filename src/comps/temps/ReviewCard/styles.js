import styled from 'styled-components';
import { FlexColumn } from '../../../styled-utils/mixins';
import { breakpoint } from '../../../styled-utils/breakpoints';

export const CommentContainer = styled.div`
  border: var(--main-border);
  padding: 2rem;
  width: 40rem;

  ${FlexColumn()}
  gap: 1rem;

  & h2 {
    font-family: goodlife-serif, sans-serif;
    font-size: 2.4rem;
  }

  & p {
    font-size: 1.6rem;
  }

  & span {
    font-size: 1.4rem;
    font-weight: 700;
  }

  @media (${breakpoint('maxBreakOne')}) {
    & h2 {
      font-size: 2rem;
    }

    & p {
      font-size: 1.4rem;
    }

    & span {
      font-size: 1.2rem;
    }
  }

  @media (${breakpoint('maxBreakThree')}) {
    width: 20rem;

    & h2 {
      font-size: 1.8rem;
    }

    & p {
      font-size: 1.4rem;
    }

    & span {
      font-size: 1.2rem;
    }
  }

  @media (${breakpoint('maxBreakFour')}) {
    width: 20rem;
    padding: 1rem;

    & h2 {
      font-size: 1.4rem;
    }

    & p {
      font-size: 1.2rem;
    }

    & span {
      font-size: 1rem;
    }
  }
`;

export const ReviewDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.2rem;

  span:first-child {
    font-weight: 400;
  }
`;
