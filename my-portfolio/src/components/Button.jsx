import "./Button.css";

export const Button = ({ buttonStyle, icon, altText, link, buttonText }) => {
  const handleClick = () => {
    window.open(link, "_blank");
  };

  return (
    <button className={buttonStyle}>
      <img src={icon} alt={altText} onClick={handleClick} />{buttonText}
    </button>
  );
};
