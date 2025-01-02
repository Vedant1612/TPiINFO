import React, { useState } from 'react';
import '../App.css';

export default function Testimonials() {
  const [isHovered, setIsHovered] = useState(false); // Track hover state

  const testimonials = [
    {
      name: 'Alice Johnson',
      role: 'CTO, Innovatech',
      image:
        'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&q=75&fit=crop&w=112',
      feedback:
        '"TechSphere transformed the way we operate with their cutting-edge solutions. Their professionalism and support are unparalleled!"',
    },
    {
      name: 'Mark Douglas',
      role: 'Product Manager, NexSoft',
      image:
        'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&q=75&fit=crop&w=112',
      feedback:
        '"Their team delivered outstanding results on time and exceeded our expectations. The tech expertise they brought was exceptional!"',
    },
    {
      name: 'Sophia Lee',
      role: 'CEO, QuantumTech',
      image:
        'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&q=75&fit=crop&w=112',
      feedback:
        '"Partnering with TechSphere was the best decision for our business. Their innovative solutions gave us a competitive edge!"',
    },
    {
      name: 'John Doe',
      role: 'Founder, WebTech',
      image:
        'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&q=75&fit=crop&w=112',
      feedback:
        '"TechSphere’s service has been a game-changer for us. Their technology allowed us to scale faster than ever before!"',
    },
    {
      name: 'Jane Smith',
      role: 'VP of Engineering, DataTech',
      image:
        'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&q=75&fit=crop&w=112',
      feedback:
        '"Working with TechSphere was an incredible experience. They consistently exceeded our expectations and delivered beyond what was promised."',
    },
    {
      name: 'Tom Williams',
      role: 'Director of IT, AlphaCorp',
      image:
        'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&q=75&fit=crop&w=112',
      feedback:
        '"TechSphere has been instrumental in revolutionizing our tech stack. They brought innovative solutions that enhanced our efficiency."',
    },
  ];

  return (
    <div id="testimonials" className="py-16 bg-gray-50">
      <div className="text-center mb-14">
        <h3 className="text-2xl font-semibold text-indigo-600 tracking-widest uppercase">
          Testimonials
        </h3>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mt-4">
          What Our Clients Say
        </h1>
      </div>

      {/* Scrollable container with animation */}
      <div
        className="testimonials-wrapper"
        onMouseEnter={() => setIsHovered(true)} // Pause animation on hover
        onMouseLeave={() => setIsHovered(false)} // Resume animation on mouse leave
      >
        <div
          className="animate-scroll"
          style={{
            animationPlayState: isHovered ? 'paused' : 'running', // Control animation on hover
          }}
        >
          {/* Testimonials Grid */}
          <div className="flex flex-wrap justify-center gap-6">
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex-none w-72 sm:w-80 md:w-96 text-center"
              >
                <div className="w-16 h-16 bg-gray-200 rounded-full overflow-hidden shadow-md mx-auto">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="mt-4">
                  <h2 className="text-lg font-semibold text-indigo-600">
                    {testimonial.name}
                  </h2>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
                <p className="text-gray-600 mt-4 text-sm leading-relaxed">
                  {testimonial.feedback}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
