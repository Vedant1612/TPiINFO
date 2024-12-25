import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaComment } from 'react-icons/fa';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log('Form data submitted:', formData);
  };

  return (
    <div className="py-16 bg-gradient-to-r from-indigo-100 via-blue-50 to-indigo-100">
      <div className="max-w-screen-sm mx-auto px-6">
        <div className="flex flex-col items-center bg-white shadow-xl rounded-lg p-8 sm:p-12">
          <h2 className="text-indigo-600 font-extrabold text-3xl sm:text-4xl text-center mb-6">
            Contact Us
          </h2>
          <p className="text-gray-600 text-lg sm:text-xl text-center mb-8">
            We’d love to hear from you! Fill out the form below and we’ll get back to you as soon as possible.
          </p>

          <form className="w-full flex flex-col gap-6" onSubmit={handleSubmit}>
            {/* Name Input */}
            <div className="relative">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full pl-12 pr-4 py-3 text-lg rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 outline-none"
              />
              <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
            </div>

            {/* Email Input */}
            <div className="relative">
              <input
                type="email"
                name="email"
                placeholder="Your Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full pl-12 pr-4 py-3 text-lg rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 outline-none"
              />
              <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
            </div>

            {/* Message Input */}
            <div className="relative">
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="w-full pl-12 pr-4 py-3 text-lg rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 outline-none"
              />
              <FaComment className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 text-lg font-bold bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white rounded-lg shadow-lg focus:ring-4 focus:ring-indigo-500"
            >
              Send Message
            </button>
          </form>

          <p className="text-gray-500 text-sm text-center mt-8">
            By submitting, you agree to our{' '}
            <a
              href="#"
              className="text-indigo-600 hover:underline transition duration-200"
            >
              Terms of Service
            </a>{' '}
            and{' '}
            <a
              href="#"
              className="text-indigo-600 hover:underline transition duration-200"
            >
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
