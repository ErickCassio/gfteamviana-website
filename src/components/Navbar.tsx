import React from "react";
import logo from "../images/logojj.png";

// Define the Navbar component
function Navbar() {
  return (
    // Wrapper div for the navbar, positioned fixed at the top of the viewport
    <div className="navbar fixed top-0 left-0 right-0 z-50 w-dvw">
      {/* Navigation bar with a white background and black text */}
      <nav className="bg-white text-black">
        {/* Padding for the navigation container */}
        <div className="px-4 sm:px-6 lg:px-14">
          {/* Flex container to arrange logo and navigation links */}
          <div className="flex justify-between py-1 items-center">
            
            {/* Logo Section */}
            <div className="flex-shrink-0">
              {/* Link to the home section */}
              <a href="#home">
                {/* Logo image, responsive height for small and larger screens */}
                <img src={logo} alt="Logo da academia" className="h-12 sm:h-16"/>
              </a>
            </div>

            {/* Navigation Links Section */}
            <div className="hidden sm:flex space-x-8 bebas-font sm:text-xl md:text-2xl">
              {/* "A Academia" link with hover effects */}
              <a href="#academia" className="hover:underline hover:decoration-2 hover:text-black/70 px-3 pt-1 rounded-md text-center">
                A Academia
              </a>

              {/* "Turmas" link with hover effects */}
              <a href="#turmas" className="hover:underline hover:decoration-2 hover:text-black/70 px-3 pt-1 rounded-md">
                Turmas
              </a>

              {/* "Galeria" link with hover effects */}
              <a
                href="#galeria"
                className="hover:underline hover:decoration-2 hover:text-black/70 px-3 pt-1 rounded-md"
              >
                Galeria
              </a>

              {/* Call-to-action button with hover and animation effects */}
              <button className="hover:underline hover:decoration-2 hover:scale-105 duration-200 px-3 pt-1 rounded-xl bg-red-700 text-white">
                Entre em Contato
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar; // Export the Navbar component for use in other parts of the app
