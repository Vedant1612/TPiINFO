import React, { useState } from 'react';
import ProductEngineeringDetails from './ProductEngineeringDetails';
import SoftwareTestingDetails from './SoftwareTestingDetails';
import InfraSupportDetails from './InfraSupportDetails';
import DataAnalyticsDetails from './DataAnalyticsDetails';

// Import Images
const ProductEngineeringImage = '/Product Engineering.png';
const SoftwareTestingImage = '/Software Testing.png';
const InfraSupportImage = '/Infra Support.png';
const DataAnalyticsImage = '/Data Analytics.png';

// Boost Component
export default function Boost() {
  const [selectedCard, setSelectedCard] = useState(null);

  const data = [
    {
      img: ProductEngineeringImage,
      title: 'Product Engineering',
      text: 'From concept to deployment, create innovative and scalable solutions.',
      detailsComponent: <ProductEngineeringDetails />,
    },
    {
      img: SoftwareTestingImage,
      title: 'Software Testing & QA',
      text: 'Ensure reliability and performance with thorough testing and QA.',
      detailsComponent: <SoftwareTestingDetails />,
    },
    {
      img: InfraSupportImage,
      title: 'Infra Support',
      text: 'Maintain robust, secure, and scalable IT infrastructure.',
      detailsComponent: <InfraSupportDetails />,
    },
    {
      img: DataAnalyticsImage,
      title: 'Data Analytics',
      text: 'Transform data into actionable insights for informed decisions.',
      detailsComponent: <DataAnalyticsDetails />,
    },
  ];

  return (
    <div id="boost" className="flex flex-col py-10 items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      {/* Header Section */}
      <div className="text-center max-w-3xl mb-12 px-5">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
          Our Services
        </h1>
        <p className="text-lg md:text-xl text-gray-200 opacity-80">
          Discover tailored solutions to enhance your business and achieve your goals with our expertise.
        </p>
      </div>

      {/* Cards Section */}
      <div className="grid gap-8 md:gap-12 items-center md:grid-cols-2 lg:grid-cols-4 px-5">
        {data.map((n, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 max-w-sm p-6"
          >
            {/* Image */}
            <div className="bg-indigo-100 p-1 rounded-full mb-4">
              <img
                src={n.img}
                alt={n.title}
                className="w-24 h-24 object-cover rounded-full transition-all duration-200"
              />
            </div>

            {/* Content */}
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              {n.title}
            </h2>
            <p className="text-gray-600 text-base mb-5 leading-relaxed">
              {n.text}
            </p>

            {/* Read More Button */}
            <button
              onClick={() => setSelectedCard(n)} // Set selected card
              className="flex items-center text-indigo-600 font-medium hover:text-indigo-800 transition-colors"
            >
              Read More
              <svg
                width="18"
                height="12"
                viewBox="0 0 18 12"
                fill="none"
                className="ml-2 mt-1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 6L8 0.226497V11.7735L18 6ZM0 7H9V5H0V7Z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </div>
        ))}
      </div>

      {/* Detail Modal */}
      {selectedCard && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-8 w-[90%] md:w-[75%] h-[75%] overflow-auto transform transition-all duration-500 ease-in-out scale-110 opacity-100">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              {/* {selectedCard.title} */}
            </h2>
            {/* Render the correct component based on selectedCard */}
            {selectedCard.detailsComponent}
            <button
              onClick={() => setSelectedCard(null)} // Close the modal
              className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 mt-4"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
