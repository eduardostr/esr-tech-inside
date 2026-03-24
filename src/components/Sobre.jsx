import { Reveal } from "./Reveal";

const stats = [
  { number: "100+", label: "Landing pages entregues" },
  { number: "30+",  label: "Nichos atendidos" },
  { number: "3×",   label: "Aumento médio em conversão" },
  { number: "24h",  label: "Resposta garantida" },
];

export default function Sobre() {
  return (
    <section id="sobre"
      className="bg-[#f8f9fa] dark:bg-[#111111] rounded-2xl sm:rounded-[32px] mx-2 sm:mx-[3vw] px-4 sm:px-8 lg:px-[6vw] py-12 sm:py-16 lg:py-20">
      <Reveal>
        <p className="text-[0.68rem] sm:text-[0.72rem] font-semibold tracking-[2.5px] uppercase text-esr-primary mb-3">Quem somos</p>
        <h2 className="font-display font-extrabold text-[#1a1a1a] dark:text-white leading-[1.12] tracking-[-0.5px] max-w-[640px]"
            style={{ fontSize: "clamp(1.7rem, 5vw, 3.2rem)" }}>
          Design que converte. Estratégia que escala.
        </h2>
        <p className="mt-3 sm:mt-4 font-body font-light text-[#555] dark:text-[#aaa] max-w-[520px] leading-[1.75] text-sm sm:text-base">
          Somos uma agência focada em criar landing pages de alta performance para negócios que querem resultados reais. Cada projeto é único, cada detalhe é pensado para converter.
        </p>
      </Reveal>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 mt-10 sm:mt-14 items-center">
        <Reveal delay={0.1}>
          <p className="font-body font-light text-[#555] dark:text-[#aaa] leading-[1.85] text-sm sm:text-[0.95rem]">
            Na ESR Tech Inside, combinamos design estratégico com técnica avançada para entregar landing pages que vão além do visual — elas são construídas para converter. Atendemos negócios de todos os tamanhos e nichos, do lançamento ao escalonamento.
          </p>
          <p className="mt-4 font-body font-light text-[#555] dark:text-[#aaa] leading-[1.85] text-sm sm:text-[0.95rem]">
            Nossa missão é simples: transformar sua presença digital em resultados mensuráveis. Cada pixel tem propósito, cada palavra tem intenção.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="grid grid-cols-2 gap-3 sm:gap-6">
            {stats.map((s) => (
              <div key={s.label}
                className="bg-white dark:bg-[#1c1c1c] rounded-2xl sm:rounded-[20px] p-4 sm:p-7
                  border border-esr-primary/10 dark:border-esr-primary/20
                  hover:-translate-y-1 hover:shadow-esr-card transition-all duration-300">
                <div className="font-display font-black gradient-text text-[1.8rem] sm:text-[2.4rem] leading-none tracking-[-1px]">
                  {s.number}
                </div>
                <div className="mt-1 sm:mt-1.5 font-body text-[0.75rem] sm:text-[0.82rem] text-[#666] dark:text-[#999] leading-snug">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
