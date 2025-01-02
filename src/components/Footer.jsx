import React from 'react';

export default function Footer() {
  return (
    <div className="bg-gray-900 text-white py-12">
      <footer className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 border-t pt-10">
          {/* Logo and Description */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <a href="/" className="text-3xl font-bold text-white flex items-center gap-2">
              <span>TPiINFO</span>
            </a>
            <p className="text-gray-400 mt-4">
              Enhancing your experience with innovative technology solutions.
            </p>
            <div className="flex gap-6 mt-6">
              {/* Social Media Icons */}
              <a href="https://www.instagram.com" target="_blank" aria-label="Instagram" className="text-gray-400 hover:text-white transition duration-300">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" stroke="currentColor" className="w-10 h-10">
    <linearGradient id="a" x1="1.464" x2="14.536" y1="14.536" y2="1.464" gradientUnits="userSpaceOnUse">
      <stop offset="0" stopColor="#FFC107"></stop>
      <stop offset=".507" stopColor="#F44336"></stop>
      <stop offset=".99" stopColor="#9C27B0"></stop>
    </linearGradient>
    <path fill="url(#a)" d="M11 0H5a5 5 0 0 0-5 5v6a5 5 0 0 0 5 5h6a5 5 0 0 0 5-5V5a5 5 0 0 0-5-5zm3.5 11c0 1.93-1.57 3.5-3.5 3.5H5c-1.93 0-3.5-1.57-3.5-3.5V5c0-1.93 1.57-3.5 3.5-3.5h6c1.93 0 3.5 1.57 3.5 3.5v6z"></path>
    <linearGradient id="b" x1="5.172" x2="10.828" y1="10.828" y2="5.172" gradientUnits="userSpaceOnUse">
      <stop offset="0" stopColor="#FFC107"></stop>
      <stop offset=".507" stopColor="#F44336"></stop>
      <stop offset=".99" stopColor="#9C27B0"></stop>
    </linearGradient>
    <path fill="url(#b)" d="M8 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm0 6.5A2.503 2.503 0 0 1 5.5 8c0-1.379 1.122-2.5 2.5-2.5s2.5 1.121 2.5 2.5c0 1.378-1.122 2.5-2.5 2.5z"></path>
    <linearGradient id="c" x1="11.923" x2="12.677" y1="4.077" y2="3.323" gradientUnits="userSpaceOnUse">
      <stop offset="0" stopColor="#FFC107"></stop>
      <stop offset=".507" stopColor="#F44336"></stop>
      <stop offset=".99" stopColor="#9C27B0"></stop>
    </linearGradient>
    <circle cx="12.3" cy="3.7" r=".533" fill="url(#c)"></circle>
  </svg>
</a>


              <a href="https://x.com" target="_blank" aria-label="X (Twitter)" className="text-gray-400 hover:text-white transition duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="95" height="55" viewBox="0 0 70 100" id="twitter">
                  <path fill="#050505" fillRule="evenodd" d="m60,12c0-4.42-3.58-8-8-8H12C7.58,4,4,7.58,4,12v40c0,4.42,3.58,8,8,8h40c4.42,0,8-3.58,8-8V12h0Z"></path>
                  <path fill="#fff" d="m15.07,48.28h4l10.68-12.14,9.29,12.12h10.86l-14.25-18.84,12.06-13.7h-4l-9.91,11.26-8.5-11.25h-11.21l13.79,17.99-12.82,14.57Zm5.11-29.56h3.64l20.06,26.54h-3.35l-20.34-26.54Z"></path>
                </svg>
              </a>
              <a href="https://www.linkedin.com" target="_blank" aria-label="LinkedIn" className="text-gray-400 hover:text-white transition duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="#fff" aria-label="LinkedIn" viewBox="0 0 512 512" id="linkedin">
                  <rect width="512" height="512" fill="#0077b5" rx="15%"></rect>
                  <circle cx="142" cy="138" r="37"></circle>
                  <path stroke="#fff" strokeWidth="66" d="M244 194v198M142 194v198"></path>
                  <path d="M276 282c0-20 13-40 36-40 24 0 33 18 33 45v105h66V279c0-61-32-89-76-89-34 0-51 19-59 32"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Product, Company, Resources Sections */}
          <div className="flex flex-col">
            <div className="font-semibold text-lg mb-4">Products</div>
            <nav className="flex flex-col gap-3">
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">Overview</a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">Solutions</a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">Pricing</a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">Customers</a>
            </nav>
          </div>
          <div className="flex flex-col">
            <div className="font-semibold text-lg mb-4">Company</div>
            <nav className="flex flex-col gap-3">
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">About</a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">Jobs</a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">Press</a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">Contact</a>
            </nav>
          </div>
          <div className="flex flex-col">
            <div className="font-semibold text-lg mb-4">Resources</div>
            <nav className="flex flex-col gap-3">
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">Docs</a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">Blog</a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">Help Center</a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">API</a>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
}
