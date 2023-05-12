import ImageStyled from "./ImageStyled";

interface ImageProps {
  className?: string;
  src: string;
  alt: string;
}

const Image = ({ className, src, alt }: ImageProps): JSX.Element => {
  return <ImageStyled className={className} src={src} alt={alt} />;
};
export default Image;
