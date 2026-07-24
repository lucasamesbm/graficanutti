// src/components/sections/ProductsExampleSection.jsx
export default function ProductsExampleSection() {
  const produtos = [
    {
      titulo: "Camisetas de Interclasse",
      descricao:
        "Camisetas personalizadas para times, turmas e eventos esportivos. Estampas duráveis em DTF e serigrafia, tecido confortável fio 30.1 e cores vibrantes que destacam sua equipe. Do uniforme escolar ao campeonato corporativo — a qualidade que sua turma merece.",
      cor: "#c8102e",
      corBg: "bg-red-50",
      corBtn: "bg-[#c8102e]",
      icone: (
        <svg
          className="w-16 h-16 md:w-20 md:h-20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6 5L3 9l3 3 3-3-3-4z" />
          <path d="M18 5l3 4-3 3-3-3 3-4z" />
          <path d="M3 9h18" />
          <path d="M9 9l1 10h4l1-10" />
        </svg>
      ),
    },
    {
      titulo: "Windbanners",
      descricao:
        "Banners resistentes para fachadas, eventos e divulgação externa. Material de alta durabilidade com impressão em alta resolução e cores que não desbotam mesmo sob sol e chuva. O impacto visual que sua marca merece na entrada da sua empresa ou evento.",
      cor: "#2563eb",
      corBg: "bg-blue-50",
      corBtn: "bg-blue-600",
      icone: (
        <svg
          className="w-16 h-16 md:w-20 md:h-20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="6" width="18" height="12" rx="2" />
          <path d="M3 10h18" />
          <path d="M7 6V4" />
          <path d="M17 6V4" />
        </svg>
      ),
    },
    {
      titulo: "Banners e Lonas",
      descricao:
        "Lonas promocionais para eventos, feiras e pontos de venda. Impressão em alta definição com acabamento profissional — desde banners de mesa até grandes formatos para fachadas. Sua comunicação visual em grande escala com a melhor relação custo-benefício.",
      cor: "#ca8a04",
      corBg: "bg-yellow-50",
      corBtn: "bg-yellow-600",
      icone: (
        <svg
          className="w-16 h-16 md:w-20 md:h-20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <path d="M8 21h8" />
          <path d="M12 17v4" />
        </svg>
      ),
    },
    {
      titulo: "Adesivos e Etiquetas",
      descricao:
        "Adesivos personalizados em diversos tamanhos, formatos e acabamentos. Perfeitos para brindes, identificação de produtos, frota e divulgação da sua marca. Vinil de alta aderência com impressão nítida que valoriza seu produto e encanta seus clientes.",
      cor: "#16a34a",
      corBg: "bg-green-50",
      corBtn: "bg-green-600",
      icone: (
        <svg
          className="w-16 h-16 md:w-20 md:h-20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z" />
          <path d="M7 7h.01" />
        </svg>
      ),
    },
  ];

  return (
    <section className="w-full bg-white py-12 md:py-16 lg:py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título */}
        <div className="flex flex-col items-center mb-10 md:mb-12 lg:mb-16">
          <h2
            className="font-['Barlow_Condensed'] font-800 text-4xl sm:text-5xl md:text-5xl lg:text-6xl uppercase tracking-tight text-center"
            style={{ color: "#000" }}
          >
            Conheça Nossos Produtos
          </h2>
          <p
            className="font-['Inter'] font-500 text-base sm:text-lg md:text-lg lg:text-xl mt-3 max-w-3xl text-center leading-relaxed"
            style={{ color: "#000" }}
          >
            Do esportivo ao corporativo — soluções em estamparia para todos os
            momentos.
          </p>
        </div>

        {/* Cards alternados */}
        <div className="space-y-8 md:space-y-12">
          {produtos.map((produto, index) => {
            const isLeft = index % 2 === 0;

            return (
              <div
                key={index}
                className={`flex flex-col ${isLeft ? "md:flex-row" : "md:flex-row-reverse"} gap-0 md:gap-0 bg-white border border-gray-200 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-gray-300 ${
                  isLeft ? "md:mr-12 lg:mr-25" : "md:ml-12 lg:ml-25"
                }`}
              >
                {/* Lado visual — ícone grande */}
                <div
                  className={`${produto.corBg} w-full md:w-2/5 lg:w-2/5 flex items-center justify-center py-12 md:py-0 min-h-50 md:min-h-70 transition-all duration-300`}
                >
                  <div className="text-gray-800/20 transition-transform duration-500">
                    {produto.icone}
                  </div>
                </div>

                {/* Lado do conteúdo */}
                <div className="w-full md:w-3/5 lg:w-3/5 p-6 sm:p-8 md:p-10 flex flex-col justify-center">
                  {/* Barra decorativa */}
                  <div
                    className="w-12 h-1 rounded-full mb-4"
                    style={{ backgroundColor: produto.cor }}
                  />

                  <h3
                    className="font-['Barlow_Condensed'] font-700 text-2xl sm:text-3xl md:text-4xl uppercase tracking-wide"
                    style={{ color: produto.cor }}
                  >
                    {produto.titulo}
                  </h3>

                  <p className="font-['Inter'] font-450 text-gray-600 text-sm sm:text-base md:text-lg mt-3 leading-relaxed">
                    {produto.descricao}
                  </p>

                  {/* Tags ilustrativas */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {["Qualidade", "Durabilidade", "Acabamento"].map((tag) => (
                      <span
                        key={tag}
                        className="font-['Inter'] font-500 text-xs px-3 py-1 rounded-full border bg-white"
                        style={{
                          borderColor: `${produto.cor}30`,
                          color: produto.cor,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href="https://wa.me/5500000000000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center justify-center gap-2 ${produto.corBtn} text-white font-['Inter'] font-600 text-sm sm:text-base px-6 py-3 rounded-lg mt-5 w-fit transition-all duration-300 hover:shadow-lg active:shadow-md`}
                  >
                    <svg
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                    VER EXEMPLOS
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA final */}
        <div className="mt-12 md:mt-16 text-center">
          <p className="font-['Inter'] font-500 text-gray-600 text-sm sm:text-base mb-4">
            Quer ver todos os nossos trabalhos em detalhes?
          </p>
          <a
            href="https://wa.me/5500000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#c8102e] text-white font-['Inter'] font-700 text-sm sm:text-base px-8 py-3.5 rounded-lg tracking-wide transition-all duration-300 hover:shadow-lg hover:shadow-[#c8102e]/25 active:shadow-md"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
            </svg>
            FALE CONOSCO E PEÇA SEU ORÇAMENTO
          </a>
        </div>
      </div>
    </section>
  );
}
