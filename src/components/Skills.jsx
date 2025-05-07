import { useEffect, useState } from "react";

const SkillsData = {
  frontend: [
    {
      "HTML/CSS": 0.8,
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
      MongoDB: 0.6,
    },
    {
      MySQL: 0.7,
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
      "C++": 0.6,
    },
    {
      Python: 0.8,
    },
    {
      Java: 0.6,
    },
    {
      "C#": 0.5,
    },
    {
      SQL: 0.7,
    },
  ],
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
              <div key={idx} className="mb-4">
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700">
                    {skillName}
                  </span>
                  <span className="text-sm font-medium text-gray-700">
                    {Math.round(skillLevel * 100)}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                  {(() => {
                    const [width, setWidth] = useState("0%");
                    useEffect(() => {
                      const timeout = setTimeout(() => {
                        setWidth(`${skillLevel * 100}%`);
                      }, 100);
                      return () => clearTimeout(timeout);
                    }, []);
                    return (
                      <div
                        className="bg-green-600 h-full rounded-full transition-all duration-1000 ease-out"
                        style={{ width }}
                      ></div>
                    );
                  })()}
                </div>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default Skills;
