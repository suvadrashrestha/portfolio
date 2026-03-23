import React from "react";
import { FaReact, FaNodeJs, FaJsSquare } from "react-icons/fa";

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-[#0b0c1c] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* About Title with border */}
        <h2 className="text-4xl font-bold text-[#9a2b2b] mb-10 border-t-4 border-l-4 border-blue-500 inline-block p-2">
          About Me
        </h2>

        <div className="flex flex-col md:flex-row gap-10">
          {/* Left Side: Image */}
          <div className="flex-shrink-0 w-full md:w-1/3">
            <img
              src="suvadra.jpg"
              alt="Suvadra"
              className="w-full h-full object-cover rounded-lg shadow-lg min-h-[500px]"
            />
          </div>

          {/* Right Side: Description + Education + Skills */}
          <div className="flex flex-col justify-between w-full md:w-2/3 space-y-6">
            {/* Description */}
            <div className="bg-[#1a1b2c] p-6 rounded-lg shadow-lg flex-1">
              <p className="text-lg leading-relaxed">
                I am a undergraduate CS student who loves building smooth and
                interactive application. Frontend or backend, I enjoy making
                things work beautifully. Coding my way through the digital
                world, one feature at a time.
              </p>
            </div>

            {/* Education Section */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-[#9a2b2b] mb-4">
                Education
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* BCA */}
                <div className="bg-[#1a1b2c] p-4 rounded-lg shadow-lg">
                  <div className="flex justify-between items-center">
                    <h4 className="text-lg font-semibold text-[#9a2b2b]">
                      Bachelor's in Computer Application
                    </h4>
                    <span className="text-sm text-gray-400">TU</span>
                  </div>
                  <div className="flex justify-between mt-1 text-sm">
                    <p>Nepal Mega College</p>
                    <span className="text-gray-400">2079–2083</span>
                  </div>
                </div>

                {/* +2 */}
                <div className="bg-[#1a1b2c] p-4 rounded-lg shadow-lg">
                  <div className="flex justify-between items-center">
                    <h4 className="text-lg font-semibold text-[#9a2b2b]">
                      +2 Computer Science
                    </h4>
                    <span className="text-sm text-gray-400">NEB</span>
                  </div>
                  <div className="flex justify-between mt-1 text-sm">
                    <p>Gaurishankar College</p>
                    <span className="text-gray-400">2077–2079</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Skills Section */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-[#9a2b2b] mb-4">
                Skills
              </h3>
              <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
                <div className="flex flex-col items-center bg-[#1a1b2c] p-4 rounded-lg shadow-lg">
                  <FaJsSquare size={32} className="mb-2 text-yellow-400" />
                  <span>JavaScript</span>
                </div>
                <div className="flex flex-col items-center bg-[#1a1b2c] p-4 rounded-lg shadow-lg">
                  <FaReact size={32} className="mb-2 text-blue-400" />
                  <span>React</span>
                </div>
                <div className="flex flex-col items-center bg-[#1a1b2c] p-4 rounded-lg shadow-lg">
                  <FaNodeJs size={32} className="mb-2 text-green-500" />
                  <span>Node.js</span>
                </div>
                {/* Add more skills if needed */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
