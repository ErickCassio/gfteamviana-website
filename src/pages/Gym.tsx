import React from "react";
import spaceImg from "../images/Gym/spaceImg.jpg";
import battleImg from "../images/Gym/battleImg.png";
import kidsImg from "../images/Gym/kidsImg.jpg";

function Gym() {
  return (
    <div
      id="academia"
      className="Gym text-white container mx-auto flex flex-col md:flex-row"
    >
      {/* Left section: Sticky with top offset */}
      <div className="space-y-4 md:sticky md:top-16 md:h-screen px-9 lg:px-14 py-7 lg:py-9 md:w-1/2">
        <h2 className="bebas-font text-5xl">GFTEAM Viana do Castelo</h2>
        <h6 className="bebas-font text-xl">
          Somos quem somos porque somos todos nós
        </h6>
        <p className="raleway-font">
          Somos uma academia dedicada a ensinar e promover o Jiu-Jitsu
          Brasileiro, uma arte marcial que combina disciplina, técnica e
          autoconfiança. Localizada no coração de Viana do Castelo, a academia é
          um espaço acolhedor tanto para iniciantes quanto para praticantes
          experientes.
        </p>
        <p className="raleway-font pb-2">
          Com aulas voltadas para todas as idades, incluindo crianças, jovens e
          adultos, a GFTeam oferece um ambiente inclusivo e motivador. Aqui os
          alunos aprendem técnicas de defesa pessoal, estratégias de combate e
          os princípios que tornam o Jiu-Jitsu a "Arte Suave".
        </p>
        <button className="bebas-font text-2xl hover:underline hover:decoration-2 hover:scale-105 duration-200 px-3 pt-1.5 py-1 rounded-lg bg-red-700">
          Agende uma aula experimental
        </button>
      </div>

      {/* Right section: Scrollable content */}
      <div className="relative lg:mx-14 md:w-1/2 h-full mt-3 md:mt-0">
        {/* First card: Gym space */}
        <div className="relative my-9 mb-16 w-10/12 sm:w-9/12 md:w-10/12 mx-auto text-center">
          {/* Background image */}
          <img
            src={spaceImg}
            alt="Espaço da academia"
            className="absolute inset-0 w-full h-60 xl:h-72 object-cover"
          />

          {/* Black overlay with opacity */}
          <div className="absolute inset-0 bg-black/60 h-60 xl:h-72"></div>

          {/* Text over image */}
          <div className="relative z-10 h-60 xl:h-72">
            <div className="h-full flex flex-col items-center justify-center">
              <h3 className="text-4xl px-14 md:text-3xl md:px-8 xl:text-4xl lg:px-14 bebas-font pb-4">
                Turmas que se encaixam no seu bolso
              </h3>
              <p className="text-sm px-4 raleway-font font-light">
                Temos aulas em diversos horários de segunda à sexta
              </p>
            </div>
          </div>
        </div>

        {/* Second card: Learning from the best */}
        <div className="relative my-9 mb-16 w-10/12 sm:w-9/12 md:w-10/12 mx-auto text-center">
          {/* Background image */}
          <img
            src={battleImg}
            alt="Luta ao vivo"
            className="absolute inset-0 w-full h-60 xl:h-72 object-cover"
          />

          {/* Black overlay with opacity */}
          <div className="absolute inset-0 bg-black/60 h-60 xl:h-72"></div>

          {/* Text over image */}
          <div className="relative z-10 h-60 xl:h-72">
            <div className="h-full flex flex-col items-center justify-center">
              <h3 className="text-4xl px-14 md:text-3xl md:px-8 xl:text-4xl lg:px-14 bebas-font pb-4">
                Aprenda com os melhores
              </h3>
              <p className="text-sm px-4 xl:px-10 raleway-font font-light">
                A profundidade do conhecimento transmitido através de nossas
                aulas será uma grande vantagem para quem deseja aprender a arte
                do Jiu-Jitsu.
              </p>
            </div>
          </div>
        </div>

        {/* Third card: Kids classes */}
        <div className="relative my-9 mb-16 w-10/12 sm:w-9/12 md:w-10/12 mx-auto text-center">
          {/* Background image */}
          <img
            src={kidsImg}
            alt="Espaço da academia"
            className="absolute inset-0 w-full h-60 xl:h-72 object-cover"
          />

          {/* Black overlay with opacity */}
          <div className="absolute inset-0 bg-black/60 h-60 xl:h-72"></div>

          {/* Text over image */}
          <div className="relative z-10 h-60 xl:h-72">
            <div className="h-full flex flex-col items-center justify-center">
              <h3 className="text-4xl px-14 md:text-3xl md:px-8 xl:text-4xl lg:px-14 bebas-font pb-4">
                Mantenha seu filho em forma
              </h3>
              <p className="text-sm px-4 raleway-font font-light">
                Turmas para todas as idades e todos os níveis de habilidade
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gym;
