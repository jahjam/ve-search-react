import {
  BtnStyles,
  BtnText,
} from '../../styled/styledComps/styledTemps/styledButton';

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
