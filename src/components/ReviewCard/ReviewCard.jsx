import { format } from 'date-fns';
import { API } from '../../config';

import * as Styled from './styles';

const ReviewCard = props => {
  const dateFormatted = format(new Date(props.date), 'MM/dd/yyyy');

  return (
    <Styled.CommentContainer>
      <h2>Rating: {props.rating}</h2>

      <p>{props.comment}</p>

      <Styled.ReviewDetails>
        <div>
          <img src={`${API}/public/img/users/${props.img}`} alt="avatar" />
        </div>
        <span>{props.author}</span>
      </Styled.ReviewDetails>

      <span>{dateFormatted}</span>
    </Styled.CommentContainer>
  );
};

export default ReviewCard;
