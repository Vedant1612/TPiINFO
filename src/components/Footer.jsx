import React from 'react';

export default function Footer() {
  return (
    <div className="bg-gray-900 text-white py-12">
      <footer className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12 border-t pt-10">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <a href="/" className="text-3xl font-bold text-white flex items-center gap-2">
              <span>TPiINFO</span>
            </a>
            <p className="text-gray-400 mt-4">
              Enhancing your experience with innovative technology solutions.
            </p>
            <div className="flex gap-6 mt-6">
              {/* Social Media Icons */}
              <a href="https://www.instagram.com" target="_blank" aria-label="Instagram" className="text-gray-400 hover:text-white transition duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 102 102" id="instagram">
                  <defs>
                    <radialGradient id="a" cx="6.601" cy="99.766" r="129.502" gradientUnits="userSpaceOnUse">
                      <stop offset=".09" stop-color="#fa8f21"></stop>
                      <stop offset=".78" stop-color="#d82d7e"></stop>
                    </radialGradient>
                    <radialGradient id="b" cx="70.652" cy="96.49" r="113.963" gradientUnits="userSpaceOnUse">
                      <stop offset=".64" stop-color="#8c3aaa" stop-opacity="0"></stop>
                      <stop offset="1" stop-color="#8c3aaa"></stop>
                    </radialGradient>
                  </defs>
                  <path fill="url(#a)" d="M25.865,101.639A34.341,34.341,0,0,1,14.312,99.5a19.329,19.329,0,0,1-7.154-4.653A19.181,19.181,0,0,1,2.5,87.694,34.341,34.341,0,0,1,.364,76.142C.061,69.584,0,67.617,0,51s.067-18.577.361-25.14A34.534,34.534,0,0,1,2.5,14.312,19.4,19.4,0,0,1,7.154,7.154,19.206,19.206,0,0,1,14.309,2.5,34.341,34.341,0,0,1,25.862.361C32.422.061,34.392,0,51,0s18.577.067,25.14.361A34.534,34.534,0,0,1,87.691,2.5a19.254,19.254,0,0,1,7.154,4.653A19.267,19.267,0,0,1,99.5,14.309a34.341,34.341,0,0,1,2.14,11.553c.3,6.563.361,8.528.361,25.14s-.061,18.577-.361,25.14A34.5,34.5,0,0,1,99.5,87.694,20.6,20.6,0,0,1,87.691,99.5a34.342,34.342,0,0,1-11.553,2.14c-6.557.3-8.528.361-25.14.361s-18.577-.058-25.134-.361"></path>
                  <path fill="url(#b)" d="M25.865,101.639A34.341,34.341,0,0,1,14.312,99.5a19.329,19.329,0,0,1-7.154-4.653A19.181,19.181,0,0,1,2.5,87.694,34.341,34.341,0,0,1,.364,76.142C.061,69.584,0,67.617,0,51s.067-18.577.361-25.14A34.534,34.534,0,0,1,2.5,14.312,19.4,19.4,0,0,1,7.154,7.154,19.206,19.206,0,0,1,14.309,2.5,34.341,34.341,0,0,1,25.862.361C32.422.061,34.392,0,51,0s18.577.067,25.14.361A34.534,34.534,0,0,1,87.691,2.5a19.254,19.254,0,0,1,7.154,4.653A19.267,19.267,0,0,1,99.5,14.309a34.341,34.341,0,0,1,2.14,11.553c.3,6.563.361,8.528.361,25.14s-.061,18.577-.361,25.14A34.5,34.5,0,0,1,99.5,87.694,20.6,20.6,0,0,1,87.691,99.5a34.342,34.342,0,0,1-11.553,2.14c-6.557.3-8.528.361-25.14.361s-18.577-.058-25.134-.361"></path>
                  <path fill="#fff" d="M461.114,477.413a12.631,12.631,0,1,1,12.629,12.632,12.631,12.631,0,0,1-12.629-12.632m-6.829,0a19.458,19.458,0,1,0,19.458-19.458,19.457,19.457,0,0,0-19.458,19.458m35.139-20.229a4.547,4.547,0,1,0,4.549-4.545h0a4.549,4.549,0,0,0-4.547,4.545m-30.99,51.074a20.943,20.943,0,0,1-7.037-1.3,12.547,12.547,0,0,1-7.193-7.19,20.923,20.923,0,0,1-1.3-7.037c-.184-3.994-.22-5.194-.22-15.313s.04-11.316.22-15.314a21.082,21.082,0,0,1,1.3-7.037,12.54,12.54,0,0,1,7.193-7.193,20.924,20.924,0,0,1,7.037-1.3c3.994-.184,5.194-.22,15.309-.22s11.316.039,15.314.221a21.082,21.082,0,0,1,7.037,1.3,12.541,12.541,0,0,1,7.193,7.193,20.926,20.926,0,0,1,1.3,7.037c.184,4,.22,5.194.22,15.314s-.037,11.316-.22,15.314a21.023,21.023,0,0,1-1.3,7.037,12.547,12.547,0,0,1-7.193,7.19,20.925,20.925,0,0,1-7.037,1.3c-3.994.184-5.194.22-15.314.22s-11.316-.037-15.309-.22m-.314-68.509a27.786,27.786,0,0,0-9.2,1.76,19.373,19.373,0,0,0-11.083,11.083,27.794,27.794,0,0,0-1.76,9.2c-.187,4.04-.229,5.332-.229,15.623s.043,11.582.229,15.623a27.793,27.793,0,0,0,1.76,9.2,19.374,19.374,0,0,0,11.083,11.083,27.813,27.813,0,0,0,9.2,1.76c4.042.184,5.332.229,15.623.229s11.582-.043,15.623-.229a27.8,27.8,0,0,0,9.2-1.76,19.374,19.374,0,0,0,11.083-11.083,27.716,27.716,0,0,0,1.76-9.2c.184-4.043.226-5.332.226-15.623s-.043-11.582-.226-15.623a27.786,27.786,0,0,0-1.76-9.2,19.379,19.379,0,0,0-11.08-11.083,27.748,27.748,0,0,0-9.2-1.76c-4.041-.185-5.332-.229-15.621-.229s-11.583.043-15.626.229" transform="translate(-422.637 -426.196)"></path>
                </svg>
                
              </a>
              <a href="https://x.com" target="_blank" aria-label="X (Twitter)" className="text-gray-400 hover:text-white transition duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="95" height="55" viewBox="0 0 70 100" id="twitter">
                <path fill="#050505" fill-rule="evenodd" d="m60,12c0-4.42-3.58-8-8-8H12C7.58,4,4,7.58,4,12v40c0,4.42,3.58,8,8,8h40c4.42,0,8-3.58,8-8V12h0Z"></path>
                <path fill="#fff" d="m15.07,48.28h4l10.68-12.14,9.29,12.12h10.86l-14.25-18.84,12.06-13.7h-4l-9.91,11.26-8.5-11.25h-11.21l13.79,17.99-12.82,14.57Zm5.11-29.56h3.64l20.06,26.54h-3.35l-20.34-26.54Z"></path>
              </svg>
              </a>
              <a href="https://www.linkedin.com" target="_blank" aria-label="LinkedIn" className="text-gray-400 hover:text-white transition duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="#fff" aria-label="LinkedIn" viewBox="0 0 512 512" id="linkedin">
                <rect width="512" height="512" fill="#0077b5" rx="15%"></rect>
                <circle cx="142" cy="138" r="37"></circle>
                <path stroke="#fff" stroke-width="66" d="M244 194v198M142 194v198"></path>
                <path d="M276 282c0-20 13-40 36-40 24 0 33 18 33 45v105h66V279c0-61-32-89-76-89-34 0-51 19-59 32"></path>
              </svg>
              </a>
              {/* <a href="https://github.com" target="_blank" aria-label="GitHub" className="text-gray-400 hover:text-white transition duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                </svg>
              </a> */}
            </div>
          </div>

          {/* Product, Company, Resources Sections */}
          <div>
            <div className="font-semibold text-lg mb-4">Products</div>
            <nav className="flex flex-col gap-3">
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">Overview</a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">Solutions</a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">Pricing</a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">Customers</a>
            </nav>
          </div>
          <div>
            <div className="font-semibold text-lg mb-4">Company</div>
            <nav className="flex flex-col gap-3">
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">About</a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">Jobs</a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">Press</a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">Contact</a>
            </nav>
          </div>
          <div>
            <div className="font-semibold text-lg mb-4">Resources</div>
            <nav className="flex flex-col gap-3">
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">Blog</a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">Documentation</a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">FAQs</a>
            </nav>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-gray-400 text-sm text-center mt-12 border-t pt-8">
          © 2024 TPiINFO. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
