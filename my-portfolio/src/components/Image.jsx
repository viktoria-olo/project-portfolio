import "./Image.css";

export const Image = ({ className, link, altText }) => {
  return (
    <div>
      <img className={className} src={link} alt={altText} />
    </div>
  );
};
