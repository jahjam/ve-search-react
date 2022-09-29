import styled from 'styled-components';
import { FlexColumn, Flex } from '../helpers/mixins';

import { ReactComponent as AccountIcon } from '../imgs/svg/account.svg';
import { ReactComponent as IngIcon } from '../imgs/svg/title-icon.svg';
import { ReactComponent as Bookmark } from '../imgs/svg/bookmark.svg';
import { ReactComponent as AddIcon } from '../imgs/svg/add.svg';
import Button from '../comps/temps/Button';

const AccountContainerStyled = styled.section`
  margin-top: 2rem;
  width: auto;
  height: auto;
  padding: 1.6rem;
  padding-bottom: 3rem;
  border: 0.2rem solid black;
`;

const AccountGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-areas:
    'name name add'
    'deets edit avatar'
    'deets edit avatar'
    'deets edit avatar';
  row-gap: 4rem;
  column-gap: 2rem;
`;

const Name = styled.div`
  grid-area: name;
  height: auto;
  width: 100%;

  ${FlexColumn()}

  & h1 {
    font-size: 4rem;
    font-family: goodlife-serif, sans-serif;
  }

  & span {
    font-size: 1.4rem;
  }
`;

const Avatar = styled.div`
  grid-area: avatar;
  height: auto;
  width: 100%;

  ${FlexColumn('center', 'flex-start')}
  gap: 2rem;

  & div {
    width: 12rem;
    height: 12rem;
    background-color: black;
    border-radius: 50%;

    overflow: hidden;

    & img {
      width: 100%;
      height: 100%;
    }
  }

  & span {
    font-size: 1.6rem;

    text-decoration: underline;

    cursor: pointer;

    &:hover,
    &:active {
      text-decoration: none;
    }
  }
`;

const Details = styled.div`
  grid-area: deets;
  height: auto;
  width: 100%;

  ${FlexColumn()}

  & ul {
    list-style: none;

    ${FlexColumn('flex-start')}
    gap: 2rem;

    & li {
      ${Flex()}
      gap: 1rem;
      padding: 2rem;
      width: 100%;

      border: var(--main-border);

      background-color: var(--main-theme-color);

      cursor: pointer;

      &:hover,
      &:active {
        background-color: #58b15a;
      }

      & :first-child {
        height: 2rem;
      }

      & span {
        margin-top: 0.35rem;
        font-size: 1.4rem;
      }
    }
  }
`;

const Edit = styled.div`
  grid-area: edit;
  height: auto;
  width: 100%;

  ${FlexColumn('center', 'flex-start')}

  & ul {
    padding: 0 2rem;
    width: 100%;
    list-style: none;

    & li {
      margin-top: -2rem;
      width: 100%;
      padding: 2rem 0;

      ${FlexColumn()}
      align-items: flex-start;
      gap: 1rem;

      & div {
        width: 100%;
        display: flex;
        justify-content: space-between;

        & h2 {
          font-size: 1.6rem;
        }

        & span {
          font-size: 1.6rem;
          text-decoration: underline;

          cursor: pointer;
        }
      }

      & span {
        font-size: 1.6rem;
      }
    }
  }
`;

const Add = styled.div`
  grid-area: add;

  height: 100%;
  width: 100%;

  ${FlexColumn()}
`;

const AddIconStyles = styled(AddIcon)`
  height: 2rem;
`;

const AddBtn = styled(Button)`
  ${Flex()}
  gap: 1rem;

  background-color: var(--main-theme-color);

  cursor: pointer;

  &:hover,
  &:active {
    background-color: #58b15a;
  }

  & span {
    margin-top: 0.2rem;
  }
`;

const Password = styled.span`
  font-size: 1.6rem !important;
`;

const Account = props => {
  return (
    <AccountContainerStyled>
      <AccountGrid>
        <Name>
          <h1>Hi, Eli!</h1>
          <span>Member since September 2022</span>
        </Name>

        <Avatar>
          <div>
            <img src="/public/img/users/default.jpeg" alt="avatar" />
          </div>
          <span>Edit avatar</span>
        </Avatar>

        <Details>
          <ul>
            <li>
              <AccountIcon />
              <span>My account</span>
            </li>
            <li>
              <IngIcon />
              <span>My recipes</span>
            </li>
            <li>
              <Bookmark />
              <span>My saved recipes</span>
            </li>
          </ul>
        </Details>

        <Edit>
          <ul>
            <li>
              <div>
                <h2>Email</h2>
                <span>Edit</span>
              </div>
              <span>elijahjamesuk@hotmail.com</span>
            </li>
            <li>
              <div>
                <h2>Password</h2>
                <span>Edit</span>
              </div>
              <Password>
                &#9632;&#9632;&#9632;&#9632;&#9632;&#9632;&#9632;&#9632;&#9632;&#9632;
              </Password>
            </li>
          </ul>
        </Edit>

        <Add>
          <AddBtn icon={true} btnSize="large">
            <AddIconStyles />
            <span>Add a recipe</span>
          </AddBtn>
        </Add>
      </AccountGrid>
    </AccountContainerStyled>
  );
};

export default Account;
