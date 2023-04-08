import * as Styled from '../../pages/Result/styles';

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
    <Styled.StyledRecipeServingsBox>
      <Styled.ServingsBtn
        onClick={servingsDecreaseHandler}
        btnSize="small"
        icon={true}
      >
        <Styled.ArrowLeftIcon />
      </Styled.ServingsBtn>
      <span>{props.serving} Servings</span>
      <Styled.ServingsBtn
        onClick={servingsIncreaseHandler}
        btnSize="small"
        icon={true}
      >
        <Styled.ArrowRightIcon />
      </Styled.ServingsBtn>
    </Styled.StyledRecipeServingsBox>
  );
};

export default RecipeServingsBox;
