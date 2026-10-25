import ProjectCard from '../components/projects/projectCard';
import {projectList} from '../components/projects/projectList';


const Projects = () => (
  <div className='Projects'>
    <h1>Recent Work</h1>
        <div className='projectDisplay'>
            {projectList.map(project =>(
                <ProjectCard key={project.id} 
                    name={project.name} 
                    image={project.image} 
                    alt={project.alt} 
                    stack={project.stack} 
                    association={project.association} 
                    features={project.features} 
                    challenge={project.challenge} 
                    outcome={project.outcome} 
                    descriptionBody={project.descriptionBody} 
                    viewLink={project.viewLink} 
                    githubLink={project.githubLink} />
            ))}
        </div>
  </div>
);

export default Projects;
