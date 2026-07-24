// src/components/sections/DifferentialSection.jsx
const ITEMS = [
  {
    title: "Arte Grátis",
    desc: "Nossa equipe de designers cria ou finaliza sua arte sem custo adicional. Você só aprova e a gente produz.",
  },
  {
    title: "Sem Pedido Mínimo",
    desc: "Produzimos desde 1 unidade até grandes lotes. Preço justo pra qualquer volume, sem burocracia.",
  },
  {
    title: "Entrega que cumpre",
    desc: "Produção acelerada com prazo reduzido. Pedido urgente tem prioridade máxima na fila.",
  },
  {
    title: "Atendimento de verdade",
    desc: "Sem robô, sem chatbot. Você fala com quem produz, no WhatsApp ou telefone, em minutos.",
  },
];

export default function DifferentialSection() {
  const msg = encodeURIComponent("Olá! Quero saber mais sobre a estamparia.");

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          {/* ESQUERDA — texto */}
          <div className="order-1 lg:order-1 lg:sticky lg:top-28 lg:self-start flex flex-col gap-8 lg:gap-8">
            <span className="font-['Barlow_Condensed'] font-700 text-red-600 text-lg tracking-[0.2em] uppercase">
              Por que a Gráfica NUTTI?
            </span>

            <h2 className="font-['Barlow_Condensed'] font-900 text-6xl sm:text-7xl lg:text-8xl uppercase leading-[0.92]">
              <span className="text-black">Estamparia</span>
              <br />
              <span className="text-black">de </span>
              <span className="text-red-600">verdade</span>
              <br />
              <span className="text-black">pra quem realmente</span>{" "}
              <span className="text-green-600">usa</span>
            </h2>

            <p className="font-['Barlow'] text-gray-700 text-xl leading-relaxed">
              A Nutti nasceu da costura entre a criação e a produção. Não
              terceirizamos, não enrolamos. Cada estampa sai da nossa mesa pro
              seu evento, loja ou time com o cuidado de quem coloca a mão na
              máquina todos os dias.
            </p>

            <a
              href={`https://wa.me/5500000000000?text=${msg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white font-['Barlow_Condensed'] font-700 text-xl px-6 py-3 rounded-lg tracking-wider transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 self-start"
            >
              Falar com a equipe
            </a>

            <div className="pt-6 border-t border-gray-200">
              <div className="grid grid-cols-3 gap-8">
                {[
                  { num: "10+", label: "anos de estrada" },
                  { num: "5mil+", label: "pedidos" },
                  { num: "98%", label: "clientes felizes" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p className="font-['Barlow_Condensed'] font-800 text-3xl lg:text-4xl text-green-600 leading-none">
                      {stat.num}
                    </p>
                    <p className="font-['Barlow'] text-sm lg:text-base text-gray-500 mt-1">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* DIREITA — cards com cores alternadas */}
          <div className="order-2 lg:order-2 space-y-5">
            {ITEMS.map((item, index) => {
              const isRed = index % 2 === 0;
              const borderColor = isRed ? "border-red-600" : "border-green-600";
              const bgColor = isRed ? "bg-red-50/20" : "bg-green-50/20";

              return (
                <div
                  key={item.title}
                  className={`p-5 lg:p-6 rounded-2xl border-[3px] ${borderColor} ${bgColor} transition-all duration-200 hover:-translate-y-0.5 cursor-default`}
                >
                  <h3 className="font-['Barlow_Condensed'] font-700 text-xl lg:text-2xl text-gray-900 mb-1.5">
                    {item.title}
                  </h3>
                  <p className="font-['Barlow'] text-gray-600 text-base lg:text-lg leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
