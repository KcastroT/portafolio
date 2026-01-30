export type SkillLevel = "Beginner" | "Intermediate" | "Advanced" | "Expert";

export type Skill = {
  [skillName: string]: SkillLevel;
};

export type SkillsDataType = {
  frontend: Skill[];
  backend: Skill[];
  languages: Skill[];
  other: Skill[];
};