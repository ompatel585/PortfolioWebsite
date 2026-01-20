import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // <nav className="fixed w-full bg-[#0f172a]/95 backdrop-blur-md z-50">
    <nav className="sticky top-0 w-full bg-[#0f172a]/95 backdrop-blur-md backdrop-saturate-150 z-50">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-white">Om Patel</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-gray-300 hover:text-white transition"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-300 hover:text-white transition"
            >
              About
            </a>
            <a
              href="#skills"
              className="text-gray-300 hover:text-white transition"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="text-gray-300 hover:text-white transition"
            >
              Projects
            </a>
            <a
              href="#education"
              className="text-gray-300 hover:text-white transition"
            >
              Education
            </a>
            <a
              href="#contact"
              className="text-gray-300 hover:text-white transition"
            >
              Contact
            </a>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300"
            >
              <i className={isOpen ? "fas fa-times" : "fas fa-bars"}></i>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#0f172a]">
            <a
              href="#home"
              className="block text-gray-300 hover:text-white px-3 py-2"
            >
              Home
            </a>
            <a
              href="#about"
              className="block text-gray-300 hover:text-white px-3 py-2"
            >
              About
            </a>
            <a
              href="#skills"
              className="block text-gray-300 hover:text-white px-3 py-2"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="block text-gray-300 hover:text-white px-3 py-2"
            >
              Projects
            </a>
            <a
              href="#education"
              className="block text-gray-300 hover:text-white px-3 py-2"
            >
              Education
            </a>
            <a
              href="#contact"
              className="block text-gray-300 hover:text-white px-3 py-2"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
