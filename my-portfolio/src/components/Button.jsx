export const Button = ({ icon, altText, link }) => {
  const handleClick = () => {
    window.open(link, "_blank");
  };

  return (
    <button>
      <img src={icon} alt={altText} onClick={handleClick} />
    </button>
  );
};
