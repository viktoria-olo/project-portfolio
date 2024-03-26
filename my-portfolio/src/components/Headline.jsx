import "./Headline.css";

export const Headline = ({ colour, headline }) => {
  return <h1 className={colour}>{headline}</h1>;
};
