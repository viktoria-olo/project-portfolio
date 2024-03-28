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
    "Chinese (Mandarin)",
  ];

  return (
    <section className="skills-section">
      <Headline headlineStyle="section-headline" headline="Skills" />
      <SkillList
        skillHeadline="code-headline"
        skillTitle="Code"
        skills={codeSkills}
      />
      <SkillList
        skillHeadline="toolbox-headline"
        skillTitle="Toolbox"
        skills={toolboxSkills}
      />
      <SkillList
        skillHeadline="upcoming-headline"
        skillTitle="Upcoming"
        skills={upcomingSkills}
      />
      <SkillList
        skillHeadline="more-headline"
        skillTitle="More"
        skills={moreSkills}
      />
    </section>
  );
};
