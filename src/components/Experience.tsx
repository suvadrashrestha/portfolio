import React from "react";
import { MdWork } from "react-icons/md";
import { FiExternalLink } from "react-icons/fi";

const Experience: React.FC = () => {
  const experiences = [
    {
      role: "Full Stack Developer Intern",
      company: "Upchaar Nepal",
      duration: "June 2025 - Sep 2025",
      description:
        "Worked as a Full Stack Developer Intern where I contributed to building and maintaining web applications using React and Node.js. Gained hands-on experience in developing real-world features, API integration, and improving UI/UX.",
      tech: ["React", "Node.js"],
      link: "https://www.upchaarnepal.com/",
    },
  ];

  return (
    <section id="experience" className="py-20 bg-[#0b0c1c] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-[#9a2b2b] mb-10 border-t-4 border-l-4 border-blue-500 inline-block p-2">
          Experience
        </h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-[#1a1b2c] p-6 rounded-lg shadow-lg">
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
                <div className="flex items-center gap-3">
                  <MdWork className="text-[#9a2b2b]" size={24} />
                  <div>
                    <h3 className="text-xl font-bold">{exp.role}</h3>
                    <p className="text-gray-400 text-sm">{exp.company}</p>
                  </div>
                </div>

                <span className="text-sm text-gray-400">{exp.duration}</span>
              </div>

              {/* Description */}
              <p className="text-gray-300 text-sm mb-4">{exp.description}</p>

              {/* Tech */}
              <div className="flex flex-wrap gap-2 mb-4">
                {exp.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-[#9a2b2b] text-white text-xs px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Link */}
              <a
                href={exp.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition"
              >
                <FiExternalLink /> View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
