// src/components/sections/CarouselSection.jsx
import { useState, useEffect } from "react";

export default function CarouselSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startX, setStartX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  // Imagens para telas pequenas e médias
  const imagesMobile = [
    "/src/assets/images/imagem1_mobile.png",
    "/src/assets/images/imagem2_mobile.png",
    "/src/assets/images/imagem3_mobile.png",
  ];

  // Imagens para telas grandes
  const imagesDesktop = [
    "/src/assets/images/imagem1.png",
    "/src/assets/images/imagem2.png",
    "/src/assets/images/imagem3.png",
  ];

  // Auto-play a cada 6 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % imagesMobile.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  // Clique nas bolinhas
  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  // Drag para trocar imagem
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX);
  };

  const handleMouseUp = (e) => {
    if (!isDragging) return;
    setIsDragging(false);

    const endX = e.clientX;
    const diff = startX - endX;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        setCurrentIndex((prev) => (prev + 1) % imagesMobile.length);
      } else {
        setCurrentIndex(
          (prev) => (prev - 1 + imagesMobile.length) % imagesMobile.length,
        );
      }
    }
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
  };

  return (
    <section className="w-full bg-white">
      {/* Container responsivo: 100% em telas pequenas/médias, com limite em telas grandes */}
      <div className="w-full px-0 lg:px-12 lg:max-w-7xl lg:mx-auto">
        {/* Carrossel */}
        <div
          className="relative w-full bg-white cursor-grab active:cursor-grabbing overflow-hidden"
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onMouseLeave={() => setIsDragging(false)}
        >
          {/* Imagens - Responsivas com aspect-ratio dinâmico */}
          <div
            className="relative w-full overflow-hidden"
            style={{
              aspectRatio: "clamp(1, 100vw / 100vh, 1920 / 532)",
            }}
          >
            {/* Imagens Mobile (visíveis em telas pequenas e médias) */}
            {imagesMobile.map((image, index) => (
              <div
                key={`mobile-${index}`}
                className={`absolute inset-0 transition-opacity duration-500 lg:hidden`}
                style={{
                  opacity: index === currentIndex ? 1 : 0,
                  transform: "scale(1.2)",
                }}
              >
                <img
                  src={image}
                  alt={`Slide ${index + 1} Mobile`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}

            {/* Imagens Desktop (visíveis em telas grandes) */}
            {imagesDesktop.map((image, index) => (
              <div
                key={`desktop-${index}`}
                className={`absolute inset-0 transition-opacity duration-500 hidden lg:block ${
                  index === currentIndex ? "opacity-100" : "opacity-0"
                }`}
              >
                <img
                  src={image}
                  alt={`Slide ${index + 1} Desktop`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Bolinhas indicadoras */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-3 z-10">
            {imagesMobile.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-white scale-125 brightness-100"
                    : "bg-white/50 scale-100 brightness-75 hover:brightness-90"
                }`}
                aria-label={`Ir para slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
