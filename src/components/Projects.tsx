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
  },{
  title: "Cybersecurity Concentration - OT Protection Project",
  description:
    "Participated in a cybersecurity concentration at ITESM CEM, where the main project focused on protecting Operational Technology (OT) systems from IT threats. Additionally, worked on penetration testing, security monitoring, and implementing best practices for IT-OT convergence to enhance overall cybersecurity posture.",
  image: null,
  github: null, 
}
];

const Projects = () => {
  return (
    <div className="px-4 py-14 bg-gradient-to-b from-blue-50 via-gray-100 to-green-50" id="projects">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 tracking-tight">
        Projects / Experience
      </h2>
      <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-stretch">
        {ProjectsData.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg overflow-hidden w-full min-h-[420px] flex flex-col transition-transform duration-300 hover:scale-[1.025] hover:shadow-2xl group"
          >
            {project.image ? (
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-52 object-cover object-center rounded-t-2xl bg-gray-200 transition duration-300 group-hover:brightness-95"
              />
            ) : (
              <div className="w-full h-52 flex items-center justify-center bg-gray-100 rounded-t-2xl text-gray-700 font-semibold text-lg px-4 text-center"></div>
            )}
            <div className="p-6 flex-1 flex flex-col justify-start">
              <h3 className="text-xl font-semibold mb-2 text-blue-700">{project.title}</h3>
              <p className="text-gray-600">{project.description}</p>
            </div>
            <div className="p-4 bg-gray-50 flex justify-between items-center">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gradient-to-r from-blue-500 to-green-400 text-white font-semibold px-5 py-2 rounded-full shadow hover:from-blue-600 hover:to-green-500 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
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
