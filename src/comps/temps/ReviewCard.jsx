import { format } from 'date-fns';

import {
  CommentContainer,
  ReviewDetails,
} from '../../styled/styledComps/styledTemps/styledReviewCard';

const ReviewCard = props => {
  const dateFormatted = format(new Date(props.date), 'MM/dd/yyyy');

  return (
    <CommentContainer>
      <h2>Rating: {props.rating}</h2>

      <p>{props.comment}</p>

      <ReviewDetails>
        <span>{dateFormatted}</span>
        <span>{props.author}</span>
      </ReviewDetails>
    </CommentContainer>
  );
};

export default ReviewCard;
