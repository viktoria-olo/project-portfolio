import "./List.css";

export const List = ({ topics }) => {
  return (
    <ul className="topics">
      {topics.map((topic, index) => (
        <li key={index}>{topic}</li>
      ))}
    </ul>
  );
};
