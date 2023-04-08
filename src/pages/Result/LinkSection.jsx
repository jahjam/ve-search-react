import * as Styled from './styles';

const LinkSection = props => {
  return (
    <Styled.SourceLinkSection>
      <Styled.SourceLinkTitle>Want to cook this recipe?</Styled.SourceLinkTitle>
      <Styled.SourceLinkDesc>
        This recipe was written by{' '}
        <Styled.SourceRecipeCompany>
          {props.publisher}
        </Styled.SourceRecipeCompany>
        . For instructions on how to cook it, visit their website here:
      </Styled.SourceLinkDesc>
      <a href={props.url} rel="noreferrer" target="_blank">
        <Styled.SourceLinkButton btnSize="large">
          Cook it!
        </Styled.SourceLinkButton>
      </a>
    </Styled.SourceLinkSection>
  );
};

export default LinkSection;
