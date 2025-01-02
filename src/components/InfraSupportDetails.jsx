
import React from 'react';

export default function InfraSupportDetails() {
  return (
    <div className="flex flex-col items-center justify-center p-10 bg-gradient-to-r from-blue-50 via-gray-100 to-white min-h-screen">
      <h2 className="text-5xl font-extrabold text-blue-900 mb-6 text-center leading-tight">
        Robust Infrastructure Support for Your Business
      </h2>
      <p className="text-lg text-gray-700 mb-12 text-center max-w-3xl">
        Ensure the stability, security, and scalability of your IT infrastructure with our comprehensive Infra Support services. Here’s how we help your business:
      </p>

      <div className="flex flex-wrap justify-center gap-16 mb-16">
        {/* Round-the-clock Support Section */}
        <div className="w-full sm:w-1/2 lg:w-1/3 bg-white rounded-lg shadow-lg p-8 transform hover:scale-100 transition duration-300 hover:shadow-xl">
          <h3 className="text-2xl font-semibold text-blue-700 mb-4">
            Round-the-clock Support
          </h3>
          <p className="text-base text-gray-600 mb-4">
            Our support team is available 24/7 to resolve any IT issues that might arise, ensuring minimal downtime and business continuity.
          </p>
          <img
            src="Infra-Support-1.png"
            alt="24/7 Support"
            className="w-full rounded-lg shadow-md mb-4 transition-all duration-300 hover:scale-105"
          />
        </div>

        {/* Proactive Maintenance Section */}
        <div className="w-full sm:w-1/2 lg:w-1/3 bg-white rounded-lg shadow-lg p-8 transform hover:scale-100 transition duration-300 hover:shadow-xl">
          <h3 className="text-2xl font-semibold text-blue-700 mb-4">
            Proactive Maintenance
          </h3>
          <p className="text-base text-gray-600 mb-4">
            Stay ahead of potential issues with our proactive maintenance services, reducing the risk of downtime and enhancing system performance.
          </p>
          <img
            src="Infra-Support-2.png"
            alt="Proactive Maintenance"
            className="w-full rounded-lg shadow-md mb-4 transition-all duration-300 hover:scale-105"
          />
        </div>
      </div>

      {/* Security and Backup Section */}
      <div className="w-full lg:w-2/3 bg-white rounded-lg shadow-lg p-12 mb-16 transform hover:scale-100 transition duration-300 hover:shadow-xl">
        <h3 className="text-3xl font-semibold text-blue-700 mb-6">
          Enhanced Security & Backup Solutions
        </h3>
        <p className="text-base text-gray-600 mb-6">
          We ensure your IT infrastructure is secure from threats and has reliable backup solutions in place, so you never lose critical data.
        </p>
        <img
          src="Infra-Support-3.png"
          alt="Security & Backup"
          className="w-full rounded-lg shadow-md transition-all duration-300 hover:scale-105"
        />
      </div>

      {/* Conclusion */}
      <p className="text-lg text-gray-700 text-center max-w-3xl">
        With our Infra Support services, your IT systems will run smoothly, securely, and with minimal interruptions. Focus on growing your business while we ensure your infrastructure is always in top shape.
      </p>
    </div>
  );
}
