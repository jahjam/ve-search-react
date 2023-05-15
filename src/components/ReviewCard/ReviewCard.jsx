import { format } from 'date-fns';
import { useContext } from 'react';
import { API } from '../../config';
import useRequest from '../../hooks/use-request';
import AuthContext from '../../store/auth-context';

import * as Styled from './styles';

const ReviewCard = props => {
  const authCtx = useContext(AuthContext);
  const { _id: userId } = authCtx.userDetails.user;
  const { author_id: authorId } = props;

  const dateFormatted = format(new Date(props.date), 'MM/dd/yyyy');

  const { sendRequest, isLoading, isError, errorMsg } = useRequest();

  const handleDelete = () => {
    const res = data => {
      props.handleCommentDelete(props.review_id);
      return 0;
    };

    sendRequest(
      { method: 'DELETE', url: API + `/api/v1/reviews/${props.review_id}` },
      res
    );
  };

  return (
    <Styled.CommentContainer>
      {isError && <Styled.ErrorMsg>{errorMsg}</Styled.ErrorMsg>}
      {isLoading && <Styled.Loading>...</Styled.Loading>}
      {authorId === userId && !isError && <Styled.Bin onClick={handleDelete} />}

      <h2>Rating: {props.rating}</h2>

      <p>{props.comment}</p>

      <Styled.ReviewDetails>
        <div>
          <img src={`${API}/public/imgs/${props.img}`} alt="avatar" />
        </div>
        <span>{props.author}</span>
      </Styled.ReviewDetails>

      <span>{dateFormatted}</span>
    </Styled.CommentContainer>
  );
};

export default ReviewCard;
