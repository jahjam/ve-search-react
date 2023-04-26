import styled from 'styled-components';
import { FlexColumn } from './styled-utils/mixins';
import { ReactComponent as XMark } from './imgs/svg/x-mark.svg';
import { breakpoint } from './styled-utils/breakpoints';
import { motion } from 'framer-motion';

export const SearchStyles = styled.main`
  padding: 2rem;

  ${FlexColumn()}
`;

export const XMarkIcon = styled(XMark)`
  height: 4rem;
  width: 4rem;

  position: absolute;
  top: 2rem;
  right: 2rem;

  cursor: pointer;

  @media (${breakpoint('maxBreakThree')}) {
    height: 3rem;
    width: 3rem;
    top: 1.4rem;
    right: 1.4rem;
  }
`;

export const Modal = styled(motion.div)`
  height: 100%;
  width: 100%;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  ${FlexColumn()}

  background-color: var(--main-grey-color-transparent);

  z-index: 1000;
`;

export const InnerModal = styled(motion.div)`
  height: auto;
  width: 80%;

  border: var(--main-border);

  background-color: var(--main-theme-color);

  position: relative;

  padding: 4rem;

  ${FlexColumn()}
  justify-content: flex-start;
  gap: 2rem;

  & h3 {
    font-size: 2.4rem;
  }

  & p {
    font-size: 1.8rem;

    & code {
      background-color: lightgray;
      padding: 0.4rem;
      border-radius: 0.4rem;
    }
  }

  @media (${breakpoint('maxBreakThree')}) {
    & h3 {
      font-size: 2rem;
    }

    & p {
      font-size: 1.4rem;

      & code {
        background-color: lightgray;
        padding: 0.4rem;
        border-radius: 0.4rem;
      }
    }
  }
`;
