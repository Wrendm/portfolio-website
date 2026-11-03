import HardSkills from '../components/skills/HardSkills';
import Experience from '../components/skills/Experience';
import SoftSkills from '../components/skills/SoftSkills';
import Education from '../components/skills/Education';
import PageHeader from '../components/navigation/PageHeader';
import type { PageSection } from '../components/navigation/PageHeader';

const skillSections: PageSection[] = [
  { id: 'HardSkills', label: 'Hard Skills' },
  { id: 'Experience', label: 'Experience' },
  { id: 'SoftSkills', label: 'Soft Skills' },
  { id: 'Education', label: 'Education' },
];

export default function Skills() {
  return (
    <div className='Skills'>
      <PageHeader title='Skills & Experience' sections={skillSections} />
      <HardSkills />
      <Experience />
      <SoftSkills />
      <Education />
    </div>
  );
};
