import styled from 'styled-components';
import { motion } from 'framer-motion';

import { Flex, FlexColumn } from '../../helpers/mixins';

export const ContainerStyled = styled(motion.section)`
  margin-top: 2rem;
  width: 100rem;
  height: auto;
  padding: 2rem;
  border: 0.2rem solid black;

  ${FlexColumn()}
  gap: 2rem;
`;

export const Results = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  align-items: center;
  row-gap: 2rem;
  column-gap: 1rem;
`;

export const SearchBar = styled.div`
  align-self: flex-end;

  ${Flex()}
  gap: 1.4rem;

  & label {
    font-size: 1.6rem;
  }

  & input {
    font-family: inherit;
    padding: 1rem;
    border: var(--main-border);
  }
`;

export const NoRecipesMsg = styled.span`
  grid-column: 1/4;

  font-size: 2rem;
`;
