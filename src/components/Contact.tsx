import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";

const Contact = () => {
  const links = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/kevin-castro-0b08b135a",
      icon: <FaLinkedin size={32} />,
    },
    {
      name: "GitHub",
      url: "https://github.com/KcastroT",
      icon: <FaGithub size={32} />,
    },
    {
      name: "Email",
      url: "mailto:kecato@icloud.com",
      icon: <FaEnvelope size={32} />,
    },
    {
      name: "Phone",
      url: "tel:+525611923426",
      icon: <FaPhone size={32} />,
    },
  ];

  return (
    <div className="flex justify-center items-center py-12 bg-gray-100">
      <div className="flex gap-6">
        {links.map((link, idx) => (
          <a
            key={idx}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-green-700 transition-colors"
          >
            {link.icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Contact;
