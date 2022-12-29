import {
  ResultsBox,
  ResultStyled,
  ImgContainerStyled,
} from '../../styled/styledComps/styledTemps/styledGhostCard';

const GhostCard = () => {
  return (
    <ResultsBox
      animate={{ opacity: 0.2 }}
      transition={{ repeatType: 'mirror', repeat: Infinity, duration: 0.8 }}
    >
      <ResultStyled>
        <ImgContainerStyled>
          <div></div>
        </ImgContainerStyled>
        <div>Loading Recipe...</div>
        <div></div>
      </ResultStyled>
    </ResultsBox>
  );
};

export default GhostCard;
