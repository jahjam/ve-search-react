import styled from 'styled-components';

import Button from './temps/Button';

const SourceLinkSection = styled.section`
  width: 80%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;
`;

const SourceLinkTitle = styled.h2`
  font-family: goodlife-serif, sans-serif;
  font-weight: 700;
  font-size: 3rem;
  text-align: center;
`;

const SourceLinkDesc = styled.span`
  font-size: 1.8rem;
  width: 80%;
  text-align: center;
`;

const SourceRecipeCompany = styled.span`
  font-weight: 700;
  font-size: 1.8rem;
`;

const SourceLinkButton = styled(Button)`
  height: 6rem;
  width: 12rem;
  font-family: inherit;
  font-size: 2rem;
  line-height: 6rem;

  background-color: var(--main-theme-color);
`;

const LinkSection = props => {
  console.log(props);
  return (
    <SourceLinkSection>
      <SourceLinkTitle>Want to cook this recipe?</SourceLinkTitle>
      <SourceLinkDesc>
        This recipe was written by{' '}
        <SourceRecipeCompany>{props.publisher}</SourceRecipeCompany>. For
        instructions on how to cook it, visit their website here:
      </SourceLinkDesc>
      <a href={props.url} rel="noreferrer" target="_blank">
        <SourceLinkButton btnSize="large">Cook it!</SourceLinkButton>
      </a>
    </SourceLinkSection>
  );
};

export default LinkSection;
