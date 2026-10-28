import { skillsData } from './skillsExperienceList';

export default function Education() {
return(
    <section className='Education'>
        <h3>Education</h3>
        {skillsData.education.map(entry => (
            <div key={entry.degree} className='EducationCard'>
                <h4>{entry.degree} - {entry.school}</h4>
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
