import { useEffect, useRef, useState } from 'react';
import { API } from '../../config';

import useRequest from '../../hooks/use-request';

import * as Styled from './styles';

const ResultCard = props => {
  const resultBoxWidth = useRef();

  const onClickHandler = e => {
    if (e.key !== 'Enter' && e.nativeEvent.type !== 'click') return;

    props.getResult(props.id);
  };

  const PADDING_SIZE = 40;
  useEffect(() => {
    props.setScrollWidth(
      props.sliderEl.current.scrollWidth - props.sliderEl.current.offsetWidth,
      +resultBoxWidth.current.getBoundingClientRect().width + PADDING_SIZE
    );
  }, [props]);

  const { sendRequest } = useRequest();
  const [recipeRating, setRecipeRating] = useState(null);

  useEffect(() => {
    const receiver = data => {
      setRecipeRating(data.data.ratings[0].avgRatings);
    };

    sendRequest(
      { url: API + `/api/v1/reviews/ratingsAverage/${props.id}` },
      receiver
    );
  }, [sendRequest, props.id]);

  return (
    <Styled.ResultsBox
      onClick={onClickHandler}
      animate={{ opacity: 1 }}
      ref={resultBoxWidth}
      tabIndex="0"
      onKeyDown={onClickHandler}
    >
      <Styled.Result>
        <Styled.ImgContainer>
          <img src={`${API}/public/img/recipes/${props.image}`} alt="food" />
        </Styled.ImgContainer>
        <span>{props.title}</span>
        <span>{props.author}</span>
        <span>{recipeRating ? `${recipeRating.toFixed(1)}/5` : ''}</span>
      </Styled.Result>
    </Styled.ResultsBox>
  );
};

export default ResultCard;
