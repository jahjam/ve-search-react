import { generateFramerElipsis } from '../../../helpers/generateFramerElipsis';

import * as Styled from './styles';

const GhostReview = () => {
  return (
    <Styled.CommentContainer>
      {generateFramerElipsis({
        gap: '0.4rem',
      })}
    </Styled.CommentContainer>
  );
};

export default GhostReview;
