import { useEffect, useRef} from 'react';
import truncateTitle from '../../helpers/truncateTitle';

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
          <img src={`${props.image}`} alt="food" />
        </Styled.ImgContainer>
        <span>{truncateTitle(props.title)}</span>
        <span>{props.author}</span>
        <span>{`${Math.floor(props.ratingsAverage)}/5`}</span>
      </Styled.Result>
    </Styled.ResultsBox>
  );
};

export default ResultCard;
