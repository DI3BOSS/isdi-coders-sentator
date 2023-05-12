import Button from "../Button/Button";
import Image from "../Image/Image";
import HeaderStyled from "./HeaderStyled";

interface HeaderProps {
  shuffle: () => void;
}
const Header = ({ shuffle }: HeaderProps) => {
  return (
    <HeaderStyled>
      <Image
        className="isdi-logo"
        src="/assets/images/isdi-logo.webp"
        alt="ISDI Coders logo"
      />
      <Button actionOnClick={shuffle} text="RANDOM" className="button-table" />
    </HeaderStyled>
  );
};

export default Header;
