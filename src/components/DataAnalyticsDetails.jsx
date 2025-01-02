import React from 'react';

export default function DataAnalyticsDetails() {
  return (
    <div className="flex flex-col items-center justify-center p-10 bg-gradient-to-br from-blue-50 via-gray-100 to-gray-200 min-h-screen">
      {/* Header Section */}
      <h2 className="text-6xl font-bold text-blue-900 mb-8 text-center leading-tight tracking-tight">
        Master Your Data with Advanced Analytics
      </h2>
      <p className="text-lg text-gray-700 mb-12 text-center max-w-4xl">
        Data Analytics is crucial for transforming raw data into meaningful insights. Leverage our platform to make informed, data-driven decisions that accelerate your business growth. Here's how we help you unlock the power of analytics:
      </p>

      {/* Features Section */}
      <div className="flex flex-wrap justify-center gap-12 mb-20">
        {/* Data Collection */}
        <div className="w-full sm:w-1/2 lg:w-1/4 bg-white rounded-2xl shadow-md hover:shadow-2xl p-8 transform hover:-translate-y-2 transition duration-300">
          <h3 className="text-2xl font-semibold text-blue-700 mb-4">
            Data Collection
          </h3>
          <p className="text-base text-gray-600 mb-4">
            Collect data from multiple sources seamlessly. Our platform ensures that all your data is gathered in real-time, ready for analysis.
          </p>
          <img
            src="Data Collection.png"
            alt="Data Collection"
            className="w-full h-48 object-cover rounded-lg shadow-md mb-4 transition-all duration-300 hover:scale-105"
          />
        </div>

        {/* Data Analysis */}
        <div className="w-full sm:w-1/2 lg:w-1/4 bg-white rounded-2xl shadow-md hover:shadow-2xl p-8 transform hover:-translate-y-2 transition duration-300">
          <h3 className="text-2xl font-semibold text-blue-700 mb-4">
            Data Analysis
          </h3>
          <p className="text-base text-gray-600 mb-4">
            Dive deep into your datasets. Our tools help you uncover patterns, trends, and correlations to make better decisions.
          </p>
          <img
            src="Data Analysis.png"
            alt="Data Analysis"
            className="w-full h-48 object-cover rounded-lg shadow-md mb-4 transition-all duration-300 hover:scale-105"
          />
        </div>

        {/* Predictive Analytics */}
        <div className="w-full sm:w-1/2 lg:w-1/4 bg-white rounded-2xl shadow-md hover:shadow-2xl p-8 transform hover:-translate-y-2 transition duration-300">
          <h3 className="text-2xl font-semibold text-blue-700 mb-4">
            Predictive Analytics
          </h3>
          <p className="text-base text-gray-600 mb-4">
            Use predictive analytics to forecast trends and future outcomes based on historical data. Make proactive decisions and stay ahead of the curve.
          </p>
          <img
            src="Predictive Analytics.png"
            alt="Predictive Analytics"
            className="w-full h-48 object-cover rounded-lg shadow-md mb-4 transition-all duration-300 hover:scale-105"
          />
        </div>
      </div>

      {/* Data Visualization Section */}
      <div className="w-full lg:w-3/4 bg-white rounded-2xl shadow-md hover:shadow-2xl p-12 transform hover:-translate-y-2 transition duration-300 mb-16">
        <h3 className="text-3xl font-semibold text-blue-700 mb-6 text-center">
          Data Visualization
        </h3>
        <p className="text-base text-gray-600 mb-6 text-center">
          Visualize your data through interactive charts and graphs. Track trends, monitor key metrics, and gain insights that drive your decisions.
        </p>
        <img
          src="Data Visualization.png"
          alt="Data Visualization"
          className="w-full rounded-lg shadow-md mb-6 transition-all duration-300 hover:scale-105"
        />
      </div>

      {/* Conclusion */}
      <p className="text-lg text-gray-700 text-center max-w-3xl leading-relaxed">
        Unlock the true potential of your business with data analytics. Turn your raw data into actionable insights, streamline your decision-making, and stay ahead in today's data-driven world.
      </p>
    </div>
  );
}
