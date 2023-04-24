import * as Styled from './styles';

const GhostCard = () => {
  return (
    <Styled.ResultsBox
      animate={{ opacity: 0.2 }}
      transition={{ repeatType: 'mirror', repeat: Infinity, duration: 0.8 }}
    >
      <Styled.Result>
        <Styled.ImgContainer>
          <div></div>
        </Styled.ImgContainer>
        <div>Loading Recipe...</div>
        <div></div>
      </Styled.Result>
    </Styled.ResultsBox>
  );
};

export default GhostCard;
