import React, { useState } from "react";
import adultsImg from "../images/Classes/adultsClass.jpg";
import kidsImg from "../images/Gym/kidsImg.jpg";
import noGiImg from "../images/Gym/spaceImg.jpg";

function Classes() {
  const [currentSlide, setCurrentSlide] = useState(0);

  type Slide = {
    imgUrl: string;
    title: string;
    description: string;
  };

  // Declara o array `slides` com o tipo definido
  const slides: Slide[] = [
    {
      imgUrl: kidsImg,
      title: "Kids",
      description:
        "Esta turma é ideal para introduzir os pequenos à 'Arte Suave' de forma segura e divertida. As aulas promovem disciplina, respeito e autoconfiança, enquanto ensinam fundamentos técnicos adaptados para essa faixa etária. Um ambiente acolhedor onde as crianças podem crescer física e emocionalmente.",
    },
    {
      imgUrl: adultsImg,
      title: "Adultos",
      description:
        "Para jovens e adultos de todos os níveis, essa turma é perfeita tanto para iniciantes que desejam aprender as bases do Jiu-Jitsu quanto para praticantes avançados que buscam aperfeiçoar suas técnicas. Além de treinos dinâmicos e desafiadores, as aulas promovem saúde física, mental e um senso de comunidade.",
    },
    {
      imgUrl: noGiImg,
      title: "No-Gi (Sem kimono)",
      description:
        "Dedicada à prática do Jiu-Jitsu sem o tradicional kimono, essa turma explora técnicas específicas para lutas com foco em agilidade e controle. Ideal para quem busca um novo desafio ou deseja complementar sua prática no Jiu-Jitsu tradicional.",
    },
  ];

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const goToPreviousSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div
      id="turmas"
      className="Classes text-white mx-auto h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${slides[currentSlide].imgUrl})`,
      }}
    >
      <div className="bg-black/60 h-full flex flex-col justify-center items-center p-4">
        <div className="text-center mb-20">
          <h1 className="text-6xl font-bold bebas-font text-outline-black tracking-[0.05em]">
            Turmas
          </h1>
        </div>

        <div className="hidden md:flex flex-row space-x-8 max-w-7xl">
          <div className="flex-1 hover:bg-white hover:text-black"
          onMouseEnter={() => setCurrentSlide(0)}>
            <hr className="mb-4 border-t-2 border-white w-full mx-auto" />
            <div className="px-4">
              <h2 className="text-4xl bebas-font pb-2">Kids</h2>
              <p className="raleway-font text-sm font-light pb-7">
                Esta turma é ideal para introduzir os pequenos à "Arte Suave" de
                forma segura e divertida. As aulas promovem disciplina, respeito
                e autoconfiança, enquanto ensinam fundamentos técnicos adaptados
                para essa faixa etária. Um ambiente acolhedor onde as crianças
                podem crescer física e emocionalmente.
              </p>
            </div>
          </div>
          <div className="flex-1 hover:bg-white hover:text-black"
          onMouseEnter={() => setCurrentSlide(1)}>
            <hr className="mb-4 border-t-2 border-white w-full mx-auto" />
            <div className="px-4">
              <h2 className="text-4xl bebas-font pb-2">Adultos</h2>
              <p className="raleway-font text-sm font-light pb-7">
                Para jovens e adultos de todos os níveis, essa turma é perfeita
                tanto para iniciantes que desejam aprender as bases do Jiu-Jitsu
                quanto para praticantes avançados que buscam aperfeiçoar suas
                técnicas. Além de treinos dinâmicos e desafiadores, as aulas
                promovem saúde física, mental e um senso de comunidade.
              </p>
            </div>
          </div>
          <div className="flex-1 hover:bg-white hover:text-black"
          onMouseEnter={() => setCurrentSlide(2)}>
            <hr className="mb-4 border-t-2 border-white w-full mx-auto" />
            <div className="px-4">
              <h2 className="text-4xl bebas-font pb-2">No-Gi</h2>
              <p className="raleway-font text-sm font-light pb-7">
                Dedicada à prática do Jiu-Jitsu sem o tradicional kimono, essa
                turma explora técnicas específicas para lutas com foco em
                agilidade e controle. Ideal para quem busca um novo desafio ou
                deseja complementar sua prática no Jiu-Jitsu tradicional.
              </p>
            </div>
          </div>
        </div>

        {/* Slider */}
        <div className="block md:hidden flex flex-row items-center w-full space-x-3">
          {/* Displaying current slide */}
          <button
            className="text-white px-2 py-2 rounded-full"
            onClick={goToPreviousSlide}
          >
            <i class="fa-solid fa-chevron-left text-3xl"></i>
          </button>
          <div className="">
            <hr className="mb-4 border-t-2 border-white w-full mx-auto" />
            <div className="">
              <h2 className="text-3xl bebas-font text-center">
                {slides[currentSlide].title}
              </h2>
              <p className="raleway-font text-base mt-4">
                {slides[currentSlide].description}
              </p>
            </div>
          </div>
          <button
            className=" text-white px-2 py-2 rounded-full"
            onClick={goToNextSlide}
          >
            <i class="fa-solid fa-chevron-right text-3xl"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Classes;
