import { FaInstagram, FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";

const Socials = () => {
  return (
    <div className="flex gap-4">
      <a
        href="https://www.instagram.com/suvadra_shrestha/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#9a2b2b] hover:text-white transform hover:scale-125 transition duration-300"
      >
        <FaInstagram size={24} />
      </a>
      <a
        href="https://www.facebook.com/jeena.shrestha.79069/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#9a2b2b] hover:text-white transform hover:scale-125 transition duration-300"
      >
        <FaFacebook size={24} />
      </a>
      <a
        href="https://www.linkedin.com/in/suvadrashrestha/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#9a2b2b] hover:text-white transform hover:scale-125 transition duration-300"
      >
        <FaLinkedin size={24} />
      </a>
      <a
        href="https://github.com/suvadrashrestha"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#9a2b2b] hover:text-white transform hover:scale-125 transition duration-300"
      >
        <FaGithub size={24} />
      </a>
    </div>
  );
};

export default Socials;
