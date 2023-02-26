import {
  StyledRecipeServingsBox,
  ServingsBtn,
  ArrowLeftIconStyles,
  ArrowRightIconStyles,
} from '../styled/styledPages/styledResult';

const RecipeServingsBox = props => {
  // seperate ingedients to calculate servings...
  const servingsIncreaseHandler = () => {
    const newServing = props.serving + 1;

    const newIngs = props.ings.map(ing => {
      const newIng = {
        _id: ing._id,
        amount: (ing.amount * newServing) / props.serving,
        measurement: ing.measurement,
        name: ing.name,
      };

      return newIng;
    });

    props.setServingHandler(newServing);
    props.setIngsHandler(newIngs);
  };

  const servingsDecreaseHandler = () => {
    if (props.serving === 1) return;

    const newServing = props.serving - 1;

    const newIngs = props.ings.map(ing => {
      const newIng = {
        _id: ing._id,
        amount: (ing.amount * newServing) / props.serving,
        measurement: ing.measurement,
        name: ing.name,
      };

      return newIng;
    });

    props.setServingHandler(newServing);
    props.setIngsHandler(newIngs);
  };

  return (
    <StyledRecipeServingsBox>
      <ServingsBtn
        onClick={servingsDecreaseHandler}
        btnSize="small"
        icon={true}
      >
        <ArrowLeftIconStyles />
      </ServingsBtn>
      <span>{props.serving} Servings</span>
      <ServingsBtn
        onClick={servingsIncreaseHandler}
        btnSize="small"
        icon={true}
      >
        <ArrowRightIconStyles />
      </ServingsBtn>
    </StyledRecipeServingsBox>
  );
};

export default RecipeServingsBox;
