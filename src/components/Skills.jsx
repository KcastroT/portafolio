import { useEffect, useState } from "react";

const SkillsData = {
  frontend: [
    {
      "HTML/CSS": 0.9,
    },
    {
      JavaScript: 0.85,
    },
    {
      TypeScript: 0.8,
    },
    {
      React: 0.8,
    },
    {
      TailwindCSS: 0.7,
    },
  ],
  backend: [
    {
      NodeJS: 0.75,
    },
    {
      Express: 0.75,
    },
    {
      Flask: 0.7,
    },
  ],
  mobile: [
    {
      Kotlin: 0.6,
    },
    {
      Swift: 0.6,
    },
  ],
  languages: [
    {
      "C++": 0.7,
    },
    {
      Python: 0.8,
    },
    {
      "C#": 0.5,
    },
    {
      Clojure: 0.6,
    },
    {
      Java: 0.5,
    },
  ],
  miscellaneous: [
    {
      Git: 0.9,
    },
    {
      Agile: 0.8,
    },
    {
      Postman: 0.7,
    },
    {
      Linux: 0.65,
    },
    {
      MongoDB: 0.6,
    },
    {
      MySQL: 0.7,
    },
  ],
};

const SkillBar = ({ skillName, skillLevel }) => {
  const [width, setWidth] = useState("0%");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setWidth(`${skillLevel * 100}%`);
    }, 100);
    return () => clearTimeout(timeout);
  }, [skillLevel]);

  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-gray-700">{skillName}</span>
        <span className="text-sm font-medium text-gray-700">
          {Math.round(skillLevel * 100)}%
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
        <div
          className="bg-green-600 h-full rounded-full transition-all duration-1000 ease-out"
          style={{ width }}
        ></div>
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <div className="px-4 py-12 bg-gray-100 flex flex-col items-center space-y-8">
      {Object.entries(SkillsData).map(([category, skills]) => (
        <div
          key={category}
          className="bg-white shadow-md rounded-xl p-6 w-full max-w-2xl"
        >
          <h2 className="text-xl font-bold mb-4 capitalize text-center">
            {category}
          </h2>
          {skills.map((skillObj, idx) => {
            const skillName = Object.keys(skillObj)[0];
            const skillLevel = skillObj[skillName];
            return (
              <SkillBar
                key={idx}
                skillName={skillName}
                skillLevel={skillLevel}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default Skills;
