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
        <div className={"center"}>
            <h2>Projects</h2>
            <div className={"projects"}>
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>

        </div>
    );
};


export default ProjectList;
