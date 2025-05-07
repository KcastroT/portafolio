import React from "react";

const ProjectsData = [
  {
    title: "Verqor Game",
    description:
      "Developed for Verqor, this game empowers players to cultivate virtual farms and gain insights into financial decision-making. Constructed using Unity and backed by a MySQL database, it seamlessly integrates entertainment with educational challenges, fostering strategic thinking and resource management skills.",
    image: "/portafolio/assets/images/verqor.png",
  },
  {
    title: "Zazil App",
    description:
      "A mobile application developed in Kotlin to support a noble cause, this application serves as an online shopping platform that integrates Stripe for secure payment processing and employs a MySQL database for efficient business sales tracking.",
    image: "/portafolio/assets/images/zazil.png",
  },
  {
    title: "HackMx 6",
    description:
      "In my capacity as the logistics coordinator, I oversaw the successful execution of HackMx 6, an event held at the Tecnológico de Monterrey, CEM. My primary responsibility was to ensure the seamless coordination of all aspects of the event, contributing to its overall success.",
    image: "/portafolio/assets/images/hackmx.png",
  },
  {
    title: "Intern at KTSA: KPMG Technologies Services Americas",
    description:
      "Intern in the cybersecurity and forensic computing field from 2022 to 2023. During this period, I received comprehensive training in incident response, digital forensics, and cybersecurity principles.",
    image: null,
  },
  {
    title: "Project Coordinator at AESC ITESM CEM",
    description:
      "Elected project coordinator of the Association of Computer Systems Students at ITESM Campus Estado de México.",
    image: null,
  },
];

const Projects = () => {
  return (
    <div className="px-4 py-12 bg-gray-300" id="projects">
      <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center">
        {ProjectsData.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg overflow-hidden w-full max-w-lg flex flex-col"
          >
            {project.image ? (
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-contain object-center rounded-t-2xl bg-white"
              />
            ) : (
              <div className="w-full h-64 flex items-center justify-center bg-gray-200 rounded-t-2xl text-gray-700 font-semibold text-lg px-4 text-center"></div>
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
