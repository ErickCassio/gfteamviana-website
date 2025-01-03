import React, { useState } from "react";
import formBg from "../images/logojj.png";

interface FormData {
  nome: string;
  surname: string;
  email: string;
  phone: string;
}

function Form(props) {
  const [formData, setFormData] = useState<FormData>({
    nome: "",
    surname: "",
    email: "",
    phone: "",
  });

  const handleChange = (e): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e): void => {
    e.preventDefault();

    const whatsappNumber = "+351963089600";
    const message = `Olá gostaria de fazer minha inscrição na GFTEAM Viana:\nNome: ${formData.nome}\nApelido: ${formData.surname}\nE-mail: ${formData.email}\nTelefone: ${formData.phone}`;

    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    // Abrir o link do WhatsApp em uma nova aba
    window.open(whatsappLink, "_blank");
  };

  return (
    <form>
      <div
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
        onClick={() => props.setIsFormVisible(false)}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="max-w-72 sm:max-w-none relative z-10 py-4 text-white bg-white bg-contain bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${formBg})`,
            backgroundOrigin: "content-box",
          }}
        >
          {/* Close button */}
          <div className="absolute top-1 right-3">
            <button
              className="text-end"
              onClick={(e) => {
                e.preventDefault();
                props.setIsFormVisible(false);
              }}
            >
              <i class="fa-solid fa-xmark text-xl"></i>
            </button>
          </div>

          <div class="absolute -z-10 inset-0 bg-black bg-opacity-70"></div>
          <div className="relative px-6">
            <h2 className="text-4xl text-center bebas-font mt-1 mb-4">
              Formulário de Contato
            </h2>
            <div className="py-2 pb-5 raleway-font text-sm font-light">
              <div className="sm:flex sm:space-x-4 sm:pb-6">
                {/* Primeiro input e label */}
                <div className="flex flex-col pb-6 sm:pb-0">
                  <label htmlFor="nome" className="mb-1">
                    Nome
                  </label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    className="border border-gray-300 rounded px-3 py-2 text-black"
                  />
                </div>

                {/* Segundo input e label */}
                <div className="flex flex-col pb-6 sm:pb-0">
                  <label htmlFor="surname" className="mb-1">
                    Apelido
                  </label>
                  <input
                    type="text"
                    id="surname"
                    name="surname"
                    value={formData.surname}
                    onChange={handleChange}
                    className="border border-gray-300 rounded px-3 py-2 text-black"
                  />
                </div>
              </div>
              <div className="pb-6">
                <label htmlFor="email" className="mb-1">
                  E-mail
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded px-3 py-2 text-black"
                />
              </div>

              <div className="pb-2">
                <label htmlFor="phone" className="">
                  Telefone
                </label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded px-3 py-2 text-black"
                />
              </div>
            </div>
            <button
              type="submit"
              className="bebas-font hover:underline hover:decoration-2 hover:scale-105 duration-200 text-lg px-3 pt-0.5 mb-2 rounded-lg bg-red-700 text-white"
              onClick={(e) => {
                e.preventDefault();
                handleSubmit(e);
              }}
            >
              Enviar
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Form;
