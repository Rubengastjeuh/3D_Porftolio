// ProjectList.tsx
import React from 'react';
import ProjectCard from './ProjectCard';

interface ProjectListProps {
    projects: Array<{
        id: number;
        title: string;
        description: string;
        skills: string[];
        ageWhenDone: number;
        image: string;
    }>;
}

const ProjectList: React.FC<ProjectListProps> = ({ projects }) => {
    return (
        <div>
            <h2>Projects</h2>
            {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
            ))}
        </div>
    );
};

export default ProjectList;
