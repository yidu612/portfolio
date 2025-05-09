import React from "react";
import profilePhoto from "../assets/images/pic.png";
import pictures from "../assets/images/Screenshot (134).png";
import doubleB from "../assets/images/Screenshot (136).png";
import { FaReact, FaGitAlt, FaFigma } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

function About() {
  const skills = [
    { icon: <FaReact />, name: "React", description: "Experiencing with building dynamic web applications using React, focusing on component-based architecture and state management." },
    { icon: <SiTailwindcss />, name: "Tailwind CSS", description: "Experienced in using Tailwind CSS for rapid UI development, with an emphasis on utility-first design principles." },
    { icon: <FaGitAlt />, name: "Git", description: "Familiar with version control using Git for collaborative development and maintaining code history." },
    { icon: <VscVscode />, name: "VS Code", description: "Proficient in using Visual Studio Code for web development, with an emphasis on efficient coding and debugging workflows." },
    { icon: <FaFigma/>, name: "Figma", description: "Learning & Enhancing UI/UX Design Skills | Focusing on wireframing, prototyping, and interactive design elements."},
  ];

  const projects = [
    {
      name: "Photo Studio Platform",
      description: "Developed a photography showcase platform for a photo studio.",
      tech: ["React", "Tailwind CSS"],
      image: pictures,
      
    },
    {
      name: "Furniture House App",
      description: "Created an e-commerce interface for furniture browsing and visualization.",
      tech: ["React", "CSS Modules"],
      image: doubleB,
    },
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-8xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-start justify-center px-8 py-20">
          {/* Left: About Me Title + Image */}
          <div className="flex flex-col items-center w-full md:w-[40%]">
            <h2 className="text-4xl md:text-5xl font-bold text-amber-400 text-center drop-shadow-lg mb-6">About Me</h2>
            <div className="flex justify-center items-center">
              <img
                src={profilePhoto}
                alt="Yididiya Tesfaye"
                className="w-[18rem] h-[18rem] object-cover rounded-full  "
              />
            </div>
          </div>

          {/* Right: Text */}
          <div className="text-white w-full md:w-[60%]">
            <h3 className="text-3xl font-semibold mb-6 text-center md:text-left">Computer Science Student & Frontend Developer</h3>
            <p className="text-lg mb-4">
              I'm Yididiya Tesfaye, a Computer Science and Engineering major at Adama Science and Technology University, with a strong focus on frontend development.
            </p>
            <p className="text-lg mb-4">
              Through both academic projects and personal ventures, I've cultivated solid skills in UI design, responsive layouts, and building dynamic, user-centered web applications. I'm passionate about crafting clean, intuitive interfaces that not only look good but feel great to use.
            </p>
            <p className="text-lg">
              I'm always exploring modern web technologies and enjoy bringing ideas to life with a mix of creativity and code.
            </p>
          </div>
        </div>

        {/* Projects Section */}
        <div className="my-16">
          <h3 className="text-2xl font-semibold mb-6 text-center text-white">My Projects</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="bg-[#3E2723] p-6 rounded-xl shadow-md hover:shadow-amber-300 transition-shadow ">
                <h4 className="font-bold text-center text-xl mb-3 text-white">{project.name}</h4>
                <p className="text-white mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="text-sm px-3 py-1 text-center bg-amber-200/10 text-amber-200 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-4">
                  <img
                    src={project.image}
                    alt={`Screenshot of ${project.name} project UI`}
                    className="w-full h-auto rounded-lg shadow-md"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-16">
          <h3 className="text-2xl text-center font-semibold mb-6 text-white">Technical Skills</h3>
          <div className="grid grid-cols-2 gap-4">
            {skills.map((skill, index) => (
              <div key={index} className="bg-[#4E342E] p-4 rounded-lg shadow hover:shadow-amber-200 transition">
                <div className="flex justify-center items-center space-x-2">
                  <div className="text-amber-300 text-2xl">{skill.icon}</div>
                  <span className="text-white text-lg">{skill.name}</span>
                </div>
                <p className="text-sm px-3 py-1 text-center bg-amber-200/10 mb-4 text-amber-200 rounded-full mt-4">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
