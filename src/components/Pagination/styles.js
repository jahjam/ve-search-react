import styled from 'styled-components';
import { Flex } from '../../styled-utils/mixins';
import { breakpoint } from '../../styled-utils/breakpoints';

export const PaginationContainer = styled.div`
  ${Flex()}
  list-style-type: none;
`;

export const Page = styled.li`
  padding: 0 1.2rem;
  height: 3.2rem;
  text-align: center;
  margin: auto 0.4rem;
  color: rgba(0, 0, 0, 0.8);
  ${Flex()}
  box-sizing: border-box;
  align-items: center;
  letter-spacing: 0.01071em;
  border-radius: 1.6rem;
  line-height: 1.5;
  font-size: 1.3rem;
  width: 3.2rem;

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
    cursor: pointer;
  }

  background-color: ${props => {
    if (props.curPage === props.pageNum) return '#00000014';
  }};

  background-color: ${props => {
    if (props.DOTS) return 'transparent';
  }};

  @media (${breakpoint('maxBreakOne')}) {
    font-size: 1.1rem;
    height: 3rem;
  }

  @media (${breakpoint('maxBreakFour')}) {
    padding: 0;
    font-size: 1rem;
    width: 2.4rem;
    height: 2.4rem;
    border-radius: 50%;
  }
`;
