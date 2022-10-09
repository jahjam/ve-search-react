import styled from 'styled-components';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

import useRequest from '../hooks/use-request';
import { ReactComponent as Upload } from '../imgs/svg/upload.svg';
import { FlexColumn, Flex } from '../helpers/mixins';
import Button from '../comps/temps/Button';

const ContainerStyled = styled(motion.section)`
  margin-top: 2rem;
  margin-bottom: 4rem;
  width: 80rem;
  height: auto;
  padding: 2rem;
  border: 0.2rem solid black;

  ${FlexColumn()}
  gap: 2rem;

  & h1 {
    font-family: goodlife-serif, sans-serif;
    font-size: 3rem;
  }

  & h2 {
    font-family: goodlife-brush, sans-serif;
    font-size: 3rem;
  }
`;

const RecipeForm = styled.form`
  width: 80%;

  ${FlexColumn()}
  gap: 2rem;

  & label {
    font-size: 1.8rem;
  }

  & input {
    height: 3rem;
    width: 70%;
    border: var(--main-border);

    font-family: inherit !important;

    font-size: 1.6rem;

    padding: 2rem;
  }
`;

const RecipeMainInfo = styled.div`
  width: 100%;
  ${Flex('flex-start')}
  gap: 2rem;

  & div {
    width: 100%;
    ${FlexColumn()}

    &:nth-child(2) {
      width: 80%;
    }

    & label {
      align-self: flex-start;
    }

    & input {
      width: 100%;
    }

    & span {
      align-self: flex-start;
      margin-top: -0.6rem;
    }
  }
`;

const NameLabel = styled.label`
  margin-bottom: 1.1rem;
`;

const ContentEditable = styled.div`
  width: 100%;

  position: relative;

  & span {
    border: var(--main-border);
    display: block;
    width: 100%;
    overflow: hidden;
    resize: both;
    min-height: 10rem;
    line-height: 2rem;

    font-size: 1.6rem;

    padding: 1.4rem;
  }

  & p {
    font-size: 2rem;

    cursor: pointer;

    position: absolute;
    top: 0rem;
    right: 0rem;
  }
`;

const RecipeNumberInfo = styled.div`
  ${Flex('flex-start')}
  gap: 4rem;
  width: 100%;

  & div {
    width: 100%;
    ${FlexColumn()};

    & label {
      font-size: 1.8rem;
    }

    & input {
      width: 100%;
    }

    & span {
      margin-top: -0.6rem;
    }
  }
`;

const ServingsLabel = styled.label`
  margin-bottom: 1.1rem;
`;

const DietTags = styled.div`
  width: 100%;

  & input {
    width: 100%;
  }
`;

const Radio = styled.div`
  width: 100%;
  align-self: flex-start;
  ${Flex('flex-start', 'flex-start')}

  & input {
    width: 10%;

    cursor: pointer;
  }
`;

const NoochContainer = styled.div`
  width: 100%;
  ${Flex()}
  gap: 2rem;

  & div {
    width: 100%;
    margin-bottom: 2rem;

    & div {
      ${Flex()}
      gap: 0.6rem;
    }
  }
`;

const NoochItemContainer = styled.div`
  height: 10rem;
  border: var(--main-border);
  padding: 1rem;

  ${Flex()}

  & div {
    margin-bottom: 0;
    ${FlexColumn()}

    & label {
      font-size: 1.6rem;
    }

    & input {
      padding: 2rem;
      width: 100%;
      height: 100;
      font-size: 1.4rem;

      &::-webkit-outer-spin-button,
      &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
    }
  }
`;

const TitleWithBtn = styled.div`
  ${Flex()}
  gap: 2rem;
`;

const IngredientInputContainer = styled.div`
  width: 100%;
  padding: 2rem;
  border: var(--main-border);

  ${FlexColumn()}

  position: relative;

  & span {
    font-size: 3rem;

    cursor: pointer;

    position: absolute;
    top: 0.5rem;
    right: 2rem;
  }
`;

