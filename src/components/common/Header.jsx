// src/components/common/Header.jsx
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/images/logo.jpg";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: "HOME", href: "/" },
    {
      label: "PRODUTOS",
      href: "/produtos",
      hasDropdown: true,
      submenu: [
        { label: "Todos os produtos", href: "/produtos" },
        { label: "Camisetas", href: "/produtos/Camisetas" },
        { label: "Windbanner", href: "/produtos/Windbanner" },
        { label: "Banners", href: "/produtos/Banners" },
      ],
    },
    { label: "FAQ", href: "/faq" },
    { label: "CONTATO", href: "/contato" },
  ];

  const whatsappNumber = "5500000000000";
  const whatsappMessage = encodeURIComponent(
    "Olá! Vim pelo site e gostaria de solicitar um orçamento.",
  );

  function isActive(item) {
    if (item.hasDropdown) {
      return location.pathname.startsWith("/produtos");
    }
    if (item.href === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(item.href);
  }

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm w-full">
      <div className="max-w-7xl mx-auto px-5 flex items-center justify-between h-20">
        {/* Logo */}
        <div className="flex shrink-0">
          <img
            src={logo}
            alt="Nutti Gráfica"
            className="h-12 w-auto object-contain"
          />
        </div>

        {/* Navegação Desktop */}
        <nav className="hidden md:flex flex-1 justify-center">
          <ul className="flex list-none gap-10 m-0 p-0">
            {navItems.map((item) => {
              const active = isActive(item);
              return (
                <li key={item.label} className="relative">
                  <div
                    className="relative"
                    onMouseEnter={() =>
                      item.hasDropdown && setIsProductsOpen(true)
                    }
                    onMouseLeave={() =>
                      item.hasDropdown && setIsProductsOpen(false)
                    }
                  >
                    <Link
                      to={item.href}
                      className={`relative flex items-center gap-1.5 no-underline font-medium text-sm tracking-wide py-2 transition-all duration-300 px-2 -mx-2 rounded-md
                        ${active ? "text-red-600" : "text-gray-800 hover:text-red-600"}
                        after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-0.5 after:bg-red-500 after:rounded-full after:transition-all after:duration-300
                        ${active ? "after:w-3/4" : "after:w-0 hover:after:w-3/4"}
                      `}
                    >
                      {item.label}
                      {item.hasDropdown && (
                        <ChevronDown
                          size={16}
                          className={`transition-transform duration-300 ${isProductsOpen ? "rotate-180" : ""}`}
                        />
                      )}
                    </Link>

                    {item.hasDropdown && isProductsOpen && (
                      <div className="absolute top-full left-0 bg-white border border-gray-200 rounded-lg min-w-52 py-3 mt-2 shadow-lg">
                        {item.submenu.map((subitem) => (
                          <Link
                            key={subitem.label}
                            to={subitem.href}
                            className="block px-5 py-3 text-gray-800 no-underline text-sm transition-all duration-200 hover:bg-red-50 hover:text-red-600 hover:pl-7"
                          >
                            {subitem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Botão Orçamento Desktop */}
        <div className="hidden md:flex items-center shrink-0 ml-6">
          <a
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-600 text-white font-semibold text-sm px-5 py-2.5 rounded-lg tracking-wide transition-all duration-300 hover:shadow-lg hover:shadow-green-600/25 hover:-translate-y-0.3 active:translate-y-0 active:shadow-md"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            ORÇAMENTO
          </a>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden flex items-center justify-center p-2 text-gray-800"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Abrir menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Menu Mobile */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 px-5 py-5 animate-fadeIn">
          <ul className="flex flex-col gap-3 list-none m-0 p-0">
            {navItems.map((item) => {
              const active = isActive(item);
              return (
                <li key={item.label}>
                  <Link
                    to={item.href}
                    className={`block no-underline font-medium text-base py-2 transition-colors duration-200
                      ${active ? "text-red-600" : "text-gray-800 hover:text-red-600"}
                    `}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
            <li className="pt-3 border-t border-gray-200">
              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-green-600 text-white font-semibold text-base px-4 py-3 rounded-lg tracking-wide transition-all duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                SOLICITAR ORÇAMENTO
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
