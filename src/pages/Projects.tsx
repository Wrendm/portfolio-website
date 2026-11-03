import ProjectCard from '../components/projects/projectCard';
import {projectList} from '../components/projects/projectList';
import PageHeader from '../components/navigation/PageHeader';

const projectSections = projectList.map(project => ({
  id: `project-${project.id}`,
  label: project.linkText,
}));

const Projects = () => (
  <div className='Projects'>
    <PageHeader title='Recent Projects' sections={projectSections} />
        <div className='projectDisplay'>
            {projectList.map(project =>(
                <ProjectCard key={project.id} 
                    id={project.id}
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
