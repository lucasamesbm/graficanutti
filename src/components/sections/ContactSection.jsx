// src/components/sections/ContactSection.jsx
export default function ContactSection() {
  function handleSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const nome = form.nome.value.trim();
    const email = form.email.value.trim();
    const telefone = form.telefone.value.trim();
    const assunto = form.assunto.value;
    const mensagem = form.mensagem.value.trim();

    const texto = `*Olá! Vim pelo site e gostaria de fazer um contato.*%0A%0A*Nome:* ${encodeURIComponent(nome)}%0A*E-mail:* ${encodeURIComponent(email)}%0A*Telefone:* ${encodeURIComponent(telefone)}%0A*Assunto:* ${encodeURIComponent(assunto)}%0A*Mensagem:* ${encodeURIComponent(mensagem)}%0A%0AAgradeço desde já!`;

    window.open(`https://wa.me/5500000000000?text=${texto}`, "_blank");
  }

  return (
    <section className="w-full bg-white py-12 md:py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título */}
        <div className="flex flex-col items-center mb-10 md:mb-12 lg:mb-16">
          <h2
            className="font-['Barlow_Condensed'] font-800 text-4xl sm:text-5xl md:text-5xl lg:text-6xl uppercase tracking-tight text-center"
            style={{ color: "#000" }}
          >
            Fale Conosco
          </h2>
          <p
            className="font-['Inter'] font-500 text-base sm:text-lg md:text-lg lg:text-xl mt-3 max-w-2xl text-center leading-relaxed"
            style={{ color: "#000" }}
          >
            Estamos prontos para atender você. Escolha o canal mais prático!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Informações de contato */}
          <div className="space-y-6">
            {/* WhatsApp */}
            <div className="flex items-start gap-4">
              <div className="shrink-0 w-12 h-12 bg-[#c8102e] rounded-xl flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <div>
                <h4 className="font-['Inter'] font-700 text-gray-900 text-base sm:text-lg">
                  WhatsApp
                </h4>
                <a
                  href="https://wa.me/5500000000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-1 font-['Inter'] font-600 text-[#c8102e] text-sm sm:text-base hover:underline"
                >
                  (47) 9 9999-9999
                </a>
              </div>
            </div>

            {/* E-mail */}
            <div className="flex items-start gap-4">
              <div className="shrink-0 w-12 h-12 bg-[#c8102e] rounded-xl flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="M22 4L12 13 2 4" />
                </svg>
              </div>
              <div>
                <h4 className="font-['Inter'] font-700 text-gray-900 text-base sm:text-lg">
                  E-mail
                </h4>
                <a
                  href="mailto:comercial@graficanutti.com.br"
                  className="inline-block mt-1 font-['Inter'] font-600 text-[#c8102e] text-sm sm:text-base hover:underline"
                >
                  comercial@graficanutti.com.br
                </a>
              </div>
            </div>

            {/* Endereço */}
            <div className="flex items-start gap-4">
              <div className="shrink-0 w-12 h-12 bg-[#c8102e] rounded-xl flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div>
                <h4 className="font-['Inter'] font-700 text-gray-900 text-base sm:text-lg">
                  Endereço
                </h4>
                <p className="font-['Inter'] font-500 text-gray-800 text-sm sm:text-base mt-1">
                  Rua Exemplo, 123 — Centro
                  <br />
                  Itajaí — SC
                </p>
              </div>
            </div>

            {/* Horário */}
            <div className="flex items-start gap-4">
              <div className="shrink-0 w-12 h-12 bg-[#c8102e] rounded-xl flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
              </div>
              <div>
                <h4 className="font-['Inter'] font-700 text-gray-900 text-base sm:text-lg">
                  Horário de Atendimento
                </h4>
                <p className="font-['Inter'] font-500 text-gray-800 text-sm sm:text-base mt-1">
                  Seg a Sex: 08h — 18h
                  <br />
                  Sábado: 08h — 12h
                </p>
              </div>
            </div>

            {/* Maps */}
            <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm">
              <iframe
                title="Localização Gráfica Nutti"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.708968707038!2d-48.66396892422669!3d-26.85684997664921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94d8cc54c6b1c1d1%3A0x8e6a5c5c5c5c5c5c!2sItaja%C3%AD%2C%20SC!5e0!3m2!1spt-BR!2sbr!4v1"
                width="100%"
                height="220"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              />
            </div>
          </div>

          {/* Formulário de contato */}
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 sm:p-8">
            <h3 className="font-['Barlow_Condensed'] font-700 text-xl sm:text-2xl text-[#c8102e] uppercase tracking-wider mb-6">
              Envie sua mensagem
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Nome */}
              <div>
                <label className="block font-['Inter'] font-600 text-gray-800 text-sm sm:text-base mb-1.5">
                  Nome <span className="text-[#c8102e]">*</span>
                </label>
                <input
                  type="text"
                  name="nome"
                  required
                  placeholder="Seu nome completo"
                  className="w-full px-4 py-3 font-['Inter'] text-sm sm:text-base text-gray-800 bg-white border border-gray-300 rounded-lg outline-none transition-all duration-200 focus:border-[#c8102e] focus:ring-2 focus:ring-[#c8102e]/20 placeholder:text-gray-400"
                />
              </div>

              {/* E-mail */}
              <div>
                <label className="block font-['Inter'] font-600 text-gray-800 text-sm sm:text-base mb-1.5">
                  E-mail <span className="text-[#c8102e]">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="seu@email.com"
                  className="w-full px-4 py-3 font-['Inter'] text-sm sm:text-base text-gray-800 bg-white border border-gray-300 rounded-lg outline-none transition-all duration-200 focus:border-[#c8102e] focus:ring-2 focus:ring-[#c8102e]/20 placeholder:text-gray-400"
                />
              </div>

              {/* Telefone */}
              <div>
                <label className="block font-['Inter'] font-600 text-gray-800 text-sm sm:text-base mb-1.5">
                  Telefone <span className="text-[#c8102e]">*</span>
                </label>
                <input
                  type="tel"
                  name="telefone"
                  required
                  placeholder="(47) 9 9999-9999"
                  className="w-full px-4 py-3 font-['Inter'] text-sm sm:text-base text-gray-800 bg-white border border-gray-300 rounded-lg outline-none transition-all duration-200 focus:border-[#c8102e] focus:ring-2 focus:ring-[#c8102e]/20 placeholder:text-gray-400"
                />
              </div>

              {/* Assunto */}
              <div>
                <label className="block font-['Inter'] font-600 text-gray-800 text-sm sm:text-base mb-1.5">
                  Assunto <span className="text-[#c8102e]">*</span>
                </label>
                <select
                  name="assunto"
                  required
                  className="w-full px-4 py-3 font-['Inter'] text-sm sm:text-base text-gray-800 bg-white border border-gray-300 rounded-lg outline-none transition-all duration-200 focus:border-[#c8102e] focus:ring-2 focus:ring-[#c8102e]/20"
                >
                  <option value="">Selecione um assunto</option>
                  <option value="orcamento">Solicitar Orçamento</option>
                  <option value="produto">Dúvida sobre Produto</option>
                  <option value="personalizacao">Personalização</option>
                  <option value="pedido">Acompanhar Pedido</option>
                  <option value="outro">Outro</option>
                </select>
              </div>

              {/* Mensagem */}
              <div>
                <label className="block font-['Inter'] font-600 text-gray-800 text-sm sm:text-base mb-1.5">
                  Mensagem <span className="text-[#c8102e]">*</span>
                </label>
                <textarea
                  name="mensagem"
                  required
                  rows={4}
                  placeholder="Descreva sua solicitação..."
                  className="w-full px-4 py-3 font-['Inter'] text-sm sm:text-base text-gray-800 bg-white border border-gray-300 rounded-lg outline-none transition-all duration-200 focus:border-[#c8102e] focus:ring-2 focus:ring-[#c8102e]/20 placeholder:text-gray-400 resize-none"
                />
              </div>

              {/* Botão */}
              <button
                type="submit"
                className="w-full bg-[#c8102e] text-white font-['Inter'] font-700 text-sm sm:text-base px-6 py-3.5 rounded-lg tracking-wide transition-all duration-300 hover:bg-[#a80d26] hover:shadow-lg hover:shadow-[#c8102e]/25 active:shadow-md"
              >
                ENVIAR MENSAGEM
              </button>
            </form>
          </div>
        </div>

        {/* CTA extra */}
        <div className="mt-12 text-center">
          <p className="font-['Inter'] font-500 text-gray-600 text-sm sm:text-base">
            Ou se preferir, chame direto no{" "}
            <a
              href="https://wa.me/5500000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 font-700 hover:underline"
            >
              WhatsApp
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
