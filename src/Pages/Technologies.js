import React from "react";
import { techStackDetails } from "../Details";

function Technologies() {
  const {
    html,
    css,
    js,
    react,
    redux,
    tailwind,
    bootstrap,
    java,
    spring,
    hibernate,
    springSecurity,
    aws,
    vscode,
    git,
    github,
    npm,
    postman,
      } = techStackDetails;
  return (
    <main className="container mx-auto max-width pt-10 pb-20 ">
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Tech Stack
        </h1>
        <p className="text-content py-2 lg:max-w-3xl">
          Technologies I've been working with recently
        </p>
      </section>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">

      <style>
    {`
      .grid img {
        transition: all 0.3s ease;
        cursor: pointer;
        transform-origin: center;
        width: 50px;
        height: 50px;
        object-fit: contain;
        filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
      }
      .grid img:hover {
        transform: scale(1.25) translateY(-5px);
        filter: drop-shadow(0 5px 15px rgba(0, 0, 0, 0.3)) brightness(1.1);
      }
    `}
  </style>

        <img src={html} title="html" alt="" />
        <img src={css} title="CSS" alt="" />
        <img src={js} title="JavaScript" alt="" />
        <img src={react} title="React" alt="" />
        <img src={redux} title="Redux" alt="" />
        <img src={tailwind} title="Tailwind CSS" alt="" />
        <img src={bootstrap} title="Bootstrap" alt="" />
        <img src={java} title="Java" alt="" />
        <img src={spring} title="Spring" alt="" />
        <img src={hibernate} title="Hibernate" alt="" />
        <img src={springSecurity} title="Spring Security" alt="" />
        <img src={aws} title="AWS" alt="" />

      </section>
      <section>
        <h1 className="text-2xl pt-10 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Tools
        </h1>
      </section>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
        <img src={vscode} title="Visual Studio Code" alt="" />
        <img src={git} title="Git" alt="Git" />
        <img src={github} title="Github" alt="Github" />
        <img src={npm} title="NPM" alt="NPM" />
        <img src={postman} title="Postman" alt="Postman" />
        
      </section>
    </main>
  );
}

export default Technologies;
