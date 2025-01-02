import React, { useRef, useState } from 'react';
import useOnClickOutside from './useOnClickOutside';

const navData = [
  { name: 'Home', sectionId: 'header' },
  { name: 'Work', sectionId: 'boost' },
  { name: 'Testimonials', sectionId: 'testimonials' },
  { name: 'Contact', sectionId: 'contact' },
];

export default function NavComponent() {
  const ref = useRef(null);
  const [isModalOpen, setModalOpen] = useState(false);

  useOnClickOutside(ref, () => setModalOpen(false));

  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setModalOpen(false); // Close the mobile menu after navigation
    }
  };

  return (
    <div className="sticky top-0 z-50 w-full py-3 text-xl font-bold drop-shadow-xl flex-none transition-colors duration-500 bg-transparent backdrop-blur-md">
      <div className="px-6 flex justify-between items-center">
        {/* Logo */}
        <div>
          <h1 className="font-jostBold text-4xl text-[#3E3FD8]">TPiINFO</h1>
        </div>

        {/* Desktop Navigation */}
        <div className="sm:flex justify-between items-center hidden space-x-6">
          {navData.map((n, index) => (
            <button
              key={index}
              onClick={() => handleScroll(n.sectionId)}
              className="text-xl text-gray-700 hover:text-[#3E3FD8] transition-colors duration-300 focus:outline-none"
            >
              {n.name}
            </button>
          ))}
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="sm:hidden">
          <button
            onClick={() => setModalOpen(!isModalOpen)}
            className="flex flex-col items-center justify-between w-8 h-6"
            aria-label="Toggle Menu"
          >
            <div className="w-full h-0.5 bg-gray-800 transition-all duration-300" />
            <div className="w-full h-0.5 bg-gray-800 transition-all duration-300" />
            <div className="w-full h-0.5 bg-gray-800 transition-all duration-300" />
          </button>
        </div>

        {/* Stylish Motivational Text */}
        <div className="text-right hidden sm:block">
          <span
            className="block text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient-text font-cursive"
          >
            Empowering Solutions
          </span>
          <span className="block text-lg font-semibold text-gray-500 italic">
            Building the Future
          </span>
        </div>
      </div>

      {/* Mobile Menu */}
      {isModalOpen && (
        <div
          ref={ref}
          className="absolute top-0 left-0 right-0 bg-white shadow-lg rounded-lg p-6 sm:hidden transition-all duration-300 transform"
        >
          <div className="flex justify-between items-center mb-4">
            <h1 className="font-jostBold text-4xl text-[#3E3FD8]">TPiINFO</h1>
            <button
              onClick={() => setModalOpen(false)}
              className="text-gray-800 hover:text-[#3E3FD8]"
              aria-label="Close Menu"
            >
              <span className="font-bold text-2xl">&times;</span>
            </button>
          </div>
          {navData.map((n, index) => (
            <button
              key={index}
              onClick={() => handleScroll(n.sectionId)}
              className="block text-xl font-medium text-gray-700 hover:text-[#3E3FD8] py-3 focus:outline-none"
            >
              {n.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
