import styled from 'styled-components';
import { useState } from 'react';
import { motion } from 'framer-motion';

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

const AddRecipe = () => {
  const [noochProvided, setNoochProvided] = useState(false);
  const [methodsProvided, setMethodsProvided] = useState(true);

  const noochHandler = () => {
    setNoochProvided(!noochProvided);
  };

  const methodsHandler = () => {
    setMethodsProvided(!methodsProvided);
  };

  const [ingredientInputs, setIngredientInputs] = useState([
    { name: '', amount: '', measurement: '' },
  ]);

  const [methodsInputs, setMethodsInputs] = useState([{ id: 1, method: '' }]);

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

  const submitHandler = () => {};

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
            <NameLabel htmlFor="name">Name:</NameLabel>
            <input type="text" id="name"></input>
          </div>

          <div>
            <label htmlFor="difficulty">Difficulty:</label>
            <span>(in minutes)</span>
            <input type="text" id="difficulty"></input>
          </div>
        </RecipeMainInfo>

        <ContentEditable>
          <label htmlFor="desc">Description:</label>
          <span role="textbox" id="desc" contentEditable></span>
        </ContentEditable>

        <RecipeNumberInfo>
          <div>
            <ServingsLabel htmlFor="servings">Servings:</ServingsLabel>
            <input type="number" id="servings"></input>
          </div>

          <div>
            <div>
              <label htmlFor="prepTime">Preperation time:</label>
              <span>(in minutes)</span>
            </div>
            <input type="number" id="prepTime"></input>
          </div>

          <div>
            <div>
              <label htmlFor="cookTime">Cook time:</label>
              <span>(in minutes)</span>
            </div>
            <input type="number" id="cookTime"></input>
          </div>
        </RecipeNumberInfo>

        <DietTags>
          <label htmlFor="dietTags">Diet tags (seperated by a comma):</label>
          <input type="text" id="dietTags"></input>
        </DietTags>

        <TitleWithBtn>
          <h2>Ingredients</h2>

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

        <h2>Nutritional Information</h2>

        <Radio>
          <label htmlFor="noochProvided">Nutrition provided:</label>
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
                  <input type="number" id="kcal"></input>
                </div>
                <div>
                  <label htmlFor="measurmentKcal">Measurment:</label>
                  <input type="text" id="measurmentKcal"></input>
                </div>
              </NoochItemContainer>

              <NoochItemContainer>
                <div>
                  <label htmlFor="fat">Fat:</label>
                  <input type="number" id="fat"></input>
                </div>
                <div>
                  <label htmlFor="measurmentFat">Measurment:</label>
                  <input type="text" id="measurmentFat"></input>
                </div>
              </NoochItemContainer>

              <NoochItemContainer>
                <div>
                  <label htmlFor="saturates">Saturates:</label>
                  <input type="number" id="saturates"></input>
                </div>
                <div>
                  <label htmlFor="measurmentSaturates">Measurment:</label>
                  <input type="text" id="measurmentSaturates"></input>
                </div>
              </NoochItemContainer>

              <NoochItemContainer>
                <div>
                  <label htmlFor="carbs">Carbs:</label>
                  <input type="number" id="carbs"></input>
                </div>
                <div>
                  <label htmlFor="measurmentCarbs">Measurment:</label>
                  <input type="text" id="measurmentCarbs"></input>
                </div>
              </NoochItemContainer>
            </div>

            <div>
              <NoochItemContainer>
                <div>
                  <label htmlFor="sugars">Sugars:</label>
                  <input type="number" id="sugars"></input>
                </div>
                <div>
                  <label htmlFor="measurmentSugars">Measurment:</label>
                  <input type="text" id="measurmentSugars"></input>
                </div>
              </NoochItemContainer>

              <NoochItemContainer>
                <div>
                  <label htmlFor="fibre">Fibre:</label>
                  <input type="number" id="fibre"></input>
                </div>
                <div>
                  <label htmlFor="measurmentFibre">Measurment:</label>
                  <input type="text" id="measurmentFibre"></input>
                </div>
              </NoochItemContainer>

              <NoochItemContainer>
                <div>
                  <label htmlFor="protient">Protien:</label>
                  <input type="number" id="protient"></input>
                </div>
                <div>
                  <label htmlFor="measurmentProtient">Measurment:</label>
                  <input type="text" id="measurmentProtient"></input>
                </div>
              </NoochItemContainer>

              <NoochItemContainer>
                <div>
                  <label htmlFor="salt">Salt:</label>
                  <input type="number" id="salt"></input>
                </div>
                <div>
                  <label htmlFor="measurmentSalt">Measurment:</label>
                  <input type="text" id="measurmentSalt"></input>
                </div>
              </NoochItemContainer>
            </div>
          </NoochContainer>
        )}

        <TitleWithBtn>
          <h2>Methods</h2>

          <ButtonStyles btnSize="small" onClick={() => addMethodHandler()}>
            Add
          </ButtonStyles>
        </TitleWithBtn>

        <Radio>
          <label htmlFor="noochProvided">Methods provided:</label>
          <input
            checked={methodsProvided}
            onClick={methodsHandler}
            readOnly
            type="radio"
            id="noochProvided"
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
              <label htmlFor="desc">{input.id}:</label>
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
            <label htmlFor="difficulty">Link to alternative methods:</label>
            <span>
              (Please provide an alternative URL for methods on how to cook this
              recipes, such as, a personal blog.)
            </span>
            <input type="text" id="difficulty"></input>
          </MethodsNotProvided>
        )}

        <h2>Cover Image</h2>

        <UploadForm>
          <label>
            <UploadIconStyles />
            <input type="file" placeholder="Upload a cover photo" />
            Upload
          </label>
        </UploadForm>

        <h2>Submit</h2>

        <ButtonStyles btnSize="large">Submit recipe!</ButtonStyles>
      </RecipeForm>
    </ContainerStyled>
  );
};

export default AddRecipe;

/*
 "name": "Tofu noodles",
    "prepTime": 30,
    "cookTime": 20,
    "difficulty": "competent",
    "servings": 2,
    "description": "One for any noodle lover!",
    "dietTags": ["low-cal", "gluten-free"],
    "nutritionProvided": true,
    "nutrition": {
        "kcal": {"amount": 500, "measurement": "g"},
        "fat": {"amount": 60, "measurement": "g"},
        "saturates": {"amount": 80, "measurement": "g"},
        "carbs": {"amount": 15, "measurement": "g"},
        "sugars": {"amount": 0.5, "measurement": "g"},
        "fibre": {"amount": 100, "measurement": "g"},
        "protien": {"amount": 200, "measurement": "g"},
        "salt": {"amount": 0.2, "measurement": "g"}
    },
    "ingredients": [
        {
            "amount": 1,
            "measurement": "cup",
            "name": "Sliced carrots"
        },
        {
            "amount": 240,
            "measurement": "g",
            "name": "tofu"
        },
         {
            "amount": 2,
            "measurement": "cloves",
            "name": "Garlic"
        },
         {
            "amount": 2,
            "measurement": "tbs",
            "name": "Turmeric"
        },
         {
            "amount": 1,
            "measurement": "thumb-sized",
            "name": "Ginger"
        }
    ],
    "methodsProvided": "false",
    "methodsAlternative": "https://www.yummyrecipes.com",
    "coverImage": "photo-of-tofu-noodles.jpeg"
*/
