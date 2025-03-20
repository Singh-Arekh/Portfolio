import React from 'react';
import { contactContent } from '../data';
const Contact = () => {
    return (
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">{contactContent.title}</h2>
          <p className="text-gray-600 mb-4">{contactContent.description}</p>
          <div className="flex justify-center space-x-10 text-lg">
            {contactContent.contactMethods.map((method, index) => (
              <div key={index} className="flex items-center">
                {method.image && (
                  <img
                    src={method.image}
                    alt={method.label}
                    className="w-8 h-8"
                  />
                )}
                <span className="ml-2 text-gray-600">
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