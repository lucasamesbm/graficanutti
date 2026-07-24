// src/components/sections/FooterSection.jsx
import { Link } from "react-router-dom";

const products = [
  { name: "Camiseta Algodão Premium", slug: "" },
  { name: "Camiseta Poliéster Básica", slug: "" },
  { name: "Camisa Polo Personalizada", slug: "" },
  { name: "Regata Esportiva", slug: "" },
  { name: "Camiseta Oversized", slug: "" },
  { name: "Camiseta Infantil", slug: "" },
];

const pages = [
  { name: "HOME", path: "/" },
  { name: "PRODUTOS", path: "/produtos" },
  { name: "FAQ", path: "/faq" },
  { name: "CONTATO", path: "/contato" },
];

export default function FooterSection() {
  return (
    <footer className="w-full bg-[#c8102e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 py-12 lg:py-20">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* LOGO */}
          <div className="col-span-2 lg:col-span-1">
            <Link to="/" className="inline-block mb-3">
              <img
                src="src/assets/images/logo.jpg"
                alt="Gráfica Nutti"
                className="h-16 md:h-20 w-auto"
              />
            </Link>
          </div>

          {/* PRODUTOS */}
          <div>
            <h4 className="font-['Barlow_Condensed'] font-700 text-white text-base md:text-xl uppercase tracking-wider mb-3">
              Produtos
            </h4>
            <ul className="space-y-2">
              {products.map((product) => (
                <li key={product.slug}>
                  <Link
                    to={`/produtos`}
                    className="font-['Inter'] text-white/80 text-sm md:text-base hover:text-white transition-colors duration-200"
                  >
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* PÁGINAS */}
          <div>
            <h4 className="font-['Barlow_Condensed'] font-700 text-white text-base md:text-xl uppercase tracking-wider mb-3">
              Páginas
            </h4>
            <ul className="space-y-2">
              {pages.map((page) => (
                <li key={page.path}>
                  <Link
                    to={page.path}
                    className="font-['Inter'] text-white/80 text-sm md:text-base hover:text-white transition-colors duration-200"
                  >
                    {page.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTATO + LOCALIZAÇÃO */}
          <div className="col-span-2 sm:col-span-2 lg:col-span-1">
            <h4 className="font-['Barlow_Condensed'] font-700 text-white text-base md:text-xl uppercase tracking-wider mb-3">
              Contato
            </h4>
            <ul className="space-y-2.5 font-['Inter'] text-white/80 text-sm md:text-base mb-6">
              <li>
                <span className="text-white/60 block text-xs md:text-sm uppercase tracking-wider mb-0.5">
                  WhatsApp
                </span>
                <a
                  href="https://wa.me/5500000000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-300 transition-colors duration-200"
                >
                  (11) 99999-0000
                </a>
              </li>
              <li>
                <span className="text-white/60 block text-xs md:text-sm uppercase tracking-wider mb-0.5">
                  E-mail
                </span>
                <a
                  href="mailto:contato@cascaestamparia.com.br"
                  className="hover:text-white transition-colors duration-200"
                >
                  contato@cascaestamparia.com.br
                </a>
              </li>
            </ul>

            <h4 className="font-['Barlow_Condensed'] font-700 text-white text-base md:text-xl uppercase tracking-wider mb-3">
              Localização
            </h4>

            <div className="w-full aspect-4/3 rounded-lg overflow-hidden shadow-lg mb-2">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.197493345773!2d-46.6540!3d-23.5610!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c7d0b1b1b1%3A0x1b1b1b1b1b1b1b1b!2sAv.%20Paulista%2C%201000%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Gráfica Nutti"
                className="w-full h-full"
              />
            </div>

            <p className="font-['Inter'] text-white/80 text-sm md:text-base leading-relaxed">
              Av. Paulista, 1000 — Bela Vista
              <br />
              São Paulo — SP, 01310-100
            </p>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/20 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-['Inter'] text-white/50 text-xs md:text-sm text-center sm:text-left">
            © {new Date().getFullYear()} Gráfica Nutti. Todos os direitos
            reservados.
          </p>
          <p className="font-['Inter'] text-white/40 text-xs md:text-sm">
            CNPJ: 00.000.000/0001-00
          </p>
        </div>
      </div>
    </footer>
  );
}
