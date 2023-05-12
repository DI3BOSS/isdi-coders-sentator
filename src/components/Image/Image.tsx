interface ImageProps {
  className?: string;
  src: string;
  alt: string;
}

const Image = ({ className, src, alt }: ImageProps): JSX.Element => {
  return <img className={className} src={src} alt={alt} />;
};
export default Image;
