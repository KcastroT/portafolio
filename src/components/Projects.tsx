const ProjectsData = [
  {
    title: "Verqor Game",
    description:
      "Developed for Verqor, this game empowers players to cultivate virtual farms and gain insights into financial decision-making. Constructed using Unity and backed by a MySQL database, it seamlessly integrates entertainment with educational challenges, fostering strategic thinking and resource management skills.",
    image: "/portafolio/assets/images/verqor.png",
    github: "https://github.com/KcastroT/Granja_V2",
  },
  {
    title: "Zazil App",
    description:
      "A mobile application developed in Kotlin to support a noble cause, this application serves as an online shopping platform that integrates Stripe for secure payment processing and employs a MySQL database for efficient business sales tracking.",
    image: "/portafolio/assets/images/zazil.png",
    github: "https://github.com/rn0x7f/B5",
  },
  {
    title: "Traffic Simulation System",
    description:
      "A traffic simulation system designed to enhance the efficiency of traffic lights and reduce congestion. This project was developed using Python and Unity, showcasing my skills in programming and problem-solving.",
    image: "/portafolio/assets/images/traffic.png",
    github: "https://github.com/KcastroT/Bloque-de-Agentes",
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
      <h2 className="text-3xl font-bold text-center mb-10">
        Projects / Experience
      </h2>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-stretch">
        {ProjectsData.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg overflow-hidden w-full max-w-lg min-h-[400px] h-full flex flex-col"
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
            <div className="p-4 bg-gray-100 flex justify-between items-center">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700 transition duration-200"
                >
                  View on GitHub
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
