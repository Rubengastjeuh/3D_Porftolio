import React, {useEffect, useState} from 'react';
import { ApolloProvider, useQuery } from '@apollo/client';
import client from './graphql/grahpql'; // Adjust the path based on your project structure
import {
    GET_CONTACT_INFO,
    GET_PERSONAL_INFO,
    GET_PROJECTS,
    GET_SKILLS,
    GET_STUDY_INFO,
} from './graphql/queries'; // Adjust the path based on your project structure
import './styles/App.css';

import ContactInfo from './components/ContactInfo';
import PersonalInfo from './components/PersonalInfo';
import ProjectList from './components/ProjectList';
import SkillInfo from './components/SkillInfo';
import StudyInfo from './components/StudyInfo';
import avatar from './assets/defaultUser.jpg';
function App() {
    const [error, setError] = useState<string | null>(null);
    const { loading: contactLoading, error: contactError, data: contactData } = useQuery(GET_CONTACT_INFO,);
    const { loading: personalInfoLoading, error: personalInfoError, data: personalInfoData } = useQuery(GET_PERSONAL_INFO);
    const { loading: projectsLoading, error: projectsError, data: projectsData } = useQuery(GET_PROJECTS);
    const { loading: skillsLoading, error: skillsError, data: skillsData } = useQuery(GET_SKILLS);
    const { loading: studyLoading, error: studyError, data: studyData } = useQuery(GET_STUDY_INFO);

    // Check for errors and update the error state
    useEffect(() => {
        if (contactError || personalInfoError || projectsError || skillsError || studyError) {
            setError('There was an error fetching data.');
        } else {
            setError(null);
        }
    }, [contactError, personalInfoError, projectsError, skillsError, studyError]);
    useEffect(() => {
        console.log(studyData)
    }, [studyData]);

    if (contactLoading || personalInfoLoading || projectsLoading || skillsLoading || studyLoading) {
        return <p>Loading...</p>;
    }

    return (
        <div className="App">
                <div className={"header"}>
                    <div className={"banner"}/>
                    <div className={"imgWrapper marginBanner"}>
                        <img src={avatar} alt="default user img"/>
                    </div>
                </div>
                <div>
                    {personalInfoData &&
                        <PersonalInfo personalInfo={personalInfoData.personalInfo} />}


                    <hr />
                    {projectsData &&
                    <ProjectList projects={projectsData.projects} />}
                    <hr />
                    {skillsData &&
                    <SkillInfo skills={skillsData.skills} />}
                    <hr />
                    {studyData &&
                    <StudyInfo study={studyData.studyInfo} />}
                    {contactData &&
                        <ContactInfo contact={contactData?.contact} />}
                </div>
        </div>
    );
}

// Wrap the entire app with ApolloProvider to provide the Apollo Client instance
const ApolloApp = () => (
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>
);

export default ApolloApp;
