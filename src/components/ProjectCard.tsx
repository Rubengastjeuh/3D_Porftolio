// ProjectCard.tsx
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
interface ProjectCardProps {
    project: {
        id: number;
        title: string;
        description: string;
        skills: string[];
        ageWhenDone: number;
        image: string;
    };
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    if (!project.title) {
        return <p></p>;
    }
    const { title, description, image } = project;

    return (

        <Card sx={{ maxWidth: 345 }} className={"projectCard"}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    image={image}
                    alt={title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default ProjectCard;
