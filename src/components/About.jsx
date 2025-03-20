import React from 'react';
import { aboutContent } from '../data'; // import content

const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-4xl mx-auto text-center p-6 mt-10 sm:mt-0">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">{aboutContent.title}</h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          {aboutContent.description}
        </p>
        <p className="text-gray-600 text-lg leading-relaxed mt-4">
          {aboutContent.expertise}
        </p>
        <div className="mt-6 space-y-4 sm:space-y-0 sm:flex sm:space-x-4 sm:justify-center">
          <a
            href="#projects"
            className="inline-block px-6 py-3 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition"
          >
            View My Work
          </a>

          <a
            href={aboutContent.resumeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 text-white bg-gray-800 rounded-lg hover:bg-gray-900 transition"
          >
            View My Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
