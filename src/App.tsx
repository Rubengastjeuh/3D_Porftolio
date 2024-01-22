import React from 'react';
import './styles/App.css';

import ContactInfo from './components/ContactInfo';
import PersonalInfo from './components/PersonalInfo';
import ProjectList from './components/ProjectList';
import SkillInfo from './components/SkillInfo';
import StudyInfo from './components/StudyInfo';

function App() {
  // Replace this placeholder data with actual data from GraphQL
  const contactData = {
    email: 'example@example.com',
    phoneNumber: '123-456-7890',
  };

  const personalInfoData = {
    name: 'John Doe',
    age: 25,
    dateOfBirth: '1999-01-01',
    nationality: 'American',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    languages: ['English', 'Spanish'],
  };

  const projectListData = [
    {
      id: 1,
      title: 'Sample Project 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      skills: ['React', 'GraphQL', 'Apollo Client'],
      ageWhenDone: 24,
      image: 'project1.jpg',
    },
    // Add more projects as needed
  ];

  const skillInfoData = [
    { name: 'JavaScript' },
    { name: 'React' },
    { name: 'GraphQL' },
    // Add more skills as needed
  ];

  const studyInfoData = {
    school: 'University of Example',
    startYear: 2018,
    endYear: 2022,
    fieldOfStudy: 'Computer Science',
  };

  return (
      <div className="App">
        <ContactInfo contact={contactData} />
        <hr />
        <PersonalInfo personalInfo={personalInfoData} />
        <hr />
        <ProjectList projects={projectListData} />
        <hr />
        <SkillInfo skills={skillInfoData} />
        <hr />
        <StudyInfo study={studyInfoData} />
      </div>
  );
}

export default App;
