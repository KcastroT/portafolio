
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";
import { useState } from "react";

const Contact = () => {
  const links = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/kevin-santiago-castro-torres-0b08b135a",
      icon: <FaLinkedin size={28} />,
      color: "bg-blue-600 hover:bg-blue-700",
    },
    {
      name: "GitHub",
      url: "https://github.com/KcastroT",
      icon: <FaGithub size={28} />,
      color: "bg-gray-800 hover:bg-gray-900",
    },
    {
      name: "Email",
      url: "mailto:kecato17@gmail.com",
      icon: <FaEnvelope size={28} />,
      color: "bg-green-500 hover:bg-green-600",
    },
    {
      name: "Phone",
      url: "tel:+525611923426",
      icon: <FaPhone size={28} />,
      color: "bg-blue-400 hover:bg-blue-500",
    },
  ];

  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="flex justify-center items-center py-14 bg-gradient-to-b from-green-50 via-gray-100 to-blue-50" id="contact">
      <div className="flex gap-8">
        {links.map((link, idx) => (
          <div className="relative group" key={idx}>
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-center rounded-full shadow-lg text-white w-14 h-14 transition-all duration-200 ${link.color} focus:outline-none focus:ring-2 focus:ring-blue-400`}
              onMouseEnter={() => setHovered(idx)}
              onMouseLeave={() => setHovered(null)}
              aria-label={link.name}
            >
              {link.icon}
            </a>
            <span
              className={`absolute left-1/2 -translate-x-1/2 -top-8 px-3 py-1 rounded bg-gray-800 text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none select-none z-10 ${
                hovered === idx ? "opacity-100" : ""
              }`}
            >
              {link.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
