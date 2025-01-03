import React from "react";

function Footer() {
  return (
    <footer>
      <div className="footer bg-white text-black px-6 pt-1">
        <div className="flex flex-row gap-3 py-2">
          <div
            className="flex items-center gap-1 cursor-pointer"
            onClick={() =>
              window.open(
                "https://www.instagram.com/gfteamvianadocastelo.pt/",
                "_blank"
              )
            }
          >
            <i class="fa-brands fa-instagram text-2xl"></i>
            <p className="montserrat-font pb-0.5">Instagram</p>
          </div>
          <div
            className="flex items-center gap-1 cursor-pointer"
            onClick={() =>
              window.open(
                "https://wa.me/351963089600?text=" +
                  encodeURIComponent(
                    "Olá, gostaria de ter mais informações sobre as aulas."
                  ),
                "_blank"
              )
            }
          >
            <i class="fa-brands fa-whatsapp text-2xl"></i>
            <p className="montserrat-font pb-0.5">Whatsapp</p>
          </div>
        </div>

        <p className="bebas-font text-base tracking-[0.03em] pb-1">
          &copy; {new Date().getFullYear()} GFTeam Viana do Castelo
        </p>
      </div>
    </footer>
  );
}

export default Footer;
