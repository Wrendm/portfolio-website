import { skillsData } from './skillsExperienceList';

export default function Experience() {
return(
    <section className='Experience'>
        <h3>Experience</h3>
        {skillsData.experience.map(entry => (
            <div key={`${entry.org}-${entry.title}`} className="ExperienceCard">
                <h4>{entry.title}</h4>
                <p>{entry.org} | {entry.location}</p>
                <p>{entry.dates}</p>
                <ul>
                    {entry.highlights.map(highlight => (
                        <li key={highlight}>{highlight}</li>
                    ))}
                </ul>
		{entry.githubLink && (
    		    <div className="linkSection"><a href={entry.githubLink} target='_blank' rel='noopener noreferrer'>GitHub</a></div>
		)}
            </div>
        ))}
    </section>
);
}
