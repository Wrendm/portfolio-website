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
    features: string[];
    challenge: string;
    outcome: string;
    descriptionBody: string;
    viewLink: URL;
    githubLink: URL;
};

export default function ProjectCard({id, image, alt, name, stack, association, features, challenge, outcome, descriptionBody, viewLink, githubLink}: ProjectProps){
return(
    <Card className="projectCard" sx={{ backgroundColor: 'var(--secondary-bg)',  
color: 'var(--secondary-text)', padding: '30px 40px', borderRadius: '15px', margin: '20px 0'}}>
        <h2 className="projectName" style={{color: 'var(--secondary-text)'}}>{name}</h2>
        <p>{association}</p>
        <CardMedia
            component="img"
            image={image}
            alt={alt}
            className="ProjectCardImg"
        />
        <CardContent sx={{padding: 0}}>
        <h3>Project Stack</h3>
        <ul className="stackList">
            {stack.map(stackItem => (
                <li key={stackItem}>{stackItem}</li>
            ))}
        </ul>
        <h3>Features</h3>
        <ul className="featureList">
            {features.map(featureItem => (
                <li key={featureItem}>{featureItem}</li>
            ))}
        </ul>
        <h3> Project Summary </h3>
        <p> {descriptionBody} </p>
        <h3> Challenges </h3>
        <p>{challenge}</p>
        <h3> Outcome </h3>
        <p>{outcome}</p>
        </CardContent>
        <div className="linkSection">
            {viewLink && <a href={viewLink} className="projectLink">View Project</a>}
            {githubLink && <a href={githubLink} className="projectLink">View Project Repo</a>}
        </div>
    </Card>
);
}
