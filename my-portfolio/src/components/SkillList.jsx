import { Headline } from "./Headline";
import "./List.css";

export const SkillList = ({ skillDiv, skillTitle, skills }) => {
  return (
    <div className={skillDiv}>
      <Headline headlineStyle={"skills-headline"} headline={skillTitle} />
      <ul className="skill-list">
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};
