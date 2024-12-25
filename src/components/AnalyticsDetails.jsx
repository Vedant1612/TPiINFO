// AnalyticsDetails.jsx
import React from 'react';

export default function AnalyticsDetails() {
  return (
    <div className="flex flex-col items-center justify-center p-10 bg-gradient-to-r from-blue-50 via-gray-100 to-white min-h-screen">
      <h2 className="text-5xl font-extrabold text-blue-900 mb-6 text-center leading-tight">
        Master Your Data with Advanced Analytics
      </h2>
      <p className="text-lg text-gray-700 mb-12 text-center max-w-3xl">
        Analytics is key to transforming data into actionable insights. Leverage our platform to make informed decisions that propel your business forward. Here's how we help you unlock the power of data:
      </p>

      <div className="flex flex-wrap justify-center gap-16 mb-16">
        {/* Real-time Insights Section */}
        <div className="w-full sm:w-1/2 lg:w-1/3 bg-white rounded-lg shadow-lg p-8 transform hover:scale-105 transition duration-300 hover:shadow-xl">
          <h3 className="text-2xl font-semibold text-blue-700 mb-4">
            Real-time Insights
          </h3>
          <p className="text-base text-gray-600 mb-4">
            Gain a real-time overview of your business performance. Make timely decisions based on live data that provides immediate value.
          </p>
          <img
            src="Real-time Insights.png"
            alt="Real-time Insights"
            className="w-full rounded-lg shadow-md mb-4 transition-all duration-300 hover:scale-105"
          />
          {/* <button className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300 mt-4">
            Explore Insights
          </button> */}
        </div>

        {/* Detailed Reporting Section */}
        <div className="w-full sm:w-1/2 lg:w-1/3 bg-white rounded-lg shadow-lg p-8 transform hover:scale-105 transition duration-300 hover:shadow-xl">
          <h3 className="text-2xl font-semibold text-blue-700 mb-4">
            Detailed Reporting
          </h3>
          <p className="text-base text-gray-600 mb-4">
            Dive deep into your business data with detailed reports. Our tools provide a clear view of your metrics, helping you understand the story behind the numbers.
          </p>
          <img
            src="Detailed Reporting.png"
            alt="Detailed Reporting"
            className="w-full rounded-lg shadow-md mb-4 transition-all duration-300 hover:scale-105"
          />
          {/* <button className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300 mt-4">
            View Reports
          </button> */}
        </div>
      </div>

      {/* Visualization Tools Section */}
      <div className="w-full lg:w-2/3 bg-white rounded-lg shadow-lg p-12 mb-16 transform hover:scale-105 transition duration-300 hover:shadow-xl">
        <h3 className="text-3xl font-semibold text-blue-700 mb-6">
          Visualization Tools
        </h3>
        <p className="text-base text-gray-600 mb-6">
          Visualize your data through interactive charts and graphs. Our easy-to-use tools help you track trends and performance over time, making data-driven decisions simpler than ever.
        </p>
        <img
          src="Visualization Tools.png"
          alt="Data Visualization"
          className="w-full rounded-lg shadow-md mb-6 transition-all duration-300 hover:scale-105"
        />
        {/* <button className="bg-blue-600 text-white py-3 px-8 rounded-lg hover:bg-blue-700 transition duration-300">
          Explore Visualizations
        </button> */}
      </div>

      {/* Conclusion */}
      <p className="text-lg text-gray-700 mt-12 text-center max-w-3xl">
        Unlock your business’s potential with actionable data. Start making smarter, faster decisions with real-time insights and in-depth analytics.
      </p>
    </div>
  );
}
