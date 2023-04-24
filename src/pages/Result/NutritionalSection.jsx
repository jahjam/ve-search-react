import * as Styled from './styles';

const DAILY_KCALS = 2500;
const DAILY_CARBS = 325;
const DAILY_FAT = 97;
const DAILY_SATURATES = 30;
const DAILY_SALT = 6;

const NutritionalSection = props => {
  const calculateNutritionalPercs = (amount, base) => {
    return (amount / base) * 100;
  };

  return (
    <Styled.StyledNutritionalSection>
      <div>
        <h3>Nutritional Facts</h3>
        <h4>(Estimated per serving)</h4>
        <ul>
          <li>
            <p>Energy</p>
            <p>
              {props.nutrition.kcal.amount}
              {/* Styled Kcal to make the full word fit in the nutrition box */}
              <Styled.Kcal>kcal</Styled.Kcal>
            </p>
            <p>
              {calculateNutritionalPercs(
                props.nutrition.kcal.amount,
                DAILY_KCALS
              ).toFixed()}
              %
            </p>
          </li>
          <li>
            <p>Carb</p>
            <p>
              {props.nutrition.carbs.amount}
              {props.nutrition.carbs.measurement}
            </p>
            <p>
              {calculateNutritionalPercs(
                props.nutrition.carbs.amount,
                DAILY_CARBS
              ).toFixed()}
              %
            </p>
          </li>
          <li>
            <p>Fat</p>
            <p>
              {props.nutrition.fat.amount}
              {props.nutrition.fat.measurement}
            </p>
            <p>
              {calculateNutritionalPercs(
                props.nutrition.fat.amount,
                DAILY_FAT
              ).toFixed()}
              %
            </p>
          </li>
          <li>
            <p>Saturates</p>
            <p>
              {props.nutrition.saturates.amount}
              {props.nutrition.saturates.measurement}
            </p>
            <p>
              {calculateNutritionalPercs(
                props.nutrition.saturates.amount,
                DAILY_SATURATES
              ).toFixed()}
              %
            </p>
          </li>
          <li>
            <p>Salt</p>
            <p>
              {props.nutrition.salt.amount}
              {props.nutrition.salt.measurement}
            </p>
            <p>
              {calculateNutritionalPercs(
                props.nutrition.salt.amount,
                DAILY_SALT
              ).toFixed()}
              %
            </p>
          </li>
        </ul>
      </div>
    </Styled.StyledNutritionalSection>
  );
};

export default NutritionalSection;
