import * as Styled from './styles';

const Button = ({ children, ...props }) => {
  return (
    <Styled.Btn
      className={props.className}
      btnSize={props.btnSize}
      onClick={props.onClick}
      type={props.type || 'button'}
    >
      {props.icon ? (
        <>{children}</>
      ) : (
        <Styled.BtnText btnSize={props.btnSize} display={props.display}>
          {children}
        </Styled.BtnText>
      )}
    </Styled.Btn>
  );
};

export default Button;
