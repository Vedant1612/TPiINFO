// STQADetails.jsx
import React from 'react';

export default function STQADetails() {
  return (
    <div className="flex flex-col items-center p-8 bg-gray-50 min-h-screen">
      <h2 className="text-4xl font-extrabold text-indigo-700 mb-6 text-center">
        Enhance Your Software Quality with Our STQA Solutions
      </h2>

      <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 gap-10 mb-16">
        {/* Software Testing Illustration */}
        <div className="w-full md:w-1/2">
          <img 
            src="/Software Testing Image.png" 
            alt="Software Testing Illustration" 
            className="w-full rounded-lg shadow-xl"
          />
        </div>

        {/* STQA Features */}
        <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
          <p className="text-lg text-gray-700">
            Quality assurance is key to ensuring your software meets the highest standards. With our STQA services, you can:
          </p>
          <ul className="list-disc pl-6 space-y-4 text-lg text-gray-800">
            <li>Ensure your software is bug-free with thorough testing procedures.</li>
            <li>Automate your testing workflows for faster, more reliable results.</li>
            <li>Improve user experience by identifying and fixing issues early in development.</li>
          </ul>
          <p className="text-lg text-gray-700 mt-4">
            Discover how our STQA solutions can help you deliver high-quality software, on time, and with minimal bugs.
          </p>
        </div>
      </div>

      {/* Why Choose Our STQA Services Section */}
      <div className="bg-white p-8 rounded-lg shadow-lg w-full md:w-3/4 lg:w-2/3 mb-16">
        <h3 className="text-2xl font-semibold text-gray-800 mb-6">
          Why Choose Our STQA Services?
        </h3>
        <p className="text-lg text-gray-700 mb-6">
          Our STQA services are designed to help you detect, address, and prevent bugs before they affect your users. With automated and manual testing, we ensure that your software performs optimally and is free from critical issues.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Functional Testing */}
          <div className="flex flex-col items-center space-y-2">
            <img 
              src="Functional Testing.png" 
              alt="Functional Testing" 
              className="w-24 h-24 rounded-lg shadow-md"
            />
            <p className="text-gray-600 text-center">Functional Testing</p>
          </div>

          {/* Automation Testing */}
          <div className="flex flex-col items-center space-y-2">
            <img 
              src="Automation Testing.png" 
              alt="Automation Testing" 
              className="w-24 h-24 rounded-lg shadow-md"
            />
            <p className="text-gray-600 text-center">Automation Testing</p>
          </div>

          {/* Performance Testing */}
          <div className="flex flex-col items-center space-y-2">
            <img 
              src="Performance Testing.png" 
              alt="Performance Testing" 
              className="w-24 h-24 rounded-lg shadow-md"
            />
            <p className="text-gray-600 text-center">Performance Testing</p>
          </div>

          {/* Bug Reporting */}
          <div className="flex flex-col items-center space-y-2">
            <img 
              src="Bug Reporting.png" 
              alt="Bug Reporting" 
              className="w-24 h-24 rounded-lg shadow-md"
            />
            <p className="text-gray-600 text-center">Bug Reporting</p>
          </div>
        </div>
      </div>

      {/* Call to Action (Optional) */}
      {/* Uncomment if needed */}
      {/* <div className="flex justify-center">
        <button className="bg-indigo-600 text-white px-8 py-3 rounded-full hover:bg-indigo-700 transition duration-300">
          Start Testing Now
        </button>
      </div> */}
    </div>
  );
}
