import React from 'react';
import { useDarkMode } from "../context/themeContext";
import { contactContent } from '../data';

const Contact = () => {
  const { darkMode } = useDarkMode();

  return (
    <section
      id="contact"
      className={`py-20 px-4 sm:px-6 ${
        darkMode ? 'bg-gray-800 text-white' : 'bg-gray-50 text-gray-800'
      } border-t-4 ${
        darkMode ? 'border-gray-700' : 'border-gray-300'
      } shadow-lg`}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2
          className={`text-3xl font-bold mb-6 ${
            darkMode ? 'text-white' : 'text-gray-800'
          }`}
        >
          {contactContent.title}
        </h2>
        
        <div className="flex flex-col sm:flex-row justify-center space-y-6 sm:space-y-0 sm:space-x-10 text-lg">
          {contactContent.contactMethods.map((method, index) => (
            <div
              key={index}
              className={`flex items-center justify-center sm:justify-start ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}
            >
              {method.image && (
                <img
                  src={method.image}
                  alt={method.label}
                  className="w-8 h-8"
                />
              )}
              <span className="ml-2">
                {method.link ? (
                  <a
                    href={method.link}
                    target={method.target}
                    rel={method.rel}
                    className="text-blue-500 hover:underline"
                  >
                    {method.label}
                  </a>
                ) : (
                  method.label
                )}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;