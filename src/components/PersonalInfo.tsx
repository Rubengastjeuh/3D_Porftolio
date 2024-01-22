// PersonalInfo.tsx
import React from 'react';
import { FaBirthdayCake } from "react-icons/fa";
import { GrLanguage } from "react-icons/gr";
import { FaMapMarkerAlt } from "react-icons/fa";
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

const PersonalInfo: React.FC<PersonalInfoProps> = ({personalInfo}) => {
    const {name, dateOfBirth, nationality, description, languages} = personalInfo;

    return (
        <div className={"center "}>
            <h2>{name}</h2>
            <p className={"description"}>{description}</p>
            <div className={"row info"}>
                <div className={"textIcon"}>
                    <FaBirthdayCake/>
                    <p>{dateOfBirth}</p>
                </div>
                <div className={"textIcon"}>
                    <FaMapMarkerAlt/>
                    <p>{nationality}</p>
                </div>
                <div className={"textIcon"}>
                    <GrLanguage/>
                    <p>{languages.join(', ')}</p>
                </div>
            </div>
        </div>
    );
};

export default PersonalInfo;
