
import "../styles/intro.css";

const Intro = () => {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center p-4 sm:px-6 lg:px-8"
      id="intro"
    >
      <div className="w-full max-w-4xl">
        <div
          className="bg-gradient-to-br from-gray-50 via-white to-blue-50 bg-opacity-90 rounded-3xl shadow-xl p-8 sm:p-12 text-center text-gray-800 transition-transform duration-300 hover:scale-[1.025] hover:shadow-2xl"
        >
          <h1 className="text-5xl font-bold mb-4 tracking-tight text-gray-900">
            Kevin Santiago Castro Torres
          </h1>
          <img
            src="/portafolio/assets/images/Kevin.jpeg"
            alt="Kevin Castro"
            className="rounded-full aspect-square w-60 sm:w-72 md:w-80 mx-auto mb-6 shadow-xl border-4 border-white transition-transform duration-300 hover:scale-105 object-cover"
          />
          <p className="text-lg mb-6 text-gray-700">
            <span className="font-semibold text-blue-700">Full Stack Developer</span> | Computer Science Student at ITESM CEM
          </p>
          <p className="mb-6 text-gray-600">
            I am Kevin Castro, a computer engineering student at ITESM CEM. I am passionate about technology and software development. I have worked on web and mobile development projects, using technologies such as <span className="font-medium text-blue-600">React</span>, <span className="font-medium text-blue-600">Node.js</span>, <span className="font-medium text-blue-600">Kotlin</span>, and <span className="font-medium text-blue-600">Swift</span>. I also have experience and interest in video game development (<span className="font-medium text-green-600">C#</span>) and cybersecurity. I am always looking to learn and improve my skills.
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-2 text-gray-900">Education</h2>
          <div className="text-gray-700 mb-4">
            <p>
              <strong>Prepa Tecmilenio</strong> - High School - <strong>2018 - 2022</strong>
            </p>
            <p>
              <strong>ITESM CEM</strong> - Computer Science - <strong>2022 - 2026 (Estimated Graduation Date)</strong>
            </p>
          </div>
          <h2 className="text-2xl font-bold mt-8 mb-2 text-gray-900">Languages</h2>
          <div className="text-gray-700 mb-2">
            <p>
              <strong>Spanish</strong> - Native
            </p>
            <p>
              <strong>English</strong> - B2 (Upper Intermediate) - <strong>Cambridge First Certificate</strong>
            </p>
          </div>
          <a href="/portafolio/resources/CV_Kevin_Castro.pdf" download>
            <button className="mt-8 bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600 text-white font-semibold py-2 px-8 rounded-full shadow-lg transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2">
              Download CV
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Intro;
