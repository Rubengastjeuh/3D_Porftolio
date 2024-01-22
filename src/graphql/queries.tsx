import { gql } from '@apollo/client';

// RESTful queries using @rest directive
export const GET_CONTACT_INFO = gql`
  query GetContactInfo {
    contact @rest(type: "ContactInfo", path: "/contactInfo/Ruben") {
      email
      phoneNumber
    }
  }
`;

export const GET_PERSONAL_INFO_BASIC = gql`
  query GetPersonalInfo {
    personalInfo @rest(type: "PersonalInfo", path: "/personalInfo/Ruben") {
      name
      dateOfBirth
      nationality
      description
      languages
    }
  }
`;

export const GET_PROJECTS_BASIC = gql`
  query GetProjects {
    projects @rest(type: "Project", path: "/projects/all/Ruben") {
      id
      title
      description
      image
    }
  }
`;

// export const GET_PROJECT_BY_ID = gql`
//   query GetProjectById($id: ID!) {
//     project @rest(type: "Project", path: `projects/${id}`) {
//       id
//       title
//       description
//       skills
//       ageWhenDone
//       image
//     }
//   }
// `;
//
// export const ADD_PROJECT = gql`
//   mutation AddProject($input: ProjectInput!) {
//     addProject @rest(type: "Project", method: "POST", path: "projects", body: $input) {
//       id
//       title
//       description
//       skills
//       ageWhenDone
//       image
//     }
//   }
// `;
//
// export const DELETE_PROJECT = gql`
//   mutation DeleteProject($id: ID!) {
//     deleteProject @rest(type: "Project", method: "DELETE", path: `projects/${id}`) {
//       id
//       title
//     }
//   }
// `;

export const GET_SKILLS = gql`
  query GetSkills {
    skills @rest(type: "Skill", path: "/skills/Ruben") {
      name
    }
  }
`;

export const GET_STUDY_INFO = gql`
  query GetStudyInfo {
    studyInfo @rest(type: "Study", path: "/studies/Ruben") {
      school
      startYear
      endYear
      fieldOfStudy
    }
  }
`;
