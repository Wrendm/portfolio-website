import { skillsData } from './skillsExperienceList';

export default function HardSkills() {
return(
    <section className='HardSkills'>
        <h3>Hard Skills</h3>
	<div className='wrapper'>
        {skillsData.hard.map(group => (
            <div className='HardSkillCard' key={group.category}>
                <h4>{group.category}</h4>
                <ul>
                    {group.items.map(item => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>
            </div>
        ))}
	</div>
    </section>
);
}
