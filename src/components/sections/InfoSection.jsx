// src/components/sections/InfoSection.jsx
import { CreditCard, Truck, Gift } from "lucide-react";

export default function InfoSection() {
  const infos = [
    {
      icon: CreditCard,
      title: "PAGAMENTO",
      description: "Aceitamos PIX, BOLETO ou CARTÃO em até 10x sem juros",
    },
    {
      icon: Truck,
      title: "ENVIO",
      description: "Envio em até 15 dias úteis + tempo de transporte",
    },
    {
      icon: Gift,
      title: "DESCONTOS",
      description: "Descontos em pedidos acima de 100 peças",
    },
  ];

  return (
    <section className="w-full bg-white px-0 lg:px-12 lg:max-w-7xl lg:mx-auto">
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 py-8 md:py-12">
        {infos.map((info, index) => {
          const Icon = info.icon;
          return (
            <div
              key={index}
              className="flex flex-col items-center text-center px-4 md:px-2"
            >
              {/* Ícone */}
              <div className="mb-4 md:mb-3">
                <Icon
                  className="w-12 h-12 md:w-10 md:h-10 text-gray-800"
                  strokeWidth={1.5}
                />
              </div>

              {/* Título */}
              <h3 className="text-sm md:text-xs font-bold text-gray-800 mb-2 uppercase tracking-wide">
                {info.title}
              </h3>

              {/* Descrição */}
              <p className="text-xs md:text-xs text-gray-600 leading-relaxed">
                {info.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
