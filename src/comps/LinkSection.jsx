import {
  SourceLinkSection,
  SourceLinkTitle,
  SourceLinkDesc,
  SourceRecipeCompany,
  SourceLinkButton,
} from '../styled/styledComps/styledLinkSection';

const LinkSection = props => {
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
