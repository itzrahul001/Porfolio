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
import projectmvc from "./assets/projects/projectMVC.png";
import projectContact from "./assets/projects/projectContact.png";



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
    title: "OnlineContactManager/ Spring Boot Project",
    image: projectContact,
    description: `The Online Contact Manager is a robust Spring Boot application designed to simplify the process of managing personal and professional contacts. Built with a focus on security and user experience, this application incorporates key technologies like Spring Security and Thymeleaf for seamless functionality and a responsive UI.
`,
    techstack: "HTML/CSS,Bootstrap, Spring boot, Spring Security, Thymeleaf",
    previewLink: "https://github.com/itzrahul001/OnlineContactManager/blob/main/README.md",
    githubLink: "https://github.com/itzrahul001/OnlineContactManager",
  },

   
  {
    title: "Student Managemant/ Spring MVC Project",
    image: projectmvc,
    description: `
This Student Management System project, built using Spring MVC, demonstrates CRUD (Create, Read, Update, Delete) operations for managing student details. The application allows users to add, update, view, and delete student records, leveraging the MVC design pattern to separate concerns for better organization. Through this project, I gained hands-on experience with Spring framework features such as Controllers, Services, and Repositories, while learning to integrate a relational database for persistent storage. This project helped me understand the implementation of CRUD operations, the importance of MVC architecture, and the development of scalable and maintainable web applications.`,
    techstack: "HTML/CSS,Bootstrap, Spring MVC",
    previewLink: "https://github.com/itzrahul001/Spring-MVC-Project/blob/main/README.md",
    githubLink: "https://github.com/itzrahul001/Spring-MVC-Project",
  },

  {
    title: "My Portfolio Website",
    image: projectImage1,
    description: `This is sample project description random things are here in description This is sample
project `,
    techstack: "HTML/CSS,Tailwind, JS|React",
    previewLink: "#",
    githubLink: "https://github.com/itzrahul001/Porfolio",
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
    previewLink: "https://frolicking-llama-d70b12.netlify.app/",
    githubLink: "https://github.com/itzrahul001/ToDoApp",
  },
  {
    title: "Travlers Landing Page",
    image: projectImage3,
    description: ` Developed a responsive website using HTML and CSS, showcasing strong front-end web development skills.
 Applied CSS media queries for optimal viewing across various devices.
  Utilized Git for version control, ensuring systematic code management.`,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://itzrahul001.github.io/Travelers/",
    githubLink: "https://github.com/itzrahul001/Travelers",
  },
  
   
];

// Enter your Contact Details here
export const contactDetails = {
  email: "rahulyadav96962004@gmail.com",
  phone: "+91 9696971447",
};
