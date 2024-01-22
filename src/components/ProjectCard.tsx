// ProjectCard.tsx
import React from 'react';

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
    const { title, description, skills, ageWhenDone, image } = project;

    return (
        <div>
            <h3>{title}</h3>
            <p>{description}</p>
            <p>Skills: {skills.join(', ')}</p>
            <p>Age When Done: {ageWhenDone}</p>
            <img src={image} alt={title} />
        </div>
    );
};

export default ProjectCard;
