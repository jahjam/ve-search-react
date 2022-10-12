import styled from 'styled-components';
import { FlexColumn } from '../../helpers/mixins';
import { generateFramerElipsis } from '../../helpers/generateFramerElipsis';

const CommentContainer = styled.div`
  border: var(--main-border);
  padding: 2rem;
  width: 40rem;
  height: 10rem;

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
`;

const GhostReview = () => {
  return (
    <CommentContainer>
      {generateFramerElipsis({
        gap: '0.4rem',
      })}
    </CommentContainer>
  );
};

export default GhostReview;
