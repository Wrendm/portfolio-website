// src/components/skills/Experience.tsx
import { Link } from "react-router-dom";
import { skillsData } from "./skillsExperienceList";

type ExperienceProps = {
  entries?: typeof skillsData.experience;
};

export default function Experience({ entries = skillsData.experience }: ExperienceProps) {
  return null;
}
