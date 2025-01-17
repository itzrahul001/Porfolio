// Enter all your detials in this file
// Logo images
import logogradient from "./assets/logo.svg";
import logo from "./assets/logo.svg";
// Profile Image
import profile from "./assets/profile.png";
// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import redux from "./assets/techstack/redux.png";
import tailwind from "./assets/techstack/tailwind.png";
import bootstrap from "./assets/techstack/bootstrap.png";
import java from "./assets/techstack/java.png";
import spring from "./assets/techstack/spring.png";
import hibernate from "./assets/techstack/hibernate.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import npm from "./assets/techstack/npm.png";
import postman from "./assets/techstack/postman.png";

// Porject Images
import projectImage1 from "./assets/projects/project1.png";
import projectImage2 from "./assets/projects/project2.png";
import projectImage3 from "./assets/projects/project3.png";


// Logos
export const logos = {
  logogradient: logogradient,
  logo: logo,
};

// Enter your Personal Details here
export const personalDetails = {
  name: "Rahul Yadav",
  tagline: "I'm a Java full Stack Developer",
  img: profile,
  about: `”A results-driven Java Backend Developer with strong expertise in Java programming. Proficient in Java, JavaScript,
 React.js, and frameworks such as Spring, Spring Boot, and Spring MVC. Adept at designing efficient and reliable
 backend solutions, optimizing performance, and ensuring seamless integration with front-end technologies. Passion
ate about continuous learning and eager to contribute technical skills to drive innovative solutions in a dynamic
 development environment.`,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/in/rahul-yadav-302a6b1a8/",
  github: "https://github.com/itzrahul001/",
  twitter: "https://x.com/rahul_ydv0421",
  instagram: "https://www.instagram.com/",
};

// Enter your Work Experience here
export const workDetails = [


  {
    Position: " Java Internship",
    Company: `CodeSoft`,
    Location: "Online",
    Type: "Internship",
    Duration: "Feb 2024 - March 2024",
  },
];

// Enter your Education Details here
export const eduDetails = [
  {
    Position: "Master of Computer Applications",
    Company: "Gautam Buddha University",
    Location: "Greater Noida ,UP",
    Type: "Full Time",
    Duration: "July 2024 - Present",
    cgpa:"Appearing"
  },
  {
    Position: "Bachelor of Computer Applications",
    Company: `Gautam Buddha University`,
    Location: "Greater Noida ,UP",
  
    Type: "Full Time",
    Duration: "Aug 2021 - July 2024 ",
    cgpa:"7.0"
  },

];

// Tech Stack and Tools
export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  react: react,
  redux: redux,
  spring: spring,
  tailwind: tailwind,
  java:java,
  bootstrap: bootstrap,
  hibernate:hibernate,
  vscode: vscode,
  postman: postman,
  npm: npm,
  git: git,
  github: github,
};

// Enter your Project Details here
export const projectDetails = [
  {
    title: "My Portfolio Website",
    image: projectImage1,
    description: `This is sample project description random things are here in description This is sample
project lorem ipsum generator for dummy content`,
    techstack: "HTML/CSS,Tailwind, JS|React",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
  },
  {
    title: "ToDOList/Task Manager",
    image: projectImage2,
    description: ` Developed a fully responsive TODO list/Task Manager application using React.js, enabling users to add ,delete and mark tasks
 as completed.
  Tasks persist across page reloads using browser local storage.
 Optimized layout for desktop, tablet, and mobile screens, ensuring a consistent user expe
rience.
  Utilized React’s state management to handle task updates and interactions efficiently`,
    techstack: "HTML/CSS, ReactJs",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
  },
  {
    title: "Travlers Landing Page",
    image: projectImage3,
    description: ` Developed a responsive website using HTML and CSS, showcasing strong front-end web development skills.
 Applied CSS media queries for optimal viewing across various devices.
  Utilized Git for version control, ensuring systematic code management.`,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
  },
  
   
];

// Enter your Contact Details here
export const contactDetails = {
  email: "rahulyadav96962004@gmail.com",
  phone: "+91 9696971447",
};
