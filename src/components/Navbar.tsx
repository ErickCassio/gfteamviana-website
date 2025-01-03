import React, { useState } from "react";
import logo from "../images/logojj.png";
import Form from "../components/Form.tsx";

// Define the Navbar component
function Navbar() {
  const [showDiv, setShowDiv] = useState<boolean>(false);
  const [isFormVisible, setIsFormVisible] = useState<boolean>(false);

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
                <img
                  src={logo}
                  alt="Logo da academia"
                  className="h-12 sm:h-16"
                />
              </a>
            </div>
            <div className="sm:hidden pe-4">
              <button
                className="flex items-center justify-center h-full"
                onClick={() => setShowDiv(!showDiv)}
              >
                <span className="material-symbols-outlined">menu</span>
              </button>
            </div>
            <div
              className={
                showDiv
                  ? "sm:hidden absolute right-4 flex flex-col top-16 px-2 pt-1 py-3 bg-white rounded-xl bebas-font text-xl"
                  : "hidden"
              }
            >
              <a
                href="#academia"
                className="hover:underline hover:decoration-2 hover:text-black/70 px-3 pt-1 rounded-md"
              >
                Academia
              </a>
              <hr class="border-t-1 border-gray-300" />

              {/* "Turmas" link with hover effects */}
              <a
                href="#turmas"
                className="hover:underline hover:decoration-2 hover:text-black/70 px-3 pt-1 rounded-md"
              >
                Turmas
              </a>
              <hr class="border-t-1 border-gray-300" />
              {/* "Galeria" link with hover effects */}
              <a
                href="#galeria"
                className="hover:underline hover:decoration-2 hover:text-black/70 px-3 pt-1 mb-1 rounded-md"
              >
                Galeria
              </a>

              {/* Call-to-action button with hover and animation effects */}
              <button
                className="hover:underline hover:decoration-2 hover:scale-105 duration-200 px-3 pt-0.5 rounded-lg bg-red-700 text-white"
                onClick={() => setIsFormVisible(!isFormVisible)}
              >
                Entre em Contato
              </button>
            </div>
            {/* Navigation Links Section */}
            <div className="hidden sm:flex space-x-8 bebas-font sm:text-xl md:text-2xl">
              {/* "A Academia" link with hover effects */}
              <a
                href="#academia"
                className="hover:underline hover:decoration-2 hover:text-black/70 px-3 pt-1 rounded-md text-center"
              >
                Academia
              </a>

              {/* "Turmas" link with hover effects */}
              <a
                href="#turmas"
                className="hover:underline hover:decoration-2 hover:text-black/70 px-3 pt-1 rounded-md"
              >
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
              <button
                className="hover:underline hover:decoration-2 hover:scale-105 duration-200 px-3 pt-1 rounded-lg bg-red-700 text-white"
                onClick={() => setIsFormVisible(!isFormVisible)}
              >
                Entre em Contato
              </button>
            </div>
          </div>
        </div>
        {/* Renderiza o Form se isFormVisible for true */}
        {isFormVisible && <Form setIsFormVisible={setIsFormVisible} />}
      </nav>
    </div>
  );
}

export default Navbar; // Export the Navbar component for use in other parts of the app
