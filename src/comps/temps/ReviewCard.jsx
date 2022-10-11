import styled from 'styled-components';
import { FlexColumn } from '../../helpers/mixins';

const CommentContainer = styled.div`
  border: var(--main-border);
  padding: 2rem;
  width: 40rem;

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

const ReviewCard = props => {
  return (
    <CommentContainer>
      <h2>Rating: {props.rating}</h2>

      <p>{props.comment}</p>

      <span>{props.author}</span>
    </CommentContainer>
  );
};

export default ReviewCard;
