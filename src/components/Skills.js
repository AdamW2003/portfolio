import React from "react";
import PortfolioSearch from "./PortfolioSearch";
import { Typography } from "@mui/material";

const Skills = () => {
//   const skills = [
//     "JavaScript",
//     "React.js",
//     "Node.js",
//     "Python",
//     "HTML5",
//     "CSS3",
//     "Angular",
//     "Vue.js",
//     "TypeScript",
//     "MongoDB",
//     "SQL",
//     "Express.js",
//     "Django",
//     "Flask",
//     "Ruby on Rails",
//     "Java",
//     "Kotlin",
//     "Swift",
//     "C#",
//     "PHP",
//     "Redux",
//     "GraphQL",
//     "Docker",
//     "Kubernetes",
//     "Git",
//     "GitHub",
//     "GitLab",
//     "Jenkins",
//     "Travis CI",
//     "AWS",
//     "Azure",
//     "Google Cloud Platform (GCP)",
//     "Firebase",
//     "RESTful API Design",
//     "GraphQL API Design",
//     "WebSockets",
//     "Responsive Web Design",
//     "Bootstrap",
//     "Material-UI",
//     "Sass",
//     "Less",
//     "Tailwind CSS",
//     "D3.js",
//     "Three.js",
//     "Unity",
//     "Unreal Engine",
//     "C++",
//     "C",
//     "Rust",
//     "Go (Golang)",
//     "Shell Scripting",
//     "Bash",
//     "Linux System Administration",
//     "Windows Server Administration",
//     "Network Security",
//     "Cryptography",
//     "Machine Learning",
//     "Deep Learning",
//     "Natural Language Processing (NLP)",
//     "Computer Vision",
//     "TensorFlow",
//     "PyTorch",
//     "Scikit-Learn",
//     "Pandas",
//     "NumPy",
//     "Matplotlib",
//     "Data Analysis",
//     "Data Visualization",
//     "Power BI",
//     "Tableau",
//     "Microsoft Excel",
//     "Agile Methodology",
//     "Scrum",
//     "Kanban",
//     "JIRA",
//     "Confluence",
//     "UI/UX Design",
//     "Figma",
//     "Adobe XD",
//     "Sketch",
//     "InVision",
//     "Zeplin",
//     "Product Management",
//     "Agile Product Management",
//     "DevOps",
//     "Continuous Integration (CI)",
//     "Continuous Deployment (CD)",
//     "Test-Driven Development (TDD)",
//     "Behavior-Driven Development (BDD)",
//     "Cybersecurity",
//     "Ethical Hacking",
//     "Penetration Testing",
//     "Blockchain",
//     "Smart Contracts",
//     "Decentralized Finance (DeFi)",
//     "Cryptocurrency",
//     "IoT (Internet of Things)",
//     "Augmented Reality (AR)",
//     "Virtual Reality (VR)",
//     "Game Development",
//   ];

const skills = {
  Languages: [
    'JavaScript',
    'TypeScript',
    'Python',
    'C#',
    'PHP',
    'Java',
    'CSS',
    'HTML',
    'SQL',
  ],
  Database: ['DynamoDb', 'MySQL', 'SQL Server', 'Redis'],
  FrameWork: [
    '.Net',
    'React js',
    'Angular js',
    'Discord js',
    'Django',
    'Entity Framework',
    'Bootstrap',
  ],
  Tools: ['SSRS', 'SonarQube', 'K9S', 'Git', 'Github', 'Redux'],
  DevOps: [
    'AWS',
    'Azure',
    'Cloudflare',
    'Github Actions',
    'Octopus Deployment',
    'Docker',
    'Kubernetes',
    'Nginx',
    'Apache',
  ],
  Development: [
    'Continous Deployment',
    'Continous Development',
    'System Administration',
    'ISO 27001',
    'REST',
    'WebSocket',
    'Scrum',
    'Agile',
    'kanban',
    'Machine Learning',
    'TensorFlow',
  ],
  Misc: ['3D printing'],
};
  

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Typography variant="h1" sx={{ paddingBottom: 2 }}>
        Skills
      </Typography>
      <PortfolioSearch skills={skills} />
    </div>
  );
};

export default Skills;