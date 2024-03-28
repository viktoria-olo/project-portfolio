import { Headline } from "./Headline";
import "./List.css";

export const SkillList = ({ skillHeadline, skillTitle, skills }) => {
  return (
    <>
      <div>
        <Headline
          headlineStyle={`skills-headline ${skillHeadline}`}
          headline={skillTitle}
        />
      </div>
      <ul className="skill-list">
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </>
  );
};
