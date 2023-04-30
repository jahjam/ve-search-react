import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { API } from '../../config';

import useRequest from '../../hooks/use-request';

import * as Styled from './styles';

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

const AddRecipe = () => {
  const navigate = useNavigate();
  const { isLoading, isError, errorMsg, sendRequest } = useRequest();

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
    console.log(e);
    if (e.key !== 'Enter' && e.nativeEvent.type !== 'click') return;

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
    formData.append('dietTags', JSON.stringify([staticInputs.dietTags]));
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
        url: `${API}/api/v1/recipes`,
        method: 'POST',
        body: formData,
      },
      reciever
    );
  };

  return (
    <Styled.Container
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1>Add a recipe</h1>

      <h2>General Information</h2>
      <Styled.RecipeForm onSubmit={submitHandler}>
        <Styled.RecipeMainInfo>
          <div>
            {errorMsg?.match(/\((.*?)\)/g)?.includes('(Name error)') ? (
              <Styled.NameLabel style={{ color: '#e31212' }} htmlFor="name">
                Name:
              </Styled.NameLabel>
            ) : (
              <Styled.NameLabel htmlFor="name">Name:</Styled.NameLabel>
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
        </Styled.RecipeMainInfo>

        <Styled.ContentEditable>
          <label htmlFor="desc">Description:</label>
          <span
            value={staticInputs.description}
            onInput={e => staticInputsChangeHandler(e)}
            role="textbox"
            id="description"
            contentEditable
          ></span>
        </Styled.ContentEditable>

        <Styled.RecipeNumberInfo>
          <div>
            {errorMsg?.match(/\((.*?)\)/g)?.includes('(Servings error)') ? (
              <Styled.ServingsLabel
                style={{ color: '#e31212' }}
                htmlFor="servings"
              >
                Servings:
              </Styled.ServingsLabel>
            ) : (
              <Styled.ServingsLabel htmlFor="servings">
                Servings:
              </Styled.ServingsLabel>
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
        </Styled.RecipeNumberInfo>

        <Styled.DietTags>
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
        </Styled.DietTags>

        <Styled.TitleWithBtn>
          {errorMsg?.match(/\((.*?)\)/g)?.includes('(Ingredient error)') ? (
            <h2 style={{ color: '#e31212' }}>Ingredients</h2>
          ) : (
            <h2>Ingredients</h2>
          )}

          <Styled.Button btnSize="small" onClick={addIngredientHandler}>
            Add
          </Styled.Button>
        </Styled.TitleWithBtn>

        {ingredientInputs.map((input, i) => (
          <Styled.IngredientInputContainer id={i} key={i}>
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
          </Styled.IngredientInputContainer>
        ))}

        {errorMsg?.match(/\((.*?)\)/g)?.includes('(Nutrition error)') ? (
          <h2 style={{ color: '#e31212' }}>Nutritional Information</h2>
        ) : (
          <h2>Nutritional Information</h2>
        )}

        <Styled.Radio>
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
        </Styled.Radio>

        {noochProvided && (
          <Styled.NoochContainer>
            <div>
              <Styled.NoochItemContainer>
                <div>
                  <label htmlFor="kcalAmount">Kcal:</label>
                  <input
                    value={staticInputs.kcalAmount}
                    onChange={staticInputsChangeHandler}
                    type="number"
                    name="kcalAmount"
                  ></input>
                </div>
                <div>
                  <label htmlFor="kcalMeasurement">Measurment:</label>
                  <input
                    value={staticInputs.kcalMeasurement}
                    onChange={staticInputsChangeHandler}
                    type="text"
                    name="kcalMeasurement"
                  ></input>
                </div>
              </Styled.NoochItemContainer>

              <Styled.NoochItemContainer>
                <div>
                  <label htmlFor="fatAmount">Fat:</label>
                  <input
                    value={staticInputs.fatAmount}
                    onChange={staticInputsChangeHandler}
                    type="number"
                    name="fatAmount"
                  ></input>
                </div>
                <div>
                  <label htmlFor="fatMeasurement">Measurment:</label>
                  <input
                    value={staticInputs.fatMeasurement}
                    onChange={staticInputsChangeHandler}
                    type="text"
                    name="fatMeasurement"
                  ></input>
                </div>
              </Styled.NoochItemContainer>

              <Styled.NoochItemContainer>
                <div>
                  <label htmlFor="saturatesAmount">Saturates:</label>
                  <input
                    value={staticInputs.saturatesAmount}
                    onChange={staticInputsChangeHandler}
                    type="number"
                    name="saturatesAmount"
                  ></input>
                </div>
                <div>
                  <label htmlFor="saturatesMeasurement">Measurment:</label>
                  <input
                    value={staticInputs.saturatesMeasurement}
                    onChange={staticInputsChangeHandler}
                    type="text"
                    name="saturatesMeasurement"
                  ></input>
                </div>
              </Styled.NoochItemContainer>

              <Styled.NoochItemContainer>
                <div>
                  <label htmlFor="carbsAmount">Carbs:</label>
                  <input
                    value={staticInputs.carbsAmount}
                    onChange={staticInputsChangeHandler}
                    type="number"
                    name="carbsAmount"
                  ></input>
                </div>
                <div>
                  <label htmlFor="carbsMeasurement">Measurment:</label>
                  <input
                    value={staticInputs.carbsMeasurement}
                    onChange={staticInputsChangeHandler}
                    type="text"
                    name="carbsMeasurement"
                  ></input>
                </div>
              </Styled.NoochItemContainer>
            </div>

            <div>
              <Styled.NoochItemContainer>
                <div>
                  <label htmlFor="sugarsAmount">Sugars:</label>
                  <input
                    value={staticInputs.sugarsAmount}
                    onChange={staticInputsChangeHandler}
                    type="number"
                    name="sugarsAmount"
                  ></input>
                </div>
                <div>
                  <label htmlFor="sugarsMeasurement">Measurment:</label>
                  <input
                    value={staticInputs.sugarsMeasurement}
                    onChange={staticInputsChangeHandler}
                    type="text"
                    name="sugarsMeasurement"
                  ></input>
                </div>
              </Styled.NoochItemContainer>

              <Styled.NoochItemContainer>
                <div>
                  <label htmlFor="fibreAmount">Fibre:</label>
                  <input
                    value={staticInputs.fibreAmount}
                    onChange={staticInputsChangeHandler}
                    type="number"
                    name="fibreAmount"
                  ></input>
                </div>
                <div>
                  <label htmlFor="fibreMeasurement">Measurment:</label>
                  <input
                    value={staticInputs.fibreMeasurement}
                    onChange={staticInputsChangeHandler}
                    type="text"
                    name="fibreMeasurement"
                  ></input>
                </div>
              </Styled.NoochItemContainer>

              <Styled.NoochItemContainer>
                <div>
                  <label htmlFor="protienAmount">Protien:</label>
                  <input
                    value={staticInputs.protienAmount}
                    onChange={staticInputsChangeHandler}
                    type="number"
                    name="protienAmount"
                  ></input>
                </div>
                <div>
                  <label htmlFor="protienMeasurement">Measurment:</label>
                  <input
                    value={staticInputs.protienMeasurement}
                    onChange={staticInputsChangeHandler}
                    type="text"
                    name="protienMeasurement"
                  ></input>
                </div>
              </Styled.NoochItemContainer>

              <Styled.NoochItemContainer>
                <div>
                  <label htmlFor="saltAmount">Salt:</label>
                  <input
                    value={staticInputs.saltAmount}
                    onChange={staticInputsChangeHandler}
                    type="number"
                    name="saltAmount"
                  ></input>
                </div>
                <div>
                  <label htmlFor="saltMeasurement">Measurment:</label>
                  <input
                    value={staticInputs.saltMeasurement}
                    onChange={staticInputsChangeHandler}
                    type="text"
                    name="saltMeasurement"
                  ></input>
                </div>
              </Styled.NoochItemContainer>
            </div>
          </Styled.NoochContainer>
        )}

        <Styled.TitleWithBtn>
          {errorMsg?.match(/\((.*?)\)/g)?.includes('(Methods error)') ? (
            <h2 style={{ color: '#e31212' }}>Methods</h2>
          ) : (
            <h2>Methods</h2>
          )}

          {methodsProvided && (
            <Styled.Button btnSize="small" onClick={() => addMethodHandler()}>
              Add
            </Styled.Button>
          )}
        </Styled.TitleWithBtn>

        <Styled.Radio>
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
        </Styled.Radio>

        {methodsProvided &&
          methodsInputs.map((input, i) => (
            <Styled.ContentEditable key={i}>
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
            </Styled.ContentEditable>
          ))}

        {!methodsProvided && <h2>Methods Alternative</h2>}

        {!methodsProvided && (
          <Styled.MethodsNotProvided>
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
          </Styled.MethodsNotProvided>
        )}

        {errorMsg?.match(/\((.*?)\)/g)?.includes('(Cover image error)') ? (
          <h2 style={{ color: '#e31212' }}>Cover Image</h2>
        ) : (
          <h2>Cover Image</h2>
        )}

        <Styled.UploadForm>
          <label htmlFor="coverImage">
            <Styled.UploadIcon />
          </label>
          <input
            onChange={staticInputsChangeHandler}
            type="file"
            name="coverImage"
            placeholder="Upload a cover photo"
            tabIndex="0"
          />
        </Styled.UploadForm>

        {image && (
          <Styled.ImageUploadTag>
            Cover image: {image.name}
          </Styled.ImageUploadTag>
        )}

        <h2>Submit</h2>

        {isError && (
          <Styled.ErrorMsg>
            Error: {errorMsg?.replaceAll(/ *\([^)]*\) */g, ' ')}
          </Styled.ErrorMsg>
        )}

        <Styled.Button type="submit" btnSize="large">
          {isLoading ? 'Submitting...' : 'Submit recipe!'}
        </Styled.Button>
      </Styled.RecipeForm>
    </Styled.Container>
  );
};

export default AddRecipe;
