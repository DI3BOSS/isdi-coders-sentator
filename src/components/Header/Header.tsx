import Button from "../Button/Button";
import HeaderStyled from "./HeaderStyled";

interface HeaderProps {
  shuffle: () => void;
}
const Header = ({ shuffle }: HeaderProps) => {
  return (
    <HeaderStyled>
      <img
        className="isdi-logo"
        src="/assets/images/isdi-logo.webp"
        alt="ISDI Coders logo"
      />
      <Button actionOnClick={shuffle} text="RANDOM" className="button-table" />
    </HeaderStyled>
  );
};

export default Header;
