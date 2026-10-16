import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';

type ProjectProps = {
    id: number;
    image: URL;
    alt: string;
    name: string;
    stack: string[];
    association: string;
    descriptionHeading: string;
    descriptionBody: string;
    viewLink: URL;
    githubLink: URL;
};

export default function ProjectCard({id, image, alt, name, stack, association, descriptionHeading, descriptionBody, viewLink, githubLink}: ProjectProps){
return(
    <Card className="projectCard" sx={{ backgroundColor: 'var(--secondary-bg)',  
color: 'var(--secondary-text)', padding: '30px 40px', borderRadius: '15px', margin: '20px 0'}}>
        <h2 style={{color: 'var(--secondary-text)'}}>{name}</h2>
        <p>{association}</p>
        <CardMedia
            component="img"
            image={image}
            alt={alt}
            className="ProjectCardImg"
        />
        <CardContent sx={{padding: 0}}>
        <ul className="stackList">
            {stack.map(stackItem => (
                <li key={stackItem}>{stackItem}</li>
            ))}
        </ul>
        <h4> {descriptionHeading} </h4>
        <p> {descriptionBody} </p>
        </CardContent>
        <div className="linkSection">
            {viewLink && <a href={viewLink} className="projectLink">View Project</a>}
            {githubLink && <a href={githubLink} className="projectLink">View Project Repo</a>}
        </div>
    </Card>
);
}
