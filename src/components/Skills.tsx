import type { SkillsDataType } from "../types/SkillsType";

const SkillsData: SkillsDataType = {
  frontend: [
    { "HTML/CSS": "Advanced" },
    { JavaScript: "Advanced" },
    { TypeScript: "Advanced" },
    { React: "Advanced" },
    { TailwindCSS: "Advanced" },
  ],
  backend: [
    { NodeJS: "Intermediate" },
    { Express: "Intermediate" },
    { "Python Frameworks": "Intermediate" },
  ],
  languages: [
    { "C/C++": "Intermediate" },
    { Python: "Advanced" },
    { "C#": "Beginner" },
    { Clojure: "Beginner" },
    { Java: "Intermediate" },
  ],
  other: [
    { Git: "Advanced" },
    { Agile: "Intermediate" },
    { Postman: "Intermediate" },
    { Linux: "Advanced" },
    { Docker: "Intermediate" },
    { "SQL Databases": "Intermediate" },
  ],
};

interface SkillBarProps {
  skillName: string;
  skillLevel: "Beginner" | "Intermediate" | "Advanced" | "Expert";
}

const levelSettings = {
  Beginner: { width: "25%", gradient: "from-red-400 to-yellow-400" },
  Intermediate: { width: "50%", gradient: "from-yellow-400 to-green-400" },
  Advanced: { width: "75%", gradient: "from-green-400 to-blue-500" },
  Expert: { width: "100%", gradient: "from-blue-600 to-purple-600" },
};

const SkillBar = ({ skillName, skillLevel }: SkillBarProps) => {
  const { width, gradient } = levelSettings[skillLevel];
  return (
    <div className="mb-3">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-semibold text-gray-800">{skillName}</span>
        <span className="text-xs font-medium text-gray-500">{skillLevel}</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
        <div
          className={`h-full rounded-full transition-all duration-1000 ease-out bg-gradient-to-r ${gradient}`}
          style={{ width }}
        ></div>
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <div className="px-4 py-14 bg-gradient-to-b from-blue-50 via-gray-100 to-green-50 flex flex-col items-center" id="skills">
      <h2 className="text-3xl font-bold mb-10 text-gray-900 text-center tracking-tight">Skills</h2>
      <div className="w-full flex flex-col md:flex-row md:justify-center gap-10">
        {Object.entries(SkillsData).map(([category, skills]) => (
          <div
            key={category}
            className="bg-white shadow-lg rounded-2xl p-6 md:p-7 w-full max-w-xs flex-1 mb-6 md:mb-0 transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <h2 className="text-lg font-bold mb-6 capitalize text-center text-blue-700 tracking-wide">
              {category}
            </h2>
            <div className="space-y-4">
              {skills.map((skillObj, idx) => {
                const skillName = Object.keys(skillObj)[0] as string;
                const skillLevel = skillObj[skillName] as "Beginner" | "Intermediate" | "Advanced" | "Expert";
                return (
                  <SkillBar
                    key={idx}
                    skillName={skillName}
                    skillLevel={skillLevel}
                  />
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;