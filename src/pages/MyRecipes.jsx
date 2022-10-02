import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FlexColumn, Flex } from '../helpers/mixins';

const ContainerStyled = styled(motion.section)`
  margin-top: 2rem;
  width: 80%;
  height: auto;
  padding: 1.6rem;
  border: 0.2rem solid black;

  ${FlexColumn()}
  gap: 2rem;
`;

const Results = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  align-items: center;
  row-gap: 2rem;
  column-gap: 2rem;
`;

const RecipeCard = styled.div`
  width: 100%;
  height: auto;
  border: var(--main-border);

  cursor: pointer;

  & div:nth-child(1) {
    margin: 1rem;
    height: 10rem;
    width: auto;

    padding: 1rem;

    background-color: grey;

    ${Flex()}
    gap: 0.6rem;

    & div:nth-child(1) {
      height: 7rem;
      min-width: 7rem;

      background-color: blue;
    }
  }
`;

const SearchBar = styled.div`
  align-self: flex-end;

  ${Flex()}
  gap: 1.4rem;

  & label {
    font-size: 2rem;
  }

  & input {
    font-family: inherit;
    padding: 1rem;
    border: var(--main-border);
  }
`;

const MyRecipes = () => {
  return (
    <>
      <ContainerStyled>
        <SearchBar>
          <label>Search:</label>
          <input type="text" placeholder="tofu"></input>
        </SearchBar>
        <Results>
          <RecipeCard>
            <div>
              <div></div>
              <div>
                <h2>Tofu burger</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Debitis, odit.
                </p>
              </div>
            </div>
          </RecipeCard>
          <RecipeCard>
            <div>
              <div></div>
              <div>
                <h2>Tofu burger</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Debitis, odit.
                </p>
              </div>
            </div>
          </RecipeCard>
          <RecipeCard>
            <div>
              <div></div>
              <div>
                <h2>Tofu burger</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Debitis, odit.
                </p>
              </div>
            </div>
          </RecipeCard>
        </Results>
      </ContainerStyled>
    </>
  );
};

export default MyRecipes;
