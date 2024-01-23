// HomeScreen.tsx
import React, {useEffect, useState} from 'react';
import {useQuery} from '@apollo/client';
import {
    GET_CONTACT_INFO,
    GET_PERSONAL_INFO_BASIC,
    GET_PROJECTS_BASIC,
    GET_SKILLS,
    GET_STUDY_INFO,
} from '../graphql/queries';
import '../styles/App.css';

import ContactInfo from '../components/ContactInfo';
import PersonalInfo from '../components/PersonalInfo';
import ProjectList from '../components/ProjectList';
import SkillInfo from '../components/SkillInfo';
import StudyInfo from '../components/StudyInfo';
import avatar from '../assets/defaultUser.jpg';
import Room from '../components/3DRoom/Room'

import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';

const HomeView = () => {
    const [error, setError] = useState<string | null>(null);
    const [roomOpen, setRoomOpen] = useState<boolean>(false);
    const {loading: contactLoading, error: contactError, data: contactData} = useQuery(GET_CONTACT_INFO);
    const {
        loading: personalInfoLoading,
        error: personalInfoError,
        data: personalInfoData
    } = useQuery(GET_PERSONAL_INFO_BASIC);
    const {loading: projectsLoading, error: projectsError, data: projectsData} = useQuery(GET_PROJECTS_BASIC);
    const {loading: skillsLoading, error: skillsError, data: skillsData} = useQuery(GET_SKILLS);
    const {loading: studyLoading, error: studyError, data: studyData} = useQuery(GET_STUDY_INFO);

    // Check for errors and update the error state
    useEffect(() => {
        if (contactError || personalInfoError || projectsError || skillsError || studyError) {
            setError('There was an error fetching data.');
        } else {
            setError(null);
        }
    }, [contactError, personalInfoError, projectsError, skillsError, studyError]);

    if (contactLoading || personalInfoLoading || projectsLoading || skillsLoading || studyLoading) {

        return (
            <div className="App">
                <div className={"startLoading"}>
                    <CircularProgress style={{color: "#006032", height: 100, width: 100}}/>
                </div>
            </div>
        );
    }

    return (
        <div className="App">
            {!error &&
                <>
                    <div className="header">
                        <div className="banner"/>
                        <div className="imgWrapper marginBanner">
                            <img src={avatar} alt="default user img"/>
                        </div>
                    </div>
                    <div>
                        <div className={"center"}>
                            {personalInfoData && <PersonalInfo personalInfo={personalInfoData.personalInfo}/>}
                            <Button variant="contained" style={{backgroundColor: "#006032", marginBottom: 30}} disableElevation
                                    onClick={() => setRoomOpen(!roomOpen)}>
                                {roomOpen ? "Close 3D Room" : "Open 3D Room"}
                            </Button>
                        </div>

                        {roomOpen && <Room projects={projectsData.projects}></Room>}
                        <hr/>
                        {projectsData && <ProjectList projects={projectsData.projects}/>}
                        <hr/>
                        {skillsData && <SkillInfo skills={skillsData.skills}/>}
                        <hr/>
                        {studyData && <StudyInfo study={studyData.studyInfo}/>}
                        {contactData && <ContactInfo contact={contactData?.contact}/>}
                    </div>
                </>
            }
            {error &&
                <div className={"startLoading"}>
                    <h2>Error Fetching Data</h2>
                    <CircularProgress style={{color: "#006032", height: 100, width: 100}}/>
                </div>
            }
        </div>
    );
};

export default HomeView;
