// src/components/sections/ProductsSection.jsx
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    title: "Camiseta Algodão Premium",
    slug: "camiseta-algodao-premium",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop",
  },
  {
    id: 2,
    title: "Camiseta Poliéster Básica",
    slug: "camiseta-poliester-basica",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop",
  },
  {
    id: 3,
    title: "Camisa Polo Personalizada",
    slug: "camisa-polo-personalizada",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop",
  },
  {
    id: 4,
    title: "Regata Esportiva",
    slug: "regata-esportiva",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop",
  },
  {
    id: 5,
    title: "Camiseta Oversized",
    slug: "camiseta-oversized",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop",
  },
  {
    id: 6,
    title: "Camiseta Infantil",
    slug: "camiseta-infantil",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop",
  },
];

export default function ProductsSection() {
  return (
    <section className="w-full bg-[#c8102e]">
      <div className="lg:px-12 lg:max-w-7xl lg:mx-auto py-15">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6 px-4 md:px-0">
          {products.map((product) => (
            <Link
              key={product.id}
              to={`/produto/${product.slug}`}
              className="block rounded-lg overflow-hidden shadow-md bg-white transition-shadow duration-300"
            >
              <div className="relative w-full aspect-square overflow-hidden bg-gray-100 group">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 flex items-center justify-center p-3 md:p-5">
                  <div className="w-full max-w-40 md:max-w-50 aspect-square bg-white/70 backdrop-blur-[2px] flex flex-col items-center justify-center gap-3 border-[3px] border-gray-800/80 shadow-sm transition-all duration-300 group-hover:scale-110">
                    <h3 className="font-['Inter'] font-600 text-sm md:text-lg lg:text-xl text-gray-800 text-center leading-tight px-2">
                      {product.title}
                    </h3>

                    <span className="bg-gray-700 text-white font-['Inter'] font-500 text-[10px] md:text-xs lg:text-sm uppercase tracking-wider px-4 py-1.5 rounded-full">
                      Ver Produtos
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
