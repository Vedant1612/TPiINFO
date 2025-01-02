import React from 'react';
import { FaLaptopCode, FaCogs, FaRocket } from 'react-icons/fa'; // Icons representing product engineering

export default function ProductEngineeringDetails() {
  return (
    <div className="max-w-7xl mx-auto p-12 bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 text-gray-800 rounded-3xl shadow-xl">
      <h2 className="text-6xl font-extrabold text-center mb-10">
        Accelerate Your Product Engineering
      </h2>
      <p className="text-xl text-center mb-16">
        Drive innovation and streamline your product development process with our cutting-edge engineering tools and solutions. Here's how we help you build and scale your products:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
        {/* Product Design and Development */}
        <div className="bg-white text-gray-800 p-8 rounded-xl shadow-2xl transform hover:scale-100 transition duration-300">
          <div className="flex justify-center mb-6">
            <FaLaptopCode className="text-5xl text-indigo-600" />
          </div>
          <h3 className="text-3xl font-semibold mb-4 text-indigo-600">Product Design & Development</h3>
          <p className="text-lg mb-6">
            Design and develop products that meet customer needs and exceed expectations. Our engineering tools support the entire product lifecycle, from concept to completion.
          </p>
          <img
            src="Product Design & Development.png"
            alt="Product Design & Development"
            className="w-full h-60 object-cover rounded-lg shadow-lg transition-transform transform hover:scale-105"
          />
        </div>

        {/* Scalable Infrastructure */}
        <div className="bg-white text-gray-800 p-8 rounded-xl shadow-2xl transform hover:scale-100 transition duration-300">
          <div className="flex justify-center mb-6">
            <FaCogs className="text-5xl text-indigo-600" />
          </div>
          <h3 className="text-3xl font-semibold mb-4 text-indigo-600">Scalable Infrastructure</h3>
          <p className="text-lg mb-6">
            Build robust, scalable infrastructure that grows with your business. Our platform ensures your products perform seamlessly at scale, no matter the user load.
          </p>
          <img
            src="Scalable Infrastructure.png"
            alt="Scalable Infrastructure"
            className="w-full h-60 object-cover rounded-lg shadow-lg transition-transform transform hover:scale-105"
          />
        </div>

        {/* Product Launch and Growth */}
        <div className="bg-white text-gray-800 p-8 rounded-xl shadow-2xl transform hover:scale-100 transition duration-300">
          <div className="flex justify-center mb-6">
            <FaRocket className="text-5xl text-indigo-600" />
          </div>
          <h3 className="text-3xl font-semibold mb-4 text-indigo-600">Product Launch & Growth</h3>
          <p className="text-lg mb-6">
            Successfully launch your product and drive continuous growth. Our tools help you monitor performance, iterate quickly, and scale your product to new heights.
          </p>
          <img
            src="Product Launch & Growth.png"
            alt="Product Launch & Growth"
            className="w-full h-60 object-cover rounded-lg shadow-lg transition-transform transform hover:scale-105"
          />
        </div>
      </div>

      <p className="text-xl text-center mt-16">
        Ready to bring your product to life and accelerate its growth? Start building the next big thing today with our powerful product engineering solutions.
      </p>
    </div>
  );
}
