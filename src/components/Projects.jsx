import React from "react";
import { projects } from "../data";

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
          My Projects
        </h2>

        {/*Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition-all duration-300 ease-in-out"
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
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    {project.title}
                  </h3>
                </a>

                {/* Description */}
                <p className="text-gray-600 mb-4">{project.description}</p>

                {/* Details */}
                <div className="space-y-2">
                  {project.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600">
                      <span className="font-semibold text-blue-500">•</span>{" "}
                      {detail}
                    </p>
                  ))}
                </div>

                {/* Tech Used */}
                <div className="mt-4 text-center">
                  <h4 className="text-lg font-medium text-gray-700 mb-2">
                    Tech Used
                  </h4>
                  <div className="flex flex-wrap gap-4 justify-center text-gray-600">
                    {project.techUsed.map((tech, idx) => (
                      <span
                        key={idx}
                        className="bg-gray-200 px-4 py-1 rounded-full text-sm"
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
                    className="inline-block text-blue-500 hover:underline cursor-pointer"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-blue-500 hover:underline cursor-pointer"
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
