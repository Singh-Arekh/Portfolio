import React from "react";
import { useDarkMode } from "../context/themeContext";
import { skills } from "../data";

const Skills = () => {
  const { darkMode } = useDarkMode();

  return (
    <section
      id="skills"
      className={`py-20 ${
        darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
      }`}
    >
      <div className="mb-12">
        <h3
          className={`text-2xl font-semibold mb-6 text-center ${
            darkMode ? "text-white" : "text-gray-800"
          }`}
        >
          Skills
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`flex flex-col items-center ${
                darkMode ? "hover:bg-gray-700" : "hover:bg-gray-200"
              } p-4 rounded-lg transition-all duration-300 ease-in-out`}
            >
              <img
                src={
                  skill.srcLight && skill.srcDark
                    ? darkMode
                      ? skill.srcDark
                      : skill.srcLight
                    : skill.src
                }
                alt={skill.alt}
                className="w-16 mb-4"
                aria-label={skill.label}
              />
              <p
                className={`${
                  darkMode ? "text-gray-300" : "text-gray-600"
                } text-center`}
              >
                {skill.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
