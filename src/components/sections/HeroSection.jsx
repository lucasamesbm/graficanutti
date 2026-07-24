// src/components/sections/HeroSection.jsx
import { Link } from "react-router-dom";
import banner from "../../assets/images/banner.png";

export default function HeroSection() {
  const whatsappNumber = "5500000000000";
  const whatsappMessage = encodeURIComponent(
    "Olá! Vim pelo site e gostaria de solicitar um orçamento.",
  );

  return (
    <section id="inicio" className="bg-white pt-6 lg:pt-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 py-8 lg:py-14 mb-10 w-full">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-24">
          {/* Imagem */}
          <div className="order-2 lg:order-1 relative h-full">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute top-0 left-0 w-2 h-full bg-red-600 z-10" />
              <img
                src={banner}
                alt="Nutti Gráfica"
                className="w-full h-80 sm:h-96 lg:h-135 object-cover"
              />
            </div>
            {/* DESDE 2014 */}
            <div className="absolute -bottom-3 -right-3 md:-bottom-4 md:-right-4 lg:-bottom-5 lg:-right-6 bg-red-600 text-white font-['Barlow_Condensed'] font-800 text-lg px-4 py-2 rounded shadow-lg">
              DESDE 1996
            </div>
          </div>

          {/* Texto */}
          <div className="order-1 lg:order-2 flex flex-col gap-5 lg:gap-8">
            <div>
              <span className="inline-block bg-red-600 font-['Barlow_Condensed'] font-700 text-md lg:text-base tracking-widest px-5 py-2 rounded uppercase text-white">
                impressões NUTTI
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-8xl uppercase leading-[1.1]">
              <span className="text-black">Qualidade que</span>
              <br />
              <span className="text-black">Imprime</span>{" "}
              <span className="text-green-600">Resultados</span>
            </h1>

            <p className="font-['Barlow'] text-gray-500 text-lg lg:text-xl leading-relaxed">
              Camisetas, bonés, mochilas e muito mais — com estampa de alta
              qualidade, arte grátis e acabamento profissional para sua marca ou
              evento.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-red-600 text-white border-2 border-red-600 font-['Barlow_Condensed'] font-700 text-base lg:text-lg px-4 lg:px-6 py-3 lg:py-4 rounded tracking-wider transition-all duration-300 hover:bg-white hover:text-red-600 hover:border-red-600 shadow-lg"
              >
                Pedir Orçamento Grátis
              </a>
              <Link
                to="/produtos"
                className="inline-flex items-center justify-center gap-2 border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white font-['Barlow_Condensed'] font-700 text-base lg:text-lg px-6 lg:px-8 py-3 lg:py-4 rounded tracking-wider transition-all duration-300"
              >
                Ver Produtos
              </Link>
            </div>

            <div className="flex flex-wrap gap-6 lg:gap-8">
              {["Arte Grátis", "Sem Mínimo", "Qualidade Garantida"].map(
                (badge) => (
                  <div key={badge} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full" />
                    <span className="font-['Barlow'] text-gray-400 text-sm lg:text-base">
                      {badge}
                    </span>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
