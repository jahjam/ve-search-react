import styled from 'styled-components';
import { Flex } from '../../helpers/mixins';

const btnSizes = {
  small: { height: '2rem', width: '6rem', fontSize: '1.2rem' },
  medium: { height: '3rem', width: '12rem', fontSize: '1.4rem' },
  large: { height: '4.8rem', width: '18rem', fontSize: '2rem' },
};

const BtnStyles = styled.button`
  height: ${props => btnSizes[props.btnSize].height};
  width: ${props => btnSizes[props.btnSize].width};

  text-align: center;

  font-family: inherit;

  cursor: pointer;

  border: var(--main-border);

  background-color: transparent;

  color: var(--main-dark-color);

  &:active,
  &:focus {
    background-color: #a4d2ac;
  }

  &:hover {
    background-color: #58b15a;
  }
`;

const BtnText = styled.span`
  display: ${props => {
    if (props.display === 'flex') return 'flex';
    return 'block';
  }};

  align-items: center;
  justify-content: center;

  gap: ${props => {
    if (props.btnSize === 'small') return '0.8rem';
    if (props.btnSize === 'medium') return '1.2rem';
    if (props.btnSize === 'large') return '1.8rem';
  }};

  font-size: ${props => btnSizes[props.btnSize].fontSize};
`;

const Button = ({ children, ...props }) => {
  return (
    <BtnStyles
      className={props.className}
      btnSize={props.btnSize}
      onClick={props.onClick}
      type={props.type || 'button'}
    >
      {props.icon ? (
        <>{children}</>
      ) : (
        <BtnText btnSize={props.btnSize} display={props.display}>
          {children}
        </BtnText>
      )}
    </BtnStyles>
  );
};

export default Button;