const MethodsNotProvided = styled.div`
  ${FlexColumn()}
  gap: 1rem;

  & span {
    margin-top: -1rem;
  }
`;

const UploadIconStyles = styled(Upload)`
  height: 2rem;
`;

const UploadForm = styled.div`
  font-size: 1.4rem;
  background-color: var(--main-theme-color);

  & label {
    border: var(--main-border);
    display: inline-block;
    padding: 0.6rem 1.2rem;
    cursor: pointer;

    ${Flex()}
    gap: 1rem;
  }

  & input {
    display: none;
  }

  &:hover {
    background-color: #58b15a;
  }
`;

const ButtonStyles = styled(Button)`
  background-color: var(--main-theme-color);
`;

const ImageUploadTag = styled.span`
  font-size: 1.4rem;
`;

const ErrorMsg = styled.h3`
  font-size: 1.4rem;
  color: #e31212;
`;

const AddRecipe = () => {
  const { isLoading, isError, errorMsg, sendRequest } = useRequest();

  const navigate = useNavigate();

  const initialStaticInputs = {
    name: '',
    difficulty: '',
    description: '',
    servings: '',
    prepTime: '',
    cookTime: '',
    dietTags: '',
    kcalAmount: '',
    kcalMeasurement: '',
    fatAmount: '',
    fatMeasurement: '',
    sugarsAmount: '',
    sugarsMeasurement: '',
    fibreAmount: '',
    fibreMeasurement: '',
    saturatesAmount: '',
    saturatesMeasurement: '',
    protienAmount: '',
    protienMeasurement: '',
    carbsAmount: '',
    carbsMeasurement: '',
    saltAmount: '',
    saltMeasurement: '',
    methodsAlternative: '',
    coverImage: '',
  };

  const [staticInputs, setStaticInputs] = useState(initialStaticInputs);
  const [noochProvided, setNoochProvided] = useState(false);
  const [ingredientInputs, setIngredientInputs] = useState([
    { name: '', amount: '', measurement: '' },
  ]);

  const [methodsProvided, setMethodsProvided] = useState(true);
  const [methodsInputs, setMethodsInputs] = useState([{ id: 1, method: '' }]);
  const [image, setImage] = useState(null);

  const noochHandler = () => {
    setNoochProvided(!noochProvided);
  };

  const methodsHandler = () => {
    setMethodsProvided(!methodsProvided);
  };

  const addIngredientHandler = () => {
    setIngredientInputs(prevState => [
      ...prevState,
      { name: '', amount: '', measurement: '' },
    ]);
  };

  const addMethodHandler = () => {
    setMethodsInputs(prevState => [
      ...prevState,
      { id: prevState.length + 1, method: '' },
    ]);
  };

  const handleChange = (i, e, array, setter) => {
    let newInputVals = [...array];
    newInputVals[i][e.target.name || e.target.id] =
      e.target.value || e.target.innerHTML;
    setter(newInputVals);
  };

  const staticInputsChangeHandler = e => {
    const { name, value, id, innerHTML, files } = e.target;

    if (files) setImage(files[0]);

    setStaticInputs(prevState => ({
      ...prevState,
      [name || id]: value || innerHTML,
    }));
  };

  const removeInputHandler = (i, array, setter) => {
    const newInputVals = [...array];
    const finalInputVals = newInputVals.map(input => {
      if (i + 1 === array.length) return input;
      if (input.id === 1) return input;
      if (input.id > i + 1) input.id -= 1;
      return input;
    });
    finalInputVals.splice(i, 1);
    setter([...finalInputVals]);
  };

  const submitHandler = e => {
    e.preventDefault();

    const formData = new FormData();

    formData.append('name', staticInputs.name);
    formData.append('prepTime', staticInputs.prepTime);
    formData.append('cookTime', staticInputs.cookTime);
    formData.append('difficulty', staticInputs.difficulty);
    formData.append('servings', staticInputs.servings);
    formData.append('description', staticInputs.description);
    formData.append('dietTags', staticInputs.dietTags);
    formData.append('nutritionProvided', JSON.stringify(noochProvided));
    formData.append(
      'nutrition',
      JSON.stringify({
        kcal: {
          amount: staticInputs.kcalAmount,
          measurement: staticInputs.kcalMeasurement,
        },
        fat: {
          amount: staticInputs.fatAmount,
          measurement: staticInputs.fatMeasurement,
        },
        saturates: {
          amount: staticInputs.saturatesAmount,
          measurement: staticInputs.saturatesMeasurement,
        },
        carbs: {
          amount: staticInputs.carbsAmount,
          measurement: staticInputs.carbsMeasurement,
        },
        sugars: {
          amount: staticInputs.sugarsAmount,
          measurement: staticInputs.sugarsMeasurement,
        },
        fibre: {
          amount: staticInputs.fibreAmount,
          measurement: staticInputs.fibreMeasurement,
        },
        protien: {
          amount: staticInputs.protienAmount,
          measurement: staticInputs.protienMeasurement,
        },
        salt: {
          amount: staticInputs.saltAmount,
          measurement: staticInputs.saltMeasurement,
        },
      })
    );
    formData.append('ingredients', JSON.stringify(ingredientInputs));
    formData.append('methodsProvided', JSON.stringify(methodsProvided));
    formData.append('methods', JSON.stringify(methodsInputs));
    formData.append('methodsAlternative', staticInputs.methodsAlternative);
    formData.append('photo', image);

    const reciever = data => {
      navigate(`/search/${data.data.recipe.id}`);
    };

    sendRequest(
      {
        url: '/api/v1/recipes',
        method: 'POST',
        body: formData,
      },
      reciever
    );
  };

  return (
    <ContainerStyled
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1>Add a recipe</h1>

      <h2>General Information</h2>
      <RecipeForm onSubmit={submitHandler}>
        <RecipeMainInfo>
          <div>
            {errorMsg?.match(/\((.*?)\)/g)?.includes('(Name error)') ? (
              <NameLabel style={{ color: '#e31212' }} htmlFor="name">
                Name:
              </NameLabel>
            ) : (
              <NameLabel htmlFor="name">Name:</NameLabel>
            )}
            <input
              value={staticInputs.name}
              onChange={staticInputsChangeHandler}
              type="text"
              name="name"
            ></input>
          </div>

          <div>
            {errorMsg?.match(/\((.*?)\)/g)?.includes('(Difficulty error)') ? (
              <label style={{ color: '#e31212' }} htmlFor="difficulty">
                Difficulty:
              </label>
            ) : (
              <label htmlFor="difficulty">Difficulty:</label>
            )}
            <span>
              ('novice', 'beginner', 'competent', 'proficient', 'master chef')
            </span>
            <input
              value={staticInputs.difficulty}
              onChange={staticInputsChangeHandler}
              type="text"
              name="difficulty"
            ></input>
          </div>
        </RecipeMainInfo>

        <ContentEditable>
          <label htmlFor="desc">Description:</label>
          <span
            value={staticInputs.description}
            onInput={e => staticInputsChangeHandler(e)}
            role="textbox"
            id="description"
            contentEditable
          ></span>
        </ContentEditable>

        <RecipeNumberInfo>
          <div>
            {errorMsg?.match(/\((.*?)\)/g)?.includes('(Servings error)') ? (
              <ServingsLabel style={{ color: '#e31212' }} htmlFor="servings">
                Servings:
              </ServingsLabel>
            ) : (
              <ServingsLabel htmlFor="servings">Servings:</ServingsLabel>
            )}
            <input
              value={staticInputs.servings}
              onChange={staticInputsChangeHandler}
              type="number"
              name="servings"
            ></input>
          </div>

          <div>
            <div>
              {errorMsg
                ?.match(/\((.*?)\)/g)
                ?.includes('(Preperation time error)') ? (
                <label style={{ color: '#e31212' }} htmlFor="prepTime">
                  Preperation time:
                </label>
              ) : (
                <label htmlFor="prepTime">Preperation time:</label>
              )}
              <span>(in minutes)</span>
            </div>
            <input
              value={staticInputs.prepTime}
              onChange={staticInputsChangeHandler}
              type="number"
              name="prepTime"
            ></input>
          </div>

          <div>
            <div>
              {errorMsg?.match(/\((.*?)\)/g)?.includes('(Cook time error)') ? (
                <label style={{ color: '#e31212' }} htmlFor="cookTime">
                  Cook time:
                </label>
              ) : (
                <label htmlFor="cookTime">Cook time:</label>
              )}
              <span>(in minutes)</span>
            </div>
            <input
              value={staticInputs.cookTime}
              onChange={staticInputsChangeHandler}
              type="number"
              name="cookTime"
            ></input>
          </div>
        </RecipeNumberInfo>

        <DietTags>
          {errorMsg?.match(/\((.*?)\)/g)?.includes('(Diet-tag error)') ? (
            <label style={{ color: '#e31212' }} htmlFor="dietTags">
              Diet tags (seperated by a comma):
            </label>
          ) : (
            <label htmlFor="dietTags">Diet tags (seperated by a comma):</label>
          )}
          <input
            value={staticInputs.dietTags}
            onChange={staticInputsChangeHandler}
            type="text"
            name="dietTags"
          ></input>
        </DietTags>

        <TitleWithBtn>
          {errorMsg?.match(/\((.*?)\)/g)?.includes('(Ingredient error)') ? (
            <h2 style={{ color: '#e31212' }}>Ingredients</h2>
          ) : (
            <h2>Ingredients</h2>
          )}

          <ButtonStyles btnSize="small" onClick={addIngredientHandler}>
            Add
          </ButtonStyles>
        </TitleWithBtn>

        {ingredientInputs.map((input, i) => (
          <IngredientInputContainer id={i} key={i}>
            <span
              onClick={() =>
                removeInputHandler(i, ingredientInputs, setIngredientInputs)
              }
            >
              &#x2715;
            </span>
            <label htmlFor="name">Name:</label>
            <input
              onChange={e =>
                handleChange(i, e, ingredientInputs, setIngredientInputs)
              }
              value={input.name}
              name="name"
              type="text"
            ></input>

            <label htmlFor="amount">Amount:</label>
            <input
              onChange={e =>
                handleChange(i, e, ingredientInputs, setIngredientInputs)
              }
              value={input.amount}
              name="amount"
              type="number"
            ></input>

            <label htmlFor="measurement">Measurement:</label>
            <input
              onChange={e =>
                handleChange(i, e, ingredientInputs, setIngredientInputs)
              }
              value={input.measurement}
              name="measurement"
              type="text"
            ></input>
          </IngredientInputContainer>
        ))}

        {errorMsg?.match(/\((.*?)\)/g)?.includes('(Nutrition error)') ? (
          <h2 style={{ color: '#e31212' }}>Nutritional Information</h2>
        ) : (
          <h2>Nutritional Information</h2>
        )}

        <Radio>
          {errorMsg
            ?.match(/\((.*?)\)/g)
            ?.includes('(Nutrition provided error)') ? (
            <label style={{ color: '#e31212' }} htmlFor="noochProvided">
              Nutrition provided:
            </label>
          ) : (
            <label htmlFor="noochProvided">Nutrition provided:</label>
          )}
          <input
            checked={noochProvided}
            onClick={noochHandler}
            readOnly
            type="radio"
            id="noochProvided"
          ></input>
        </Radio>

        {noochProvided && (
          <NoochContainer>
            <div>
              <NoochItemContainer>
                <div>
                  <label htmlFor="kcal">Kcal:</label>
                  <input
                    value={staticInputs.kcalAmount}
                    onChange={staticInputsChangeHandler}
                    type="number"
                    name="kcal"
                  ></input>
                </div>
                <div>
                  <label htmlFor="measurmentKcal">Measurment:</label>
                  <input
                    value={staticInputs.kcalMeasurement}
                    onChange={staticInputsChangeHandler}
                    type="text"
                    name="measurmentKcal"
                  ></input>
                </div>
              </NoochItemContainer>

              <NoochItemContainer>
                <div>
                  <label htmlFor="fat">Fat:</label>
                  <input
                    value={staticInputs.fatAmount}
                    onChange={staticInputsChangeHandler}
                    type="number"
                    name="fat"
                  ></input>
                </div>
                <div>
                  <label htmlFor="measurmentFat">Measurment:</label>
                  <input
                    value={staticInputs.fatMeasurement}
                    onChange={staticInputsChangeHandler}
                    type="text"
                    name="measurmentFat"
                  ></input>
                </div>
              </NoochItemContainer>

              <NoochItemContainer>
                <div>
                  <label htmlFor="saturates">Saturates:</label>
                  <input
                    value={staticInputs.saturatesAmount}
                    onChange={staticInputsChangeHandler}
                    type="number"
                    name="saturates"
                  ></input>
                </div>
                <div>
                  <label htmlFor="measurmentSaturates">Measurment:</label>
                  <input
                    value={staticInputs.saturatesMeasurement}
                    onChange={staticInputsChangeHandler}
                    type="text"
                    name="measurmentSaturates"
                  ></input>
                </div>
              </NoochItemContainer>

              <NoochItemContainer>
                <div>
                  <label htmlFor="carbs">Carbs:</label>
                  <input
                    value={staticInputs.carbsAmount}
                    onChange={staticInputsChangeHandler}
                    type="number"
                    name="carbs"
                  ></input>
                </div>
                <div>
                  <label htmlFor="measurmentCarbs">Measurment:</label>
                  <input
                    value={staticInputs.carbsMeasurement}
                    onChange={staticInputsChangeHandler}
                    type="text"
                    name="measurmentCarbs"
                  ></input>
                </div>
              </NoochItemContainer>
            </div>

            <div>
              <NoochItemContainer>
                <div>
                  <label htmlFor="sugars">Sugars:</label>
                  <input
                    value={staticInputs.sugarsAmount}
                    onChange={staticInputsChangeHandler}
                    type="number"
                    name="sugars"
                  ></input>
                </div>
                <div>
                  <label htmlFor="measurmentSugars">Measurment:</label>
                  <input
                    value={staticInputs.sugarsMeasurement}
                    onChange={staticInputsChangeHandler}
                    type="text"
                    name="measurmentSugars"
                  ></input>
                </div>
              </NoochItemContainer>

              <NoochItemContainer>
                <div>
                  <label htmlFor="fibre">Fibre:</label>
                  <input
                    value={staticInputs.fibreAmount}
                    onChange={staticInputsChangeHandler}
                    type="number"
                    name="fibre"
                  ></input>
                </div>
                <div>
                  <label htmlFor="measurmentFibre">Measurment:</label>
                  <input
                    value={staticInputs.fibreMeasurement}
                    onChange={staticInputsChangeHandler}
                    type="text"
                    name="measurmentFibre"
                  ></input>
                </div>
              </NoochItemContainer>

              <NoochItemContainer>
                <div>
                  <label htmlFor="protient">Protien:</label>
                  <input
                    value={staticInputs.protienAmount}
                    onChange={staticInputsChangeHandler}
                    type="number"
                    name="protient"
                  ></input>
                </div>
                <div>
                  <label htmlFor="measurmentProtient">Measurment:</label>
                  <input
                    value={staticInputs.protienMeasurement}
                    onChange={staticInputsChangeHandler}
                    type="text"
                    name="measurmentProtient"
                  ></input>
                </div>
              </NoochItemContainer>

              <NoochItemContainer>
                <div>
                  <label htmlFor="salt">Salt:</label>
                  <input
                    value={staticInputs.saltAmount}
                    onChange={staticInputsChangeHandler}
                    type="number"
                    name="salt"
                  ></input>
                </div>
                <div>
                  <label htmlFor="measurmentSalt">Measurment:</label>
                  <input
                    value={staticInputs.saltMeasurement}
                    onChange={staticInputsChangeHandler}
                    type="text"
                    name="measurmentSalt"
                  ></input>
                </div>
              </NoochItemContainer>
            </div>
          </NoochContainer>
        )}

        <TitleWithBtn>
          {errorMsg?.match(/\((.*?)\)/g)?.includes('(Methods error)') ? (
            <h2 style={{ color: '#e31212' }}>Methods</h2>
          ) : (
            <h2>Methods</h2>
          )}

          {methodsProvided && (
            <ButtonStyles btnSize="small" onClick={() => addMethodHandler()}>
              Add
            </ButtonStyles>
          )}
        </TitleWithBtn>

        <Radio>
          {errorMsg
            ?.match(/\((.*?)\)/g)
            ?.includes('(Methods provided error)') ? (
            <label style={{ color: '#e31212' }} htmlFor="methodsProvided">
              Methods provided:
            </label>
          ) : (
            <label htmlFor="methodsProvided">Methods provided:</label>
          )}
          <input
            checked={methodsProvided}
            onClick={methodsHandler}
            readOnly
            type="radio"
            id="methodsProvided"
          ></input>
        </Radio>

        {methodsProvided &&
          methodsInputs.map((input, i) => (
            <ContentEditable key={i}>
              <p
                onClick={() =>
                  removeInputHandler(i, methodsInputs, setMethodsInputs)
                }
              >
                &#x2715;
              </p>
              <label htmlFor="method">{input.id}:</label>
              <span
                onInput={e =>
                  handleChange(i, e, methodsInputs, setMethodsInputs)
                }
                value={input.method}
                role="textbox"
                id="method"
                contentEditable
              ></span>
            </ContentEditable>
          ))}

        {!methodsProvided && <h2>Methods Alternative</h2>}

        {!methodsProvided && (
          <MethodsNotProvided>
            {errorMsg
              ?.match(/\((.*?)\)/g)
              ?.includes('(Methods alternative error)') ? (
              <label style={{ color: '#e31212' }} htmlFor="methodsAlternative">
                Link to alternative methods:
              </label>
            ) : (
              <label htmlFor="methodsAlternative">
                Link to alternative methods:
              </label>
            )}

            <span>
              (Please provide an alternative URL for methods on how to cook this
              recipes, such as, a personal blog.)
            </span>
            <input
              value={staticInputs.methodsAlternative}
              onChange={staticInputsChangeHandler}
              type="text"
              name="methodsAlternative"
            ></input>
          </MethodsNotProvided>
        )}

        {errorMsg?.match(/\((.*?)\)/g)?.includes('(Cover image error)') ? (
          <h2 style={{ color: '#e31212' }}>Cover Image</h2>
        ) : (
          <h2>Cover Image</h2>
        )}

        <UploadForm>
          <label>
            <UploadIconStyles />
            <input
              onChange={staticInputsChangeHandler}
              type="file"
              name="coverImage"
              placeholder="Upload a cover photo"
            />
            Upload
          </label>
        </UploadForm>

        {image && <ImageUploadTag>Cover image: {image.name}</ImageUploadTag>}

        <h2>Submit</h2>

        {isError && (
          <ErrorMsg>
            Error: {errorMsg?.replaceAll(/ *\([^)]*\) */g, ' ')}.
          </ErrorMsg>
        )}

        <ButtonStyles type="submit" btnSize="large">
          {isLoading ? 'Submitting...' : 'Submit recipe!'}
        </ButtonStyles>
      </RecipeForm>
    </ContainerStyled>
  );
};

export default AddRecipe;
