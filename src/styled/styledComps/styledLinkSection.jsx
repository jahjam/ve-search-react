import styled from 'styled-components';

import Button from '../../comps/temps/Button';
import { breakpoint } from '../breakpoints';

export const SourceLinkSection = styled.section`
  width: 80%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;
`;

export const SourceLinkTitle = styled.h2`
  font-family: goodlife-serif, sans-serif;
  font-weight: 700;
  font-size: 3rem;
  text-align: center;

  @media (${breakpoint('maxBreakOne')}) {
    font-size: 2.5rem;
  }

  @media (${breakpoint('maxBreakFour')}) {
    font-size: 2rem;
  }
`;

export const SourceLinkDesc = styled.span`
  font-size: 1.8rem;
  width: 80%;
  text-align: center;

  @media (${breakpoint('maxBreakOne')}) {
    font-size: 1.4rem;
  }

  @media (${breakpoint('maxBreakFour')}) {
    font-size: 1.2rem;
  }
`;

export const SourceRecipeCompany = styled.span`
  font-weight: 700;
  font-size: 1.8rem;

  @media (${breakpoint('maxBreakOne')}) {
    font-size: 1.4rem;
  }

  @media (${breakpoint('maxBreakFour')}) {
    font-size: 1.2rem;
  }
`;

export const SourceLinkButton = styled(Button)`
  height: 6rem;
  width: 12rem;
  font-family: inherit;
  font-size: 2rem;
  line-height: 6rem;

  background-color: var(--main-theme-color);

  @media (${breakpoint('maxBreakOne')}) {
    height: 4.5rem;
    width: 10.5rem;

    & span {
      font-size: 1.6rem;
    }

    line-height: 4.7rem;
  }

  @media (${breakpoint('maxBreakFour')}) {
    height: 4rem;
    width: 10rem;

    & span {
      font-size: 1.4rem;
    }

    line-height: 4rem;
  }
`;
