import React, { useEffect, useRef, useState } from "react";

// Defines the Slide type with id and className properties
type Slide = {
  id: number;
  className: string;
};

function Galery() {
  // Creates a reference for the container that will hold the slides
  const containerRef = useRef<HTMLDivElement | null>(null);

  // State to track the current slide being displayed
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  // Array of slides with their respective images
  // colocar o url das imagens no lugar de className
  const slides: Slide[] = [
    { id: 1, className: "bg-gray-800 h-full w-full" },
    { id: 2, className: "bg-blue-400 h-full w-full" },
    { id: 3, className: "bg-red-400 h-full w-full" },
    { id: 4, className: "bg-cyan-400 h-full w-full" },
    { id: 5, className: "bg-red-500 h-full w-full" },
  ];

  // Total number of slides
  const totalSlides: number = slides.length;

  // Effect to automatically change the slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      // Increments the current slide and loops back to the first one when reaching the last
      setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
    }, 3000); // 3 seconds

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, [totalSlides]);

  // Effect to scroll to the current slide's position
  useEffect(() => {
    if (containerRef.current) {
      const container = containerRef.current;
      const slideWidth = container.offsetWidth; // Calculates the width of a slide
      container.scrollTo({
        left: currentSlide * slideWidth, // Scrolls horizontally to the current slide
        behavior: "smooth", // Adds a smooth transition
      });
    }
  }, [currentSlide]);
  return (
    <div
      id="galeria"
      className="Galery bg-black text-white w-full flex flex-col justify-center items-center"
    >
      {/* Title and description section of the gallery */}
      <div className="w-full space-x-5 px-6 md:px-12 flex flex-col sm:flex-row">
        <div className="w-full sm:w-1/2 pt-8 sm:pt-0 lg:pe-20 px-4 sm:flex sm:justify-center flex-col">
          <h1 className="text-5xl bebas-font text-center sm:text-left">
            Galeria
          </h1>
          <p className="raleway-font text-sm font-light mt-4">
            A GFTeam Viana do Castelo conta com uma estrutura pensada para
            oferecer o máximo de conforto e praticidade aos nossos alunos. Nosso
            tatame é amplo e seguro, garantindo um espaço ideal para treinos e
            práticas de Jiu-Jitsu.
          </p>
        </div>

        {/* Static image or block beside the text (visible only on larger screens) */}
        <div className="hidden sm:block w-1/2 h-60 md:h-80 lg:h-96 bg-gray-400 mt-10 mb-6"></div>
      </div>

      {/* Slider for mobile devices (visible only on smaller screens) */}
      <div
        ref={containerRef}
        className="sm:hidden h-72 w-11/12 flex overflow-x-scroll snap-x snap-mandatory hide-scrollbar my-6"
      >
        {slides.map((slide) => (
          // Apagar slide.ClassName e colocar imagens na div
          <div
            key={slide.id}
            className={`${slide.className} flex-shrink-0 snap-always snap-center`}
          ></div>
        ))}
      </div>

      {/* Grid layout for larger screens */}
      <div className="hidden sm:grid w-full mt-1 mb-6 grid-cols-2 lg:grid-cols-4 gap-5 px-6 md:px-12">
        {/* Trocar pelas imagens */}
        <div className="bg-gray-400 h-60 xl:h-72"></div>
        <div className="bg-gray-400 h-60 xl:h-72"></div>
        <div className="bg-gray-400 h-60 xl:h-72"></div>
        <div className="bg-gray-400 h-60 xl:h-72"></div>
      </div>
    </div>
  );
}

export default Galery;
