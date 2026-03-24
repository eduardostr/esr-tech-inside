import { Reveal } from "./Reveal";

const steps = [
  { n: "01", title: "Briefing & Estratégia",  desc: "Entendemos seu negócio, público-alvo e objetivos para traçar a estratégia ideal de conversão." },
  { n: "02", title: "Design & Prototipagem",  desc: "Criamos o layout com foco total em UX, hierarquia visual e gatilhos de conversão." },
  { n: "03", title: "Desenvolvimento",         desc: "Codificamos com tecnologia moderna, garantindo velocidade, responsividade e performance." },
  { n: "04", title: "Entrega & Suporte",       desc: "Publicamos sua página e acompanhamos os primeiros resultados para ajustes se necessário." },
];

export default function Processo() {
  return (
    <section id="processo"
      className="bg-[#f8f9fa] dark:bg-[#111111] rounded-2xl sm:rounded-[32px] mx-2 sm:mx-[3vw] px-4 sm:px-8 lg:px-[6vw] py-12 sm:py-16 lg:py-20">
      <Reveal>
        <p className="text-[0.68rem] sm:text-[0.72rem] font-semibold tracking-[2.5px] uppercase text-esr-primary mb-3">Como funciona</p>
        <h2 className="font-display font-extrabold text-[#1a1a1a] dark:text-white leading-[1.12] tracking-[-0.5px] max-w-[640px]"
            style={{ fontSize: "clamp(1.7rem, 5vw, 3.2rem)" }}>
          Do briefing ao ar em 4 etapas simples
        </h2>
        <p className="mt-3 sm:mt-4 font-body font-light text-[#555] dark:text-[#aaa] max-w-[520px] leading-[1.75] text-sm sm:text-base">
          Processo ágil, comunicação clara e entrega que supera expectativas.
        </p>
      </Reveal>

      {/* Mobile: vertical timeline | Tablet: 2-col | Desktop: 4-col */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-10 sm:mt-14">
        {steps.map((s, i) => (
          <Reveal key={s.n} delay={i * 0.08}>
            <div className="relative flex sm:block gap-4 sm:gap-0">
              {/* Mobile: vertical line connector */}
              {i < steps.length - 1 && (
                <div className="sm:hidden absolute left-[22px] top-[52px] w-px h-[calc(100%+24px)] bg-gradient-to-b from-esr-primary/30 to-transparent" />
              )}
              <div className="font-display font-black gradient-text text-[2.8rem] sm:text-[3.5rem] leading-none tracking-[-1px] opacity-30 dark:opacity-40 mb-0 sm:mb-4 flex-shrink-0 w-12 sm:w-auto">
                {s.n}
              </div>
              <div className="pt-1 sm:pt-0">
                <h4 className="font-display font-bold text-[#1a1a1a] dark:text-white text-sm sm:text-base tracking-[-0.3px] mb-1.5 sm:mb-2.5">
                  {s.title}
                </h4>
                <p className="font-body font-light text-[#555] dark:text-[#999] text-[0.82rem] sm:text-[0.85rem] leading-[1.7]">
                  {s.desc}
                </p>
              </div>
              {/* Desktop: horizontal connector */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-6 right-[-16px] w-8 h-px bg-gradient-to-r from-esr-primary/40 to-transparent" />
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
