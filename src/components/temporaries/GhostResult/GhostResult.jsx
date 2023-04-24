import { generateFramerElipsis } from '../../../helpers/generateFramerElipsis';

import * as Styled from './styles';

const GhostResult = () => {
  return (
    <Styled.RecipeListingSection>
      <Styled.RecipeListingContainer>
        <Styled.RecipeImageBox>
          <Styled.MotionLinearGradientGreen
            animate={{
              transform: 'rotate(360deg)',
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: 'repeat',
              ease: 'easeInOut',
            }}
          ></Styled.MotionLinearGradientGreen>
        </Styled.RecipeImageBox>

        <h2>
          Loading Recipe{' '}
          {generateFramerElipsis({
            marginLeft: '0.4rem',
            paddingTop: '2rem',
            gap: '0.2rem',
          })}
        </h2>

        <Styled.RecipeServingsBox>
          <Styled.ServingsBtn btnSize="small" icon={true}>
            <Styled.ArrowLeftIcon />
          </Styled.ServingsBtn>
          <span>
            Loading servings{' '}
            {generateFramerElipsis({
              marginLeft: '0.4rem',
              paddingTop: '1rem',
              gap: '0.2rem',
            })}
          </span>
          <Styled.ServingsBtn btnSize="small" icon={true}>
            <Styled.ArrowRightIcon />
          </Styled.ServingsBtn>
        </Styled.RecipeServingsBox>

        <Styled.NutritionInfo>
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
        </Styled.NutritionInfo>

        <Styled.IngredientBox>
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
        </Styled.IngredientBox>
      </Styled.RecipeListingContainer>
    </Styled.RecipeListingSection>
  );
};

export default GhostResult;
