// PersonalInfo.tsx
import React from 'react';

interface PersonalInfoProps {
    personalInfo: {
        name: string;
        age: number;
        dateOfBirth: string;
        nationality: string;
        description: string;
        languages: string[];
    };
}

const PersonalInfo: React.FC<PersonalInfoProps> = ({ personalInfo }) => {
    const { name, age, dateOfBirth, nationality, description, languages } = personalInfo;

    return (
        <div>
            <h2>{name}</h2>
            <p>Age: {age}</p>
            <p>Date of Birth: {dateOfBirth}</p>
            <p>Nationality: {nationality}</p>
            <p>Description: {description}</p>
            <p>Languages: {languages.join(', ')}</p>
        </div>
    );
};

export default PersonalInfo;
