// StudyInfo.tsx
import React from 'react';
import { FaSchool } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { IoIosTime } from "react-icons/io";
interface StudyInfoProps {
    study: {
        school: string;
        startYear: number;
        endYear: number;
        fieldOfStudy: string;
    };
}

const StudyInfo: React.FC<StudyInfoProps> = ({ study }) => {
    if (!study) {
        console.log(study)
        return <p>Study data not available.</p>;
    }

    // Destructure properties safely
    const { school, startYear, endYear, fieldOfStudy } = study;

    return (
        <div className={"center education"}>
            <h2>Education</h2>
            <div className={"textIcon"}>
                <FaSchool/>
                <p>{school}</p>
            </div>
            <div className={"textIcon"}>
                <FaBook/>
                <p>{fieldOfStudy}</p>
            </div>
            <div className={"textIcon"}>
                <IoIosTime/>
                <p>{startYear} - {endYear}</p>
            </div>
        </div>
    );
};

export default StudyInfo;
