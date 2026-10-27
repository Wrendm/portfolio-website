import { skillsData } from './skillsExperienceList';

export default function HardSkills() {
return(
    <section className='HardSkills'>
        <h3>Hard Skills</h3>
        {skillsData.hard.map(group => (
            <div key={group.category}>
                <p>{group.category}</p>
                <ul>
                    {group.items.map(item => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>
            </div>
        ))}
    </section>
);
}
