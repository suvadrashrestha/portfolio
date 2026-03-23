import React, { useEffect, useRef } from "react";
import { FaReact, FaNodeJs, FaJsSquare } from "react-icons/fa";
import {
  SiMongodb,
  SiTypescript,
  SiTailwindcss,
  SiHtml5,
} from "react-icons/si";

const Skills: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const skills = [
    { name: "React", icon: <FaReact size={30} className="text-[#61dafb]" /> },
    {
      name: "Node.js",
      icon: <FaNodeJs size={30} className="text-[#3c873a]" />,
    },
    {
      name: "JavaScript",
      icon: <FaJsSquare size={30} className="text-yellow-400" />,
    },
    {
      name: "TypeScript",
      icon: <SiTypescript size={30} className="text-blue-500" />,
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss size={30} className="text-cyan-400" />,
    },
    {
      name: "MongoDB",
      icon: <SiMongodb size={30} className="text-green-600" />,
    },
    { name: "HTML5", icon: <SiHtml5 size={30} className="text-orange-500" /> },
    // Add more skills as needed
  ];

  // Auto-scroll effect
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const speed = 1; // pixels per frame

    const animate = () => {
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft += speed;
      }
      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <section id="skills" className="py-20 bg-[#0b0c1c] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-[#9a2b2b] mb-10 border-t-4 border-l-4 border-blue-500 inline-block p-2">
          Skills
        </h2>

        {/* Horizontal Auto-scroll */}
        <div ref={scrollRef} className="flex space-x-6 overflow-x-hidden">
          {/* Duplicate skills array for seamless loop */}
          {[...skills, ...skills].map((skill, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-40 flex flex-col items-center justify-center bg-[#1a1b2c] p-6 rounded-lg shadow-lg"
            >
              {skill.icon}
              <span className="mt-3 text-lg font-semibold text-center">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
