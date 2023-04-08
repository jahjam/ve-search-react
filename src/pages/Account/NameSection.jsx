import { format } from 'date-fns';

import * as Styled from './styles';

const NameSection = props => {
  return (
    <Styled.Name>
      <h1>Hi, {props.userDetails.user?.username}!</h1>
      <span>
        Member since{' '}
        {(props.userDetails.user?.joinDate &&
          format(new Date(props.userDetails.user?.joinDate), 'dd/MM/yyyy')) ||
          '...'}
      </span>
    </Styled.Name>
  );
};

export default NameSection;
