// SkillInfo.tsx
import React from 'react';

interface SkillInfoProps {
    skills: Array<{
        name: string;
    }>;
}

const SkillInfo: React.FC<SkillInfoProps> = ({ skills }) => {
    return (
        <div>
            <h2>Skills</h2>
            <ul>
                {skills.map((skill, index) => (
                    <li key={index}>{skill.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default SkillInfo;
