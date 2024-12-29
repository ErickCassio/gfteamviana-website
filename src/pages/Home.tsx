import React from "react";
import backgroundImage from "../images/Hero/heroImg.png";
import smBackgroundImage from "../images/Hero/smHeroImg.png"

function Home() {
  return (
    <div id="home" className="Home flex flex-row w-full max-w-full">

      <div className="z-10 bg-transparent text-white px-14 h-dvh md:w-1/3 flex flex-col justify-center items-start">
        <h1 className="pt-14 md:w-full montserrat-font text-4xl lg:text-5xl font-bold">
          DOMINE A ARTE SUAVE
        </h1>
        <p className="raleway-font py-8">Faça parte de uma equipa de campeões</p>
        <button className="bebas-font bg-red-700 px-7 pt-0.5 rounded-lg text-lg md:w-40 md:text-xl hover:underline hover:decoration-2 hover:scale-105">Junte-se a nós</button>
      </div>

    {/* Small size image */}
    <div className="visible md:invisible"> 
      <img
        src={smBackgroundImage}
        alt="Beautiful Landscape"
        className="absolute inset-0 h-full w-full"
      />
    </div>
    {/* Medium size image */}
    <div className="invisible md:visible"> 
      <img
        src={backgroundImage}
        alt="Beautiful Landscape"
        className="absolute inset-0 h-full w-full"
      />
      </div>
    </div>
  );
}

export default Home;
