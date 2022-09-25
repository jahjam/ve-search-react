import styled from 'styled-components';

import Button from './temps/Button';
import { ReactComponent as LeftArrow } from '../imgs/svg/left-arrow-servings.svg';
import { ReactComponent as RightArrow } from '../imgs/svg/right-arrow-servings.svg';
import { ReactComponent as IngIcon } from '../imgs/svg/title-icon.svg';

const RecipeListingSection = styled.section`
  width: 100rem;
  padding: 1.6rem;
  border: 0.2rem solid black;
`;

const RecipeListingContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    'header header'
    'photo ing'
    'nooch ing'
    'nooch button';
  justify-items: center;
  row-gap: 2rem;

  & h2 {
    grid-area: header;
    font-family: goodlife-serif, sans-serif;
    font-weight: 700;
    font-size: 3rem;
  }
`;

const RecipeImageBox = styled.div`
  height: 40rem;
  width: 40rem;
  overflow: hidden;

  grid-area: photo;

  display: flex;
  align-items: center;
  justify-content: center;

  & img {
    height: 40rem;
  }
`;

const RecipeServingsBox = styled.div`
  grid-column: 2/3;

  display: flex;
  align-items: center;
  gap: 1rem;

  & span {
    font-size: 1.8rem;
  }
`;

const ServingsBtn = styled(Button)`
  height: 4rem;
  width: 8rem;

  background-color: var(--main-theme-color);

  display: flex;
  align-items: center;
  justify-content: center;
`;

const ArrowLeftIconStyles = styled(LeftArrow)`
  height: 20px;
  width: 20px;
`;

const ArrowRightIconStyles = styled(RightArrow)`
  height: 20px;
  width: 20px;
`;

const NutritionInfo = styled.div`
  grid-area: nooch;

  & div {
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    & h3 {
      font-family: goodlife-serif, sans-serif;
      font-weight: 700;
      font-size: 2rem;
    }

    & h4 {
      font-family: inherit;
      font-size: 1rem;
    }

    & ul {
      list-style: none;

      display: flex;
      gap: 1.2rem;

      & li {
        height: 10rem;
        width: 6.4rem;
        padding: 0.4rem;
        border: 0.15rem solid black;
        text-align: center;
        overflow: hidden;

        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.4rem;

        & p:nth-child(1) {
          font-size: 1.2rem;
          text-decoration: underline;
        }
        & p:nth-child(2) {
          font-size: 1.6rem;
          font-weight: bold;
        }
        & p:nth-child(3) {
          height: 100%;
          width: 100%;
          padding: 1rem;
          border: 0.2rem solid black;
          border-radius: 50%;
          background-color: black;
          color: white;
          font-size: 1.6rem;

          display: flex;
          justify-content: center;
        }
      }
    }
  }
`;

const IngredientBox = styled.div`
  width: 100%;
  align-items: center;

  grid-area: ing;

  & h2 {
    grid-area: header;
    font-family: goodlife-serif, sans-serif;
    font-weight: 700;
    font-size: 3rem;

    text-align: center;
    align-self: center;
    grid-column: 1/3;
  }

  & ul {
    margin-top: 2rem;
    list-style: none;

    & li {
      display: flex;

      padding: 1rem;

      & span {
        font-size: 1.8rem;

        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;

        & p {
          padding-top: 0.5rem;
        }
      }
    }
  }
`;

const IngIconStyles = styled(IngIcon)`
  height: 20px;
  width: 20px;
`;

const Result = () => {
  return (
    <RecipeListingSection>
      <RecipeListingContainer>
        <RecipeImageBox>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Japanese_SilkyTofu_%28Kinugoshi_Tofu%29.JPG/2560px-Japanese_SilkyTofu_%28Kinugoshi_Tofu%29.JPG"
            alt="Food"
          />
        </RecipeImageBox>

        <h2>Block Of Tofu</h2>

        <RecipeServingsBox>
          <ServingsBtn btnSize="small" icon={true}>
            <ArrowLeftIconStyles />
          </ServingsBtn>
          <span>4 Servings</span>
          <ServingsBtn btnSize="small" icon={true}>
            <ArrowRightIconStyles />
          </ServingsBtn>
        </RecipeServingsBox>

        <NutritionInfo>
          <div>
            <h3>Nutritional Facts</h3>
            <h4>Estimated per serving</h4>
            <ul>
              <li>
                <p>Energy</p>
                <p>40g</p>
                <p>40g</p>
              </li>
              <li>
                <p>Carb</p>
                <p>40g</p>
                <p>40g</p>
              </li>
              <li>
                <p>Fat</p>
                <p>40g</p>
                <p>40g</p>
              </li>
              <li>
                <p>Saturates</p>
                <p>40g</p>
                <p>40g</p>
              </li>
              <li>
                <p>Salt</p>
                <p>40g</p>
                <p>40g</p>
              </li>
            </ul>
          </div>
        </NutritionInfo>

        <IngredientBox>
          <h2>Recipe Ingredients</h2>

          <ul>
            <li>
              <span>
                <IngIconStyles />
                <p>1tsp ing</p>
              </span>
            </li>
          </ul>
        </IngredientBox>
      </RecipeListingContainer>
    </RecipeListingSection>
  );
};

export default Result;
