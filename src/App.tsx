import { useState } from "react";
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className="bg-blue-800 text-white p-4 sticky top-0 z-50 shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-xl font-bold">Kevin Castro</div>
          <button
            className="md:hidden block focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6"
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
            } absolute top-full left-0 w-full bg-blue-800 md:bg-transparent md:static md:flex md:items-center space-y-4 md:space-y-0 md:space-x-6 text-center py-4 md:py-0`}
          >
            <li>
              <a
                href="#intro"
                className="block hover:text-blue-200 transition-colors duration-200"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="block hover:text-blue-200 transition-colors duration-200"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="block hover:text-blue-200 transition-colors duration-200"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block hover:text-blue-200 transition-colors duration-200"
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
      <footer className="bg-blue-800 text-white p-4 text-center">
        <p>&copy; 2025 Kevin Castro. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;
