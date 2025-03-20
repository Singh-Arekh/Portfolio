import React from "react";
import { useDarkMode } from "../context/themeContext";
import { aboutContent } from "../data";
const About = () => {
  const { darkMode } = useDarkMode();

  return (
    <section
      id="about"
      className={`min-h-screen flex items-center justify-center ${
        darkMode ? "bg-gray-800 text-white" : "bg-gray-50 text-gray-800"
      } px-4`}
    >
      <div
        className={`max-w-4xl mx-auto text-center p-6 mt-10 sm:mt-0 ${
          darkMode ? "text-white" : "text-gray-800"
        }`}
      >
        <h2
          className={`text-4xl font-bold mb-4 ${
            darkMode ? "text-white" : "text-gray-800"
          }`}
        >
          {aboutContent.title}
        </h2>
        <p
          className={`text-lg leading-relaxed ${
            darkMode ? "text-gray-300" : "text-gray-600"
          }`}
        >
          {aboutContent.description}
        </p>
        <p
          className={`text-lg leading-relaxed mt-4 ${
            darkMode ? "text-gray-300" : "text-gray-600"
          }`}
        >
          {aboutContent.expertise}
        </p>
        <div className="mt-6 space-y-4 sm:space-y-0 sm:flex sm:space-x-4 sm:justify-center">
          <a
            href="#projects"
            className={`inline-block px-6 py-3 rounded-lg transition ${
              darkMode
                ? "bg-blue-500 text-white hover:bg-blue-600"
                : "bg-blue-500 text-white hover:bg-blue-600"
            }`}
          >
            View My Work
          </a>

          <a
            href={aboutContent.resumeLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-block px-6 py-3 rounded-lg transition ${
              darkMode
                ? "bg-white text-black hover:bg-gray-200"
                : "bg-gray-800 text-white hover:bg-gray-900"
            }`}
          >
            View My Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
