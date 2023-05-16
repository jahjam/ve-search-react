import styled from 'styled-components';
import { FlexColumn } from '../../styled-utils/mixins';
import { ReactComponent as BinIcon } from '../../imgs/svg/bin.svg';
import { breakpoint } from '../../styled-utils/breakpoints';

export const CommentContainer = styled.div`
  border: var(--main-border);
  padding: 2rem;
  width: 40rem;

  /* ${FlexColumn()} */
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto 1fr;
  grid-template-areas:
    'bin bin'
    'author body'
    'rating date';
  align-items: flex-start;
  justify-items: center;
  gap: 1rem;

  & h2 {
    font-family: goodlife-serif, sans-serif;
    font-size: 2rem;

    grid-area: rating;
  }

  & p {
    font-size: 1.6rem;

    grid-area: body;
  }

  & span {
    grid-area: date;
    font-size: 1.4rem;
    font-weight: 700;
  }

  @media (${breakpoint('maxBreakOne')}) {
    & h2 {
      font-size: 1.8rem;
    }

    & p {
      font-size: 1.4rem;
    }

    & span {
      font-size: 1.4rem;
    }

    & span:nth-child(4) {
      font-size: 1.2rem;
    }
  }

  @media (${breakpoint('maxBreakThree')}) {
    width: 20rem;

    & h2 {
      font-size: 1.6rem;
    }

    & p {
      font-size: 1.4rem;
    }

    & span {
      font-size: 1.4rem;
    }

    & span:nth-child(4) {
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
      font-size: 1.2rem;
    }

    & span:nth-child(4) {
      font-size: 1rem;
    }
  }
`;

export const ReviewDetails = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  grid-area: author;

  span:first-child {
    font-weight: 400;
  }

  & div {
    background-color: blue;
    height: 4rem;
    width: 4rem;
    border-radius: 50%;

    border: var(--main-border);

    overflow: hidden;

    & img {
      width: 100%;
    }
  }

  @media (${breakpoint('maxBreakThree')}) {
    flex-direction: column;
  }
`;

export const Loading = styled.span`
  font-size: 2rem;
  grid-area: bin;
`;

export const ErrorMsg = styled.span`
  font-size: 1.2rem;
  grid-area: bin;
`;

export const Bin = styled(BinIcon)`
  grid-area: bin;
  height: 2rem;
  width: 2rem;

  cursor: pointer;

  justify-self: flex-end;

  &:hover {
    color: red;
  }
`;
