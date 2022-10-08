import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import { Flex } from '../../helpers/mixins';

import truncateParagraph from '../../helpers/truncateParagraph';

const RecipeCardStyles = styled.div`
  width: 30rem;
  height: auto;
  border: var(--main-border);

  cursor: pointer;

  & div:nth-child(1) {
    margin: 1rem;
    height: 10rem;
    width: auto;

    background-color: var(--main-theme-color);

    padding: 1rem;

    ${Flex()}
    gap: 0.6rem;

    &:hover {
      background-color: #58b15a;
    }

    & p {
      width: 16rem;
    }

    & div:nth-child(1) {
      height: 7rem;
      min-width: 7rem;

      background-color: black;

      border: var(--main-border);

      overflow: hidden;

      & img {
        height: 150%;
        width: 150%;
      }
    }
  }
`;

const RecipeCard = props => {
  const navigate = useNavigate();

  const onClickHandler = () => {
    navigate(`/search/${props.id}`);
  };

  return (
    <RecipeCardStyles onClick={onClickHandler}>
      <div>
        <div>
          <img src={`/public/img/recipes/${props.photo}`} alt="recipe" />
        </div>
        <div>
          <h2>{props.name}</h2>
          <p>{truncateParagraph(props.desc)}</p>
        </div>
      </div>
    </RecipeCardStyles>
  );
};

export default RecipeCard;
