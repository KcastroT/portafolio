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
          Full Stack Developer | Computer Science Student at ITESM CEM
        </p>
        <p>
          I am Kevin Castro, a computer engineering student at ITESM CEM. I am
          passionate about technology and software development. I have worked on
          web and mobile development projects, using technologies such as React,
          Node.js, Kotlin, and Swift. I also have experience and interest in
          video game development (C#) and cybersecurity. I am always looking to
          learn and improve my skills.
        </p>
        <h2 className="text-2xl font-bold mt-8 mb-4">Education</h2>
        <p>
          <strong>Prepa Tecmilenio</strong>- High School -{" "}
          <strong>2018 - 2022</strong>
        </p>
        <p>
          <strong>ITESM CEM</strong> - Computer Science -
          <strong> 2022 - 2026 (Estimated Graduation Date)</strong>
        </p>
        <h2 className="text-2xl font-bold mt-8 mb-4">Languages</h2>
        <p>
          <strong>Spanish</strong> - Native
        </p>
        <p>
          <strong>English</strong> - B2 (Upper Intermediate) -{" "}
          <strong>Cambridge First Certificate</strong>
        </p>
        <p>
          <strong>French</strong> - A2 (Elementary)
        </p>
        <a href="/portafolio/resources/CV.pdf" download>
          <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-full shadow-md transition duration-300">
            Download CV
          </button>
        </a>
      </div>
    </div>
  );
};

export default Intro;
