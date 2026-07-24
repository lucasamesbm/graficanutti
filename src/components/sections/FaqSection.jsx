// src/components/sections/FaqSection.jsx
import { useState } from "react";

const faqData = [
  {
    category: "Produtos e Tamanhos",
    items: [
      {
        q: "Onde os produtos são feitos?",
        a: "Desde a produção do tecido até a personalização do produto, todos os processos são feitos em nossa fábrica, localizada em Itajaí — SC. Isso faz com que cada etapa seja acompanhada de perto pela nossa equipe, garantindo a qualidade necessária para nossos produtos!",
      },
      {
        q: "Como vou escolher o tamanho?",
        a: "Na página de cada produto, logo abaixo das opções de tamanhos disponíveis, temos uma tabela de medidas. Você pode comparar as medidas das nossas camisetas e camisas polos com algumas peças que você já tem em casa!",
      },
      {
        q: "As medidas informadas são exatas?",
        a: "Não, as medidas informadas podem variar em até 5% (para mais ou para menos) devido ao processo de corte e costura manual. Além disso, as camisetas e camisas polos que tiverem algodão em sua composição podem encolher em até 5% após a primeira lavagem.",
      },
      {
        q: "Como devo lavar minhas camisetas?",
        a: "Orientamos que lave sua peça à mão porque esta operação visa minimizar danos causados à peça e prolonga sua vida útil. Evite o uso de alvejantes, não deixe a peça de molho e procure lavar as peças coloridas separadamente das peças brancas. Nossas peças não soltam tinta, por isso não nos responsabilizamos por produtos danificados com manchas, ok?",
      },
      {
        q: "As camisetas possuem etiqueta?",
        a: "Na Camiseta de Algodão Fio 30.1 Penteada, a etiqueta é costurada internamente na lateral da camiseta — a gola fica livre para personalizar de outra forma! Inclusive, podemos personalizar com impressão em DTF. Nos demais produtos, a etiqueta da Click Camisetas vai costurada na gola. Para pedidos acima de 300 peças do mesmo tecido, modelo e cor, colocamos sua própria etiqueta ou uma só de tamanho!",
      },
    ],
  },
  {
    category: "Tipos de Personalização",
    items: [
      {
        q: "Quais tipos de personalização vocês oferecem?",
        a: "Trabalhamos com sublimação (em camisetas de poliéster), serigrafia e impressão DTF. Pedido mínimo: 20 peças com a mesma estampa. Para calcular o custo, entre em contato pelo e-mail comercial@clickcamisetas.com.br informando: produto (algodão ou poliéster), cor, quantidade e o desenho anexado.",
      },
      {
        q: "O que é sublimação?",
        a: "Sublimação é um processo químico onde a tinta passa do estado sólido (no papel) para o gasoso com calor e pressão, penetrando o tecido. Não há restrições de quantidade de cores — é possível reproduzir gradientes, sombras e brilhos! O único porém: só funciona em produtos 100% poliéster.",
      },
      {
        q: "E a serigrafia, como funciona?",
        a: "A serigrafia (silk-screen) é um processo artesanal onde cada cor é estampada separadamente. Para cada cor do desenho, são gravados quadros em um processo de foto-revelação — a tinta deixa uma pequena textura sob o tecido. Neste processo não é possível reproduzir gradientes, simulações de sombras ou brilhos — as cores precisam ser separadas.",
      },
      {
        q: "O que é DTF?",
        a: "O DTF consiste na impressão de qualquer imagem (com fundo transparente) em um filme especial, que é recortado e aplicado com prensa térmica (150°C por 15 segundos) direto no tecido. As tintas especiais permitem impressões elásticas (não racham), macias ao toque, resistentes à lavagem e ao ferro. Sem restrições de cores — gradientes, sombras e brilhos são 100% possíveis!",
      },
    ],
  },
  {
    category: "Formas de Pagamento",
    items: [
      {
        q: "Quais as formas de pagamento?",
        a: "Trabalhamos com cartão de crédito, boleto, depósito bancário antecipado e PIX.",
      },
      {
        q: "Condições — Cartão de Crédito",
        a: "As compras passam por duas aprovações: da sua operadora e do Pagseguro — isso aumenta a segurança contra cartões clonados. O pagamento é aprovado em até 24 horas (geralmente bem mais rápido). Assim que a confirmação acontecer, você recebe um e-mail. É a partir dessa confirmação que o prazo de produção começa a valer.",
      },
      {
        q: "Condições — Boleto Bancário",
        a: "O site gera o boleto automaticamente. Após o pagamento, a Iugu (operadora) pode levar até dois dias úteis para confirmar. Só então o pedido entra em produção.",
      },
      {
        q: "Condições — Depósito, Transferência ou PIX",
        a: "Ao selecionar essa opção, você recebe nossos dados bancários (Banco do Brasil, Itaú e Sicredi). Após o pagamento, é necessário enviar um e-mail com o número do pedido e o comprovante anexado — só a partir desse e-mail o prazo de produção começa a correr.",
      },
    ],
  },
  {
    category: "Frete e Prazo de Entrega",
    items: [
      {
        q: "Quais as formas de envio?",
        a: "Há três opções: PAC, SEDEX e Transportadoras — variam em prazo e preço. O custo é calculado automaticamente no carrinho: basta digitar seu CEP e escolher a forma de envio.",
      },
      {
        q: "Qual o prazo de entrega?",
        a: "Digite seu CEP no carrinho e confira o prazo para sua localidade. O prazo de produção é de até 10 dias úteis + tempo de transporte. O prazo de entrega é sempre um intervalo de datas — pode ser entregue antes, mas não garantimos uma data diferente do prazo final informado.",
      },
      {
        q: "Quando minha encomenda é enviada?",
        a: "Após a confirmação do pagamento, o pedido entra em produção de acordo com o prazo informado na conclusão da compra — até 10 dias úteis + tempo de transporte.",
      },
      {
        q: "O que fazer se minha entrega está atrasada?",
        a: "Basta enviar um e-mail para atendimento@clickcamisetas.com.br informando o atraso e o número do pedido. Em até 24 horas úteis nossa equipe retorna o contato.",
      },
      {
        q: "O que fazer se minha encomenda não chegar?",
        a: "Caso sua encomenda seja extraviada e não chegue dentro do prazo estipulado, entre em contato conosco. Vamos buscar uma solução imediata para o problema!",
      },
      {
        q: "Meu pedido consta como entregue, mas não recebi. E agora?",
        a: "Pedimos gentilmente que verifique se outra pessoa recebeu por você — vizinho, parente ou funcionário. Caso não localize o pedido, entre em contato para tomarmos providências junto aos Correios ou Transportadoras.",
      },
    ],
  },
  {
    category: "Pedidos e Atendimento",
    items: [
      {
        q: "Qual o pedido mínimo para personalização?",
        a: "Nosso pedido mínimo para personalização é de 20 peças com a mesma estampa.",
      },
      {
        q: "Como faço um orçamento personalizado?",
        a: "Entre em contato pelo e-mail comercial@clickcamisetas.com.br informando: produto desejado (algodão ou poliéster), cor, quantidade e anexe o desenho da estampa. Nosso time retorna com o orçamento em até 24 horas úteis.",
      },
      {
        q: "Posso colocar minha própria etiqueta?",
        a: "Sim! Para pedidos acima de 300 peças do mesmo tecido, modelo e cor (variando somente tamanhos em múltiplos de 5), colocamos sua própria etiqueta ou uma etiqueta só de tamanho.",
      },
    ],
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  function toggle(index) {
    setOpenIndex(openIndex === index ? null : index);
  }

  let globalIndex = 0;

  return (
    <section className="w-full bg-white py-12 md:py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título */}
        <div className="flex flex-col items-center mb-10 md:mb-12 lg:mb-16">
          <h2
            className="font-['Barlow_Condensed'] font-800 text-4xl sm:text-5xl md:text-5xl lg:text-6xl uppercase tracking-tight text-center"
            style={{ color: "#000" }}
          >
            Perguntas Frequentes
          </h2>
          <p
            className="font-['Inter'] font-500 text-base sm:text-lg md:text-lg lg:text-xl mt-3 max-w-2xl text-center leading-relaxed"
            style={{ color: "#000" }}
          >
            Tire suas dúvidas sobre produtos, personalização, pagamento e
            entrega.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-6 md:space-y-8">
          {faqData.map((category, catIndex) => (
            <div key={catIndex}>
              {/* Título da categoria */}
              <h3 className="font-['Barlow_Condensed'] font-700 text-base sm:text-lg md:text-xl text-[#c8102e] uppercase tracking-wider mb-3 pb-2 border-b-2 border-[#c8102e]/20">
                {category.category}
              </h3>

              {/* Perguntas da categoria */}
              <div className="space-y-2">
                {category.items.map((item) => {
                  const currentIndex = globalIndex;
                  globalIndex++;
                  const isOpen = openIndex === currentIndex;

                  return (
                    <div
                      key={currentIndex}
                      className="border border-gray-200 rounded-xl overflow-hidden transition-all duration-200 hover:border-gray-300"
                    >
                      {/* Pergunta (clicável) */}
                      <button
                        onClick={() => toggle(currentIndex)}
                        className={`w-full flex items-center justify-between gap-3 text-left px-4 sm:px-5 md:px-6 py-4 sm:py-4 md:py-5 font-['Inter'] font-600 text-base sm:text-lg md:text-lg transition-all duration-200 ${
                          isOpen
                            ? "bg-[#c8102e] text-white"
                            : "bg-white text-gray-800 hover:bg-gray-50"
                        }`}
                      >
                        <span className="flex-1 leading-snug">{item.q}</span>

                        {/* Ícone + / − */}
                        <span
                          className={`shrink-0 w-7 h-7 md:w-8 md:h-8 flex items-center justify-center rounded-full text-base md:text-lg font-bold transition-all duration-300 ${
                            isOpen
                              ? "bg-white/20 text-white"
                              : "bg-gray-100 text-gray-500"
                          }`}
                        >
                          {isOpen ? "−" : "+"}
                        </span>
                      </button>

                      {/* Resposta (abre/fecha com transição suave) */}
                      <div
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${
                          isOpen ? "max-h-200 opacity-100" : "max-h-0 opacity-0"
                        }`}
                      >
                        <div className="px-4 sm:px-5 md:px-6 py-4 sm:py-4 md:py-5 bg-gray-50 border-t border-gray-100">
                          <p className="font-['Inter'] font-450 text-gray-700 text-base sm:text-lg md:text-lg leading-relaxed">
                            {item.a}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* CTA final */}
        <div className="mt-10 md:mt-12 text-center">
          <p className="font-['Inter'] font-500 text-gray-600 text-sm sm:text-base">
            Ainda ficou com dúvida?{" "}
            <a
              href="https://wa.me/5500000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#c8102e] font-700 hover:underline"
            >
              Fale conosco no WhatsApp
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
