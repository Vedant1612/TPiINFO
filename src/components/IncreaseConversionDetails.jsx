import React from 'react';
import { FaUsers, FaChartLine, FaBullhorn } from 'react-icons/fa'; // Adding icons for visual appeal

export default function IncreaseConversionDetails() {
  return (
    <div className="max-w-7xl mx-auto p-12 bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 text-gray-800 rounded-3xl shadow-xl">
      <h2 className="text-6xl font-extrabold text-center mb-10">
        Boost Your Conversion Rates
      </h2>
      <p className="text-xl text-center mb-16">
        Unlock the full potential of your business with our powerful tools designed to convert leads into loyal customers. Here's how we can help you succeed:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
        {/* Customer Engagement */}
        <div className="bg-white text-gray-800 p-8 rounded-xl shadow-2xl transform hover:scale-105 transition duration-300">
          <div className="flex justify-center mb-6">
            <FaUsers className="text-5xl text-indigo-600" />
          </div>
          <h3 className="text-3xl font-semibold mb-4 text-indigo-600">Customer Engagement</h3>
          <p className="text-lg mb-6">
            Engage with your customers through personalized communication. Leverage insights to create tailored experiences that build trust and long-term relationships.
          </p>
          <img
            src="Customer Engagement.png"
            alt="Customer Engagement"
            className="w-full h-60 object-cover rounded-lg shadow-lg transition-transform transform hover:scale-110"
          />
        </div>

        {/* Data-Driven Decisions */}
        <div className="bg-white text-gray-800 p-8 rounded-xl shadow-2xl transform hover:scale-105 transition duration-300">
          <div className="flex justify-center mb-6">
            <FaChartLine className="text-5xl text-indigo-600" />
          </div>
          <h3 className="text-3xl font-semibold mb-4 text-indigo-600">Data-Driven Decisions</h3>
          <p className="text-lg mb-6">
            Make smarter decisions with real-time data insights. Our platform helps you track performance metrics, enabling every decision to be backed by actionable data.
          </p>
          <img
            src="Data-Driven Decisions.png"
            alt="Data Analytics"
            className="w-full h-60 object-cover rounded-lg shadow-lg transition-transform transform hover:scale-110"
          />
        </div>

        {/* Targeted Campaigns */}
        <div className="bg-white text-gray-800 p-8 rounded-xl shadow-2xl transform hover:scale-105 transition duration-300">
          <div className="flex justify-center mb-6">
            <FaBullhorn className="text-5xl text-indigo-600" />
          </div>
          <h3 className="text-3xl font-semibold mb-4 text-indigo-600">Targeted Campaigns</h3>
          <p className="text-lg mb-6">
            Deliver the right message to the right people. Our advanced targeting tools help tailor campaigns based on audience preferences, maximizing engagement and conversions.
          </p>
          <img
            src="Targeted Campaigns.png"
            alt="Targeted Campaigns"
            className="w-full h-60 object-cover rounded-lg shadow-lg transition-transform transform hover:scale-110"
          />
        </div>
      </div>

      <p className="text-xl text-center mt-16">
        Ready to take your business to the next level? Start making smarter, data-driven decisions today and unlock your full potential!
      </p>
    </div>
  );
}
