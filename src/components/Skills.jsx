import React from "react";
import { skills } from "../data"; 

const Skills = () => {
  return (
    <>
      <section id="skills" className="py-20">
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
            Skills
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="flex flex-col items-center">
                <img
                  src={skill.src}
                  alt={skill.alt}
                  className="w-16 mb-4"
                  aria-label={skill.label}
                />
                <p className="text-gray-600">{skill.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
