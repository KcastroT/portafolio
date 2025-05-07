import React from "react";
import "../styles/intro.css";

const Intro = () => {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center px-4 sm:px-6 lg:px-8"
      id="intro"
    >
      <div className="bg-white bg-opacity-90 rounded-3xl shadow-lg p-6 sm:p-8 w-full max-w-4xl text-center text-gray-800">
        <h1 className="text-5xl font-bold mb-4">
          Kevin Santiago Castro Torres
        </h1>
        <img
          src="/portafolio/assets/images/Kevin.jpeg"
          alt="Kevin Castro"
          className="rounded-full w-48 sm:w-56 md:w-64 h-auto mx-auto mb-4 shadow-lg border-4 border-white transition-transform duration-300 hover:scale-105"
        />
        <p className="text-lg mb-8">
          Full Stack Developer | Computer science student at ITESM CEM
        </p>
        <p>
          Soy Kevin Castro, estudiante de ingeniería en computación en el ITESM
          CEM. Me apasiona la tecnología y el desarrollo de software. He
          trabajado en proyectos de desarrollo web y móvil, utilizando
          tecnologías como React, Node.js, Kotlin y Swift. También tengo
          experiencia e interés en el desarrollo de videojuegos (C#) y la
          ciberseguridad. Siempre estoy buscando aprender y mejorar mis
          habilidades.
        </p>
      </div>
    </div>
  );
};

export default Intro;
