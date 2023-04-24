import styled from 'styled-components';

import { ReactComponent as TitleIconSVG } from '../../imgs/svg/title-icon.svg';
import { FlexColumn } from '../../styled-utils/mixins';
import { breakpoint } from '../../styled-utils/breakpoints';

export const Title = styled.div`
  width: 100%;
  margin-top: 4rem;

  ${FlexColumn()}

  & h1 {
    font-family: goodlife-brush, sans-serif;
    font-size: 5rem;
  }

  & span {
    font-size: 1.8rem;
  }

  @media (${breakpoint('maxBreakOne')}) {
    & h1 {
      font-size: 4.2rem;
    }

    & span {
      font-size: 1.6rem;
    }
  }

  @media (${breakpoint('maxBreakTwo')}) {
    & h1 {
      font-size: 3.8rem;
    }

    & span {
      font-size: 1.4rem;
    }
  }

  @media (${breakpoint('maxBreakThree')}) {
    & h1 {
      font-size: 3.2rem;
    }

    & span {
      font-size: 1.2rem;
    }
  }
`;

export const TitleIcon = styled(TitleIconSVG)`
  height: 40px;
  width: 40px;
  color: #a4d2ac;

  margin-top: 0.5rem;
  align-self: flex-start;

  @media (${breakpoint('maxBreakOne')}) {
    height: 30px;
    width: 30px;
  }

  @media (${breakpoint('maxBreakTwo')}) {
    height: 28px;
    width: 28px;
  }

  @media (${breakpoint('maxBreakThree')}) {
    height: 24px;
    width: 24px;
  }
`;
