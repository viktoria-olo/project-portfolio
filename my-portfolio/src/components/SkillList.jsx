export const SkillList = ({ skillTitle, skills }) => {
  return (
    <div>
      <h3>{skillTitle}</h3>
      {skills.map((skill, index) => (
        <li key={index}>{skill}</li>
      ))}
    </div>
  );
};
