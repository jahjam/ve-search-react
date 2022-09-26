import styled from 'styled-components';
import { ReactComponent as TitleIcon } from '../imgs/svg/title-icon.svg';
import { FlexColumn, Flex } from '../helpers/mixins';
import { motion } from 'framer-motion';

const TitleStyles = styled(motion.div)`
  width: 100%;
  opacity: 0;

  ${FlexColumn()}

  & h1 {
    font-family: goodlife-brush, sans-serif;
    font-size: 5rem;
  }

  & span {
    font-size: 1.8rem;
  }
`;

const TitleIconStyles = styled(TitleIcon)`
  height: 40px;
  width: 40px;
  color: #a4d2ac;

  margin-top: 0.5rem;
  align-self: flex-start;
`;

const Title = () => {
  return (
    <TitleStyles
      animate={{ opacity: 1 }}
      transition={{ type: 'spring', duration: 6 }}
    >
      <h1>
        VEsearch <TitleIconStyles />
      </h1>
      <span>Search for fully vegan recipes!</span>
    </TitleStyles>
  );
};

export default Title;
