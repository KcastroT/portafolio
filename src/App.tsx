import { useState } from "react";
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur shadow-md transition-shadow duration-300">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
          <div className="text-2xl font-extrabold text-blue-800 tracking-tight">Kevin Castro</div>
          <button
            className="md:hidden block focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation"
          >
            <svg
              className="w-7 h-7 text-blue-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
          <ul
            className={`${
              isOpen ? "block" : "hidden"
            } absolute top-full left-0 w-full bg-white/95 md:bg-transparent md:static md:flex md:items-center space-y-4 md:space-y-0 md:space-x-8 text-center py-4 md:py-0 shadow md:shadow-none transition-all duration-200`}
          >
            <li>
              <a
                href="#intro"
                className="block font-semibold text-blue-800 px-4 py-2 rounded hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="block font-semibold text-blue-800 px-4 py-2 rounded hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="block font-semibold text-blue-800 px-4 py-2 rounded hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block font-semibold text-blue-800 px-4 py-2 rounded hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <Intro />
      <Projects />
      <Skills />
      <Contact />
      <footer className="w-full bg-gradient-to-r from-blue-900 via-blue-800 to-green-700 text-white p-5 text-center shadow-inner">
        <p className="text-sm">&copy; 2025 Kevin Castro.</p>
      </footer>
    </>
  );
}

export default App;
