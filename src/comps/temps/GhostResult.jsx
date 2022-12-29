import { generateFramerElipsis } from '../../helpers/generateFramerElipsis';

import {
  RecipeListingSection,
  RecipeListingContainer,
  RecipeImageBox,
  RecipeServingsBox,
  ServingsBtn,
  NutritionInfo,
  IngredientBox,
  ArrowLeftIconStyles,
  ArrowRightIconStyles,
  MotionLinearGradientGreen,
} from '../../styled/styledComps/styledTemps/styledGhostResult';

const GhostResult = () => {
  return (
    <RecipeListingSection>
      <RecipeListingContainer>
        <RecipeImageBox>
          <MotionLinearGradientGreen
            animate={{
              transform: 'rotate(360deg)',
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: 'repeat',
              ease: 'easeInOut',
            }}
          ></MotionLinearGradientGreen>
        </RecipeImageBox>

        <h2>
          Loading Recipe{' '}
          {generateFramerElipsis({
            marginLeft: '0.4rem',
            paddingTop: '2rem',
            gap: '0.2rem',
          })}
        </h2>

        <RecipeServingsBox>
          <ServingsBtn btnSize="small" icon={true}>
            <ArrowLeftIconStyles />
          </ServingsBtn>
          <span>
            Loading servings{' '}
            {generateFramerElipsis({
              marginLeft: '0.4rem',
              paddingTop: '1rem',
              gap: '0.2rem',
            })}
          </span>
          <ServingsBtn btnSize="small" icon={true}>
            <ArrowRightIconStyles />
          </ServingsBtn>
        </RecipeServingsBox>

        <NutritionInfo>
          <div>
            <h3>Nutritional Facts</h3>
            <h4>(Estimated per serving)</h4>
            <ul>
              <li>
                <p>Kcal</p>
                <div>
                  {generateFramerElipsis({
                    flexDirection: 'row',
                    gap: '0.2rem',
                  })}
                </div>
                <div>
                  {generateFramerElipsis(
                    {
                      flexDirection: 'row',
                      paddingBottom: '1rem',
                      gap: '0.2rem',
                    },
                    { backgroundColor: 'white' }
                  )}
                </div>
              </li>
              <li>
                <p>Carb</p>
                <div>
                  {generateFramerElipsis({
                    flexDirection: 'row',
                    gap: '0.2rem',
                  })}
                </div>
                <div>
                  {generateFramerElipsis(
                    {
                      flexDirection: 'row',
                      paddingBottom: '1rem',
                      gap: '0.2rem',
                    },
                    { backgroundColor: 'white' }
                  )}
                </div>
              </li>
              <li>
                <p>Fat</p>
                <div>
                  {generateFramerElipsis({
                    flexDirection: 'row',
                    gap: '0.2rem',
                  })}
                </div>
                <div>
                  {generateFramerElipsis(
                    {
                      flexDirection: 'row',
                      paddingBottom: '1rem',
                      gap: '0.2rem',
                    },
                    { backgroundColor: 'white' }
                  )}
                </div>
              </li>
              <li>
                <p>Saturates</p>
                <div>
                  {generateFramerElipsis({
                    flexDirection: 'row',
                    gap: '0.2rem',
                  })}
                </div>
                <div>
                  {generateFramerElipsis(
                    {
                      flexDirection: 'row',
                      paddingBottom: '1rem',
                      gap: '0.2rem',
                    },
                    { backgroundColor: 'white' }
                  )}
                </div>
              </li>
              <li>
                <p>Salt</p>
                <div>
                  {generateFramerElipsis({
                    flexDirection: 'row',
                    gap: '0.2rem',
                  })}
                </div>
                <div>
                  {generateFramerElipsis(
                    {
                      flexDirection: 'row',
                      paddingBottom: '1rem',
                      gap: '0.2rem',
                    },
                    { backgroundColor: 'white' }
                  )}
                </div>
              </li>
            </ul>
          </div>
        </NutritionInfo>

        <IngredientBox>
          <h2>
            Loading ingredients{' '}
            {generateFramerElipsis({
              marginLeft: '0.4rem',
              paddingTop: '2rem',
              gap: '0.2rem',
            })}
          </h2>

          <ul>
            <li>
              <div></div>
            </li>
          </ul>
        </IngredientBox>
      </RecipeListingContainer>
    </RecipeListingSection>
  );
};

export default GhostResult;
