import React from 'react';
import { useDarkMode } from '../context/themeContext';
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';


const Header = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <header
      className={`p-4 ${
        darkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-black'
      } sticky top-0 z-50 shadow-md`}
    >
      <nav className="container mx-auto flex justify-between items-center">
        <a href="#/">
          <h1 className="text-xl font-bold">My Portfolio</h1>
        </a>
        <div className="hidden lg:block md:block space-x-4">
          <a href="#about" className="hover:text-gray-500">
            About
          </a>
          <a href="#projects" className="hover:text-gray-500">
            Projects
          </a>
          <a href="#skills" className="hover:text-gray-500">
            Skills
          </a>
          <a href="#contact" className="hover:text-gray-500">
            Contact
          </a>
        </div>

        {/* Dark Mode Toggle Button */}
        <button
      onClick={toggleDarkMode}
      className={`p-2 rounded-md flex items-center justify-center ${
        darkMode ? 'bg-gray-700 text-white' : 'bg-gray-200 text-black'
      }`}
    >
      {darkMode ? (
        <SunIcon className="w-6 h-6" />
      ) : (
        <MoonIcon className="w-6 h-6" />
      )}
    </button>
      </nav>
    </header>
  );
};

export default Header;
