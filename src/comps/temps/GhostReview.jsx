import { generateFramerElipsis } from '../../helpers/generateFramerElipsis';

import { CommentContainer } from '../../styled/styledComps/styledTemps/styledGhostReview';

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
