import { format } from 'date-fns';

import * as Styled from './styles';

const ReviewCard = props => {
  const dateFormatted = format(new Date(props.date), 'MM/dd/yyyy');

  return (
    <Styled.CommentContainer>
      <h2>Rating: {props.rating}</h2>

      <p>{props.comment}</p>

      <Styled.ReviewDetails>
        <span>{dateFormatted}</span>
        <span>{props.author}</span>
      </Styled.ReviewDetails>
    </Styled.CommentContainer>
  );
};

export default ReviewCard;
