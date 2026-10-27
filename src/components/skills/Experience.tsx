import { skillsData } from './skillsExperienceList';

export default function Experience() {
return(
    <section className='Experience'>
        <h3>Experience</h3>
        {skillsData.experience.map(entry => (
            <div key={`${entry.org}-${entry.title}`}>
                <p>{entry.title}</p>
                <p>{entry.org} | {entry.location}</p>
                <p>{entry.dates}</p>
                <ul>
                    {entry.highlights.map(highlight => (
                        <li key={highlight}>{highlight}</li>
                    ))}
                </ul>
            </div>
        ))}
    </section>
);
}
