import { skillsData } from './skillsExperienceList';

export default function SoftSkills() {
return(
    <>
        {skillsData.soft.length > 0 && (
            <section className='SoftSkills'>
                <h3>Soft Skills</h3>
                {skillsData.soft.map(skill => (
                    <div key={skill.title}>
                        <p>{skill.title}</p>
                        <p>{skill.evidence}</p>
                    </div>
                ))}
            </section>
        )}
    </>
);
}
