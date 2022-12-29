import {
  TitleStyles,
  TitleIconStyles,
} from '../styled/styledComps/styledTitle';

const Title = () => {
  return (
    <TitleStyles>
      <h1>
        VEsearch <TitleIconStyles />
      </h1>
      <span>Search for fully vegan recipes!</span>
    </TitleStyles>
  );
};

export default Title;
