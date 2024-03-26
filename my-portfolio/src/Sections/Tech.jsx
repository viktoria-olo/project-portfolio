import { Headline } from "../components/Headline";
import "./Tech.css";

export const Tech = () => {
  return (
    <div className="tech-div">
      <Headline headline="Tech" />
      <p>
        HTML, CSS, Flexbox, JavaScript, ES6, JSX, React, React Hooks, Node.js,
        Mongo DB, Web Accessibility, API:s, mob-programming, pair-programming,
        Github.{" "}
      </p>
    </div>
  );
};
