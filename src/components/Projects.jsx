import React from "react";
import { useDarkMode } from "../context/themeContext";
import { projects } from "../data";

const Projects = () => {
  const { darkMode } = useDarkMode();

  return (
    <section
      id="projects"
      className={`py-20 ${
        darkMode ? "bg-gray-800 text-white border-t-4 border-gray-700" : "bg-white text-gray-800"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2
          className={`text-3xl font-bold mb-12 text-center ${
            darkMode ? "text-white" : "text-gray-800"
          }`}
        >
          My Projects
        </h2>

        {/* Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 ">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`${
                darkMode
                  ? "bg-gray-800 text-white shadow-lg hover:shadow-2xl border-1 border-gray-700"
                  : "bg-white text-gray-800 shadow-lg hover:shadow-2xl"
              } rounded-xl p-6 transition-all duration-300 ease-in-out`}
            >
              {/* Project Content */}
              <div className="flex flex-col items-center justify-between">
                {/* Title */}
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer text-center"
                >
                  <h3
                    className={`text-2xl font-semibold mb-4 ${
                      darkMode ? "text-white" : "text-gray-800"
                    }`}
                  >
                    {project.title}
                  </h3>
                </a>

                {/* Description */}
                <p
                  className={`${
                    darkMode ? "text-gray-300" : "text-gray-600"
                  } mb-4`}
                >
                  {project.description}
                </p>

                {/* Details */}
                <div className="space-y-2">
                  {project.details.map((detail, idx) => (
                    <p
                      key={idx}
                      className={`${
                        darkMode ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      <span className="font-semibold text-blue-500">•</span>{" "}
                      {detail}
                    </p>
                  ))}
                </div>

                {/* Tech Used */}
                <div className="mt-4 text-center">
                  <h4
                    className={`text-lg font-medium mb-2 ${
                      darkMode ? "text-gray-200" : "text-gray-700"
                    }`}
                  >
                    Tech Used
                  </h4>
                  <div className="flex flex-wrap gap-4 justify-center">
                    {project.techUsed.map((tech, idx) => (
                      <span
                        key={idx}
                        className={`${
                          darkMode ? "bg-gray-700 text-white" : "bg-gray-200"
                        } px-4 py-1 rounded-full text-sm`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* GitHub and Live Demo */}
                <div className="mt-6 flex gap-6 justify-center">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-block text-blue-500 hover:underline ${
                      darkMode ? "hover:text-white" : "hover:text-blue-600"
                    }`}
                  >
                    GitHub
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-block text-blue-500 hover:underline ${
                      darkMode ? "hover:text-white" : "hover:text-blue-600"
                    }`}
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
