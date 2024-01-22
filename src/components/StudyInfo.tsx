// StudyInfo.tsx
import React from 'react';

interface StudyInfoProps {
    study: {
        school: string;
        startYear: number;
        endYear: number;
        fieldOfStudy: string;
    };
}

const StudyInfo: React.FC<StudyInfoProps> = ({ study }) => {
    const { school, startYear, endYear, fieldOfStudy } = study;

    return (
        <div>
            <h2>Education</h2>
            <p>School: {school}</p>
            <p>Field of Study: {fieldOfStudy}</p>
            <p>Study Years: {startYear} - {endYear}</p>
        </div>
    );
};

export default StudyInfo;
