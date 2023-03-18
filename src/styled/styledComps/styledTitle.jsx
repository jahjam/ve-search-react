import styled from 'styled-components';

import { ReactComponent as TitleIcon } from '../../imgs/svg/title-icon.svg';
import { FlexColumn } from '../../helpers/mixins';
import { breakpoint } from '../breakpoints';

export const TitleStyles = styled.div`
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
`;

export const TitleIconStyles = styled(TitleIcon)`
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
`;
