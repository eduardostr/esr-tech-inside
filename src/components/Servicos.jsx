import { Reveal } from "./Reveal";

const services = [
  {
    icon: (<svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6 text-white"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M3 9h18M9 21V9"/></svg>),
    title: "Landing Page Completa",
    desc:  "Página de captura ou vendas com design exclusivo, totalmente responsiva e otimizada para conversão.",
  },
  {
    icon: (<svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6 text-white"><path d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>),
    title: "Redesign e Otimização",
    desc:  "Transformamos sua página existente em uma máquina de vendas com melhorias estratégicas e visuais.",
  },
  {
    icon: (<svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6 text-white"><path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>),
    title: "Teste A/B e Analytics",
    desc:  "Configuramos e monitoramos testes para identificar o que converte mais e escalar seus resultados.",
  },
  {
    icon: (<svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6 text-white"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20"/></svg>),
    title: "SEO & Performance",
    desc:  "Otimizamos cada página para carregar rápido e aparecer nos buscadores, gerando tráfego orgânico.",
  },
  {
    icon: (<svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6 text-white"><rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01"/></svg>),
    title: "Design Responsivo",
    desc:  "Todas as páginas são perfeitamente adaptadas para mobile, tablet e desktop, sem exceção.",
  },
  {
    icon: (<svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6 text-white"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>),
    title: "Entrega Expressa",
    desc:  "Precisa de urgência? Temos planos de entrega rápida sem abrir mão da qualidade e dos resultados.",
  },
];

export default function Servicos() {
  return (
    <section id="servicos" className="bg-white dark:bg-[#0a0a0a] px-4 sm:px-8 lg:px-[6vw] py-12 sm:py-16 lg:py-24">
      <Reveal>
        <p className="text-[0.68rem] sm:text-[0.72rem] font-semibold tracking-[2.5px] uppercase text-esr-primary mb-3">O que fazemos</p>
        <h2 className="font-display font-extrabold text-[#1a1a1a] dark:text-white leading-[1.12] tracking-[-0.5px] max-w-[640px]"
            style={{ fontSize: "clamp(1.7rem, 5vw, 3.2rem)" }}>
          Soluções completas para sua presença digital
        </h2>
        <p className="mt-3 sm:mt-4 font-body font-light text-[#555] dark:text-[#aaa] max-w-[520px] leading-[1.75] text-sm sm:text-base">
          Do briefing ao ar, cuidamos de tudo para que sua página converta ao máximo.
        </p>
      </Reveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 mt-10 sm:mt-14">
        {services.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.05}>
            <div className="bg-[#f8f9fa] dark:bg-[#141414] rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10
              border border-transparent dark:border-white/5
              hover:border-esr-primary/25 hover:-translate-y-1 sm:hover:-translate-y-1.5 hover:shadow-esr-card
              transition-all duration-300 h-full">
              <div className="w-[44px] h-[44px] sm:w-[52px] sm:h-[52px] rounded-xl sm:rounded-2xl bg-esr-gradient flex items-center justify-center mb-4 sm:mb-6 shadow-esr-sm">
                {s.icon}
              </div>
              <h3 className="font-display font-bold text-[#1a1a1a] dark:text-white text-[1rem] sm:text-[1.15rem] tracking-[-0.3px] mb-2 sm:mb-3">
                {s.title}
              </h3>
              <p className="font-body font-light text-[#555] dark:text-[#999] text-[0.82rem] sm:text-[0.88rem] leading-[1.7]">
                {s.desc}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
