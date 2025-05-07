import React from "react";

const ProjectsData = [
  {
    title: "Verqor Game",
    description: "Un juego de cartas desarrollado en Unity.",
    image: "/portafolio/assets/images/verqor.png",
  },
  {
    title: "Zazil App",
    description: "Una app de Android desarrollada en Kotlin.",
    image: "/portafolio/assets/images/zazil.png",
  },
  {
    title: "HackMx 6",
    description: "Coordinador de logística en HackMx 6.",
    image: "/portafolio/assets/images/hackmx.png",
  },
  {
    title: "Becario en KTSA: KPMG Technologies Services Americas",
    description:
      "Becario en el área de ciberseguridad y cómputo forense. Durante los años 2022 y 2023.",
    image: null,
  },
  {
    title: "AESC CEM",
    description:
      "Elegido coordinador de proyectos de la Asociación de Estudiantes de Sistemas Computacionales del ITESM CEM.",
    image: null,
  },
];

const Projects = () => {
  return (
    <div className="px-4 py-12 bg-gray-50" id="projects">
      <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center">
        {ProjectsData.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg overflow-hidden w-full max-w-lg h-[400px] flex flex-col"
          >
            {project.image ? (
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-contain object-center rounded-t-2xl bg-white"
              />
            ) : (
              <div className="w-full h-20 flex items-center justify-center bg-gray-200 rounded-t-2xl text-gray-700 font-semibold text-lg px-4 text-center"></div>
            )}
            <div className="p-6 flex-1 flex flex-col justify-start">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
