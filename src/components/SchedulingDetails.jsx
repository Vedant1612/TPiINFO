// SchedulingDetails.jsx
import React from 'react';

export default function SchedulingDetails() {
  return (
    <div className="flex flex-col items-center p-8 bg-gray-50 min-h-screen">
      <h2 className="text-4xl font-extrabold text-indigo-700 mb-6 text-center">
        Streamline Your Scheduling
      </h2>

      <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 gap-10 mb-16">
        {/* Scheduling Illustration */}
        <div className="w-full md:w-1/2">
          <img 
            src="/schedule.png" 
            alt="Scheduling Illustration" 
            className="w-full rounded-lg shadow-xl"
          />
        </div>

        {/* Scheduling Features */}
        <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
          <p className="text-lg text-gray-700">
            Scheduling is crucial for managing your time effectively. With our tools, you can:
          </p>
          <ul className="list-disc pl-6 space-y-4 text-lg text-gray-800">
            <li>Plan your day efficiently with a user-friendly calendar.</li>
            <li>Automate reminders for important tasks, so you never miss a deadline.</li>
            <li>Reduce time wastage by prioritizing critical activities with ease.</li>
          </ul>
          <p className="text-lg text-gray-700 mt-4">
            Discover how our solutions can streamline your workflow and help you achieve more.
          </p>
        </div>
      </div>

      {/* Why Choose Our Tool Section */}
      <div className="bg-white p-8 rounded-lg shadow-lg w-full md:w-3/4 lg:w-2/3 mb-16">
        <h3 className="text-2xl font-semibold text-gray-800 mb-6">
          Why Choose Our Scheduling Tool?
        </h3>
        <p className="text-lg text-gray-700 mb-6">
          Our scheduling tool is designed to be intuitive, efficient, and easy to use. Whether you're a busy professional or a student managing deadlines, our solution will help you optimize your time like never before.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Plan Your Day */}
          <div className="flex flex-col items-center space-y-2">
            <img 
              src="public/Plan Your Day.png" 
              alt="Plan your day" 
              className="w-24 h-24 rounded-lg shadow-md"
            />
            <p className="text-gray-600 text-center">Plan Your Day</p>
          </div>

          {/* Automated Reminders */}
          <div className="flex flex-col items-center space-y-2">
            <img 
              src="Automated Reminders.png" 
              alt="Automated Reminders" 
              className="w-24 h-24 rounded-lg shadow-md"
            />
            <p className="text-gray-600 text-center">Automated Reminders</p>
          </div>

          {/* Prioritize Time */}
          <div className="flex flex-col items-center space-y-2">
            <img 
              src="Prioritize Time.png" 
              alt="Prioritize Time" 
              className="w-24 h-24 rounded-lg shadow-md"
            />
            <p className="text-gray-600 text-center">Prioritize Time</p>
          </div>

          {/* Achieve More */}
          <div className="flex flex-col items-center space-y-2">
            <img 
              src="Achieve More.png" 
              alt="Achieve More" 
              className="w-24 h-24 rounded-lg shadow-md"
            />
            <p className="text-gray-600 text-center">Achieve More</p>
          </div>
        </div>
      </div>

      {/* Call to Action (Optional) */}
      {/* Uncomment if needed */}
      {/* <div className="flex justify-center">
        <button className="bg-indigo-600 text-white px-8 py-3 rounded-full hover:bg-indigo-700 transition duration-300">
          Start Scheduling Now
        </button>
      </div> */}
    </div>
  );
}
