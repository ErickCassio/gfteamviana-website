import React from "react";

function Navbar() {
  return (
    <div className="navbar">
      <nav class="bg-blue-600 text-black">
        <div class="px-4 sm:px-6 lg:px-8">
          <div class="flex justify-between h-16 items-center">
            <div class="flex-shrink-0">
              <a href="" class="text-xl font-bold">
                MinhaLogo
              </a>
            </div>

            <div class="hidden md:flex space-x-4">
              <a href="#home" class="hover:bg-gray-700 px-3 py-2 rounded-md">
                Home
              </a>
              <a href="#about" class="hover:bg-gray-700 px-3 py-2 rounded-md">
                Sobre
              </a>
              <a
                href="#services"
                class="hover:bg-gray-700 px-3 py-2 rounded-md"
              >
                Serviços
              </a>
              <a href="#contact" class="hover:bg-gray-700 px-3 py-2 rounded-md">
                Contato
              </a>
            </div>

          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
