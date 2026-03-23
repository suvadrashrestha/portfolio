import ParticlesBackground from "./ParticlesBackground";
import TypeWriter from "typewriter-effect";
import { FaDownload } from "react-icons/fa6";
import Socials from "./Socials";

const HeroSection = () => {
  return (
    <div className="relative px-[min(80px,8%)] pt-[13vh] h-screen w-full flex flex-col items-center">
      <ParticlesBackground />
      <img
        src="/myglibli.png"
        alt="Artwork"
        className="select-none brightness-60 absolute block filter max-w-full max-h-[90vh] object-contain mx-auto"
      />

      <div className="select-none italic flex-1 font-bold flex items-center gap-25 sm:gap-20 md:gap-23 lg:gap-26 text-[clamp(16px,6vw,72px)] text-white leading-tight">
        <span>Hello</span>
        <span>There</span>
      </div>

      <div className="select-none   w-full  flex-2 flex flex-col items-center  md:justify-start z-2 font-bold">
        <p className="text-[clamp(16px,6vw,60px)]  ">I am</p>
        <p className="text-[clamp(16px,6vw,60px)] tracking-widest whitespace-nowrap ">
          Suvadra Shrestha
        </p>
        <h2 className="flex text-8 font-normal items-center ">
          A passionate -
          <TypeWriter
            options={{
              strings: [
                " Frontend Developer",
                " Backend Developer",
                " AI/ML Enthusiast",
              ],
              autoStart: true,
              loop: true,
              delay: 75,
              deleteSpeed: 50,
            }}
          />
        </h2>
        <a
          href="/cv.pdf"
          download
          className="flex gap-3 rounded text-[#9a2b2b] font-bold cursor-pointer mt-5 border-2 border-[#9a2b2b] p-2 
  hover:bg-[#9a2b2b] hover:text-white transition-all duration-300 ease-in-out"
        >
          Download CV <FaDownload />
        </a>
        <div className="mt-4">
          <Socials />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
