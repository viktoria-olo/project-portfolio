import { Headline } from "../components/Headline";
import { SkillList } from "../components/SkillList";
import "./Skills.css";

export const Skills = () => {
  const codeSkills = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React",
    "Styled Components",
    "GitHub",
  ];

  const toolboxSkills = ["Figma", "Slack", "Lighthouse"];

  const upcomingSkills = ["Mongo DB", "Express", "React Router"];

  const moreSkills = [
    "Agile methodology",
    "Mob-programming",
    "Pair-programming",
    "Translation",
  ];

  return (
    <section className="skills-section">
      <Headline headlineStyle="section-headline" headline="Skills" />
      <SkillList skillTitle="Code" skills={codeSkills} />
      <SkillList skillTitle="Toolbox" skills={toolboxSkills} />
      <SkillList skillTitle="Upcoming" skills={upcomingSkills} />
      <SkillList skillTitle="More" skills={moreSkills} />
    </section>
  );
};
