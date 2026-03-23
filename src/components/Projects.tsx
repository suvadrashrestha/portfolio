import React from "react";
import { FaGithub } from "react-icons/fa";
import { FiCode } from "react-icons/fi";

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Alphable",
      description:
        "Alphable is a UI-focused design marketplace demo built to showcase modern frontend design and layout skills. The project highlights a clean and responsive interface with sections like hero, navigation, and call-to-actions. It is created purely for demonstrating UI/UX design and does not include backend functionality.",
      tech: ["React", "Vite", "Framer"],
      img: "alphable.png",
      github: "https://github.com/suvadrashrestha/Alphable",
      live: "https://alphable.vercel.app/",
    },
    {
      title: "Connect All",
      description:
        "Connect All is a social media web application that allows users to create accounts, follow others, and share posts. Users can like and comment on posts, manage their profiles, and view content from their connections. The project is built to demonstrate the basic functionality of a social media platform.",
      tech: ["HTML", "CSS", "JS", "MySQL", "PHP"],
      img: "connect_all.png",
      github: "https://github.com/suvadrashrestha/connect_all",
      live: "#",
    },
    {
      title: "Portfolio",
      description:
        "Portfolio Website is a personal web project that showcases my skills, projects, and contact information. It includes sections for About Me, Projects, Skills, and Contact, providing visitors with an easy way to view my work. The website is designed with a responsive layout to look good on all devices and demonstrates my abilities in UI design and web layout.",
      tech: ["React", "Tailwind CSS"],
      img: "portfolio.png",
      github: "https://github.com/suvadrashrestha/portfolio",
      live: "https://portfolio-beta-hazel-59.vercel.app/",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-[#0b0c1c] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-[#9a2b2b] mb-10 border-t-4 border-l-4 border-blue-500 inline-block p-2">
          Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#1a1b2c] rounded-lg shadow-lg overflow-hidden"
            >
              {/* Image Container */}
              <div className="overflow-hidden h-48 w-full">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex flex-wrap gap-2 mb-2">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-[#9a2b2b] text-white text-xs px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-300 text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <FaGithub size={20} />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <FiCode size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
