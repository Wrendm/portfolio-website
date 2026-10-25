// src/pages/Skills.tsx
import { skillsData } from "../components/skills/skillsExperienceList";
import SkillGroup from "../components/skills/SkillGroup";

export default function Skills() {
  return (
    <section>
      <h2>Hard Skills</h2>
      {skillsData.hard.map((group) => (
        <SkillGroup key={group.category} {...group} />
      ))}
    </section>
  );
}
