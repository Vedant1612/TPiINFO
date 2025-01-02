// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Boost from './components/Boost';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import NavComponent from './components/NavComponent';
import Testimonials from './components/Testimonials';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen w-full">
        {/* Navigation Bar */}
        <NavComponent />

        {/* Header Section */}
        <Header />

        {/* Main Content */}
        <main className="bg-[#EEF4FF] min-h-screen relative">
          <div className="grid sm:grid-cols-2 items-center">
            <div>
              <img src="/Answer.png" alt="Answer" />
            </div>
            <div className="max-w-3xl px-4">
              <h1 className="font-jostBold text-[58px] leading-[50px] sm:text-7xl mb-8">
                <span>Scale Your Business</span>
                <br />
                <span>with Tech Services</span>
              </h1>

              {[
                { img: '/Group14.png', title: 'Streamlined Operations', desc: 'Leverage cutting-edge tools to automate processes and boost productivity.' },
                { img: '/Group15.png', title: 'Timely Notifications', desc: 'Stay on top of critical updates with intelligent reminder systems.' },
                { img: '/Group16.png', title: 'Tailored Solutions', desc: 'Build custom solutions to enhance your online presence and sales.' },
              ].map((item, index) => (
                <div className="flex" key={index}>
                  <div>
                    <img src={item.img} alt={item.title} />
                  </div>
                  <div>
                    <h1 className="font-jostMedium text-3xl">{item.title}</h1>
                    <p className="font-jostRegular text-[#61646B]">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>

        {/* Boost Section */}
        <Boost />

        {/* Testimonial Section */}
        <Testimonials />

        {/* Contact Section */}
        <Contact />

        {/* Footer Section */}
        <Footer />
      </div>
    </Router>
  );
}
