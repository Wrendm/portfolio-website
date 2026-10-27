import { skillsData } from './skillsExperienceList';

export default function Education() {
return(
    <section className='Education'>
        <h3>Education</h3>
        {skillsData.education.map(entry => (
            <div key={entry.degree}>
                <p>{entry.degree}</p>
                <p>{entry.school}</p>
                <p>Focus: {entry.focus}</p>
                <ul>
                    {entry.coursework.map(course => (
                        <li key={course}>{course}</li>
                    ))}
                </ul>
            </div>
        ))}
    </section>
);
}
