import ButtonStyled from "./ButtonStyled";

interface ButtonProps {
  actionOnClick?: () => void;
  text?: string;
  className?: string;
}

const Button = ({
  actionOnClick,
  text,
  className,
}: ButtonProps): JSX.Element => {
  return (
    <ButtonStyled onClick={actionOnClick} className={className}>
      {text}
    </ButtonStyled>
  );
};

export default Button;
