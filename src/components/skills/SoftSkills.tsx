import { skillsData } from './skillsExperienceList';

export default function SoftSkills() {
return(
    <>
        {skillsData.soft.length > 0 && (
            <section className='SoftSkills'>
                <h3>Soft Skills</h3>
                {skillsData.soft.map(skill => (
                    <div key={skill.title} className='SoftSkillCard'>
                        <h4>{skill.title}</h4>
                        <p>{skill.evidence}</p>
                    </div>
                ))}
            </section>
        )}
    </>
);
}
