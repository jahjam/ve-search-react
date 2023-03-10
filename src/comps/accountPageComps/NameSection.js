import { format } from 'date-fns';

import { Name } from '../../styled/styledPages/StyledAccount';

const NameSection = props => {
  return (
    <Name>
      <h1>Hi, {props.userDetails.user?.username}!</h1>
      <span>
        Member since{' '}
        {(props.userDetails.user?.joinDate &&
          format(new Date(props.userDetails.user?.joinDate), 'dd/MM/yyyy')) ||
          '...'}
      </span>
    </Name>
  );
};

export default NameSection;
