import { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

interface Link {
  name: string;
  href: string;
}

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [active, setActive] = useState<string>("Home"); // Track active link
  const [underlineStyle, setUnderlineStyle] = useState<{
    left?: number;
    width?: number;
  }>({}); // Style for sliding underline

  // Refs for each link
  const linkRefs = useRef<{ [key: string]: HTMLAnchorElement | null }>({});

  const links: Link[] = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  // Update underline position when active link changes
  useEffect(() => {
    const currentRef = linkRefs.current[active];
    if (currentRef) {
      const rect = currentRef.getBoundingClientRect();
      const parentRect = currentRef.parentElement?.getBoundingClientRect();
      if (parentRect) {
        setUnderlineStyle({
          left: rect.left - parentRect.left - 4, // move a bit left for extra width
          width: rect.width + 8, // make underline slightly wider than text
        });
      }
    }
  }, [active, isOpen]);

  const toggleMenu = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className="fixed  w-full z-50 transition-all duration-300 
       bg-transparent backdrop-blur-md shadow-md"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Left Side: Name */}
          <div className="shrink-0 text-[#9a2b2b]  font-bold text-2xl">
            SUVADRA
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex relative space-x-10">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                ref={(el) => {
                  linkRefs.current[link.name] = el; // assign to ref
                }}
                className={`text-white text-lg transition duration-300 cursor-pointer`}
                onClick={() => setActive(link.name)}
              >
                {link.name}
              </a>
            ))}
            {/* Animated underline */}
            <span
              className="absolute bottom-0 h-0.5 bg-[#9a2b2b] rounded transition-all duration-300"
              style={{
                left: underlineStyle.left,
                width: underlineStyle.width,
              }}
            ></span>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-[#0b0c1c] overflow-hidden transition-max-height duration-500 ease-in-out ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="px-4 pt-2 pb-4 space-y-2">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`block text-lg transition duration-300 ${
                active === link.name ? "text-[#9a2b2b]" : "text-white"
              }`}
              onClick={() => {
                setIsOpen(false);
                setActive(link.name);
              }}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
