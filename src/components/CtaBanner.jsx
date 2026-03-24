import { Reveal } from "./Reveal";

export default function CtaBanner() {
  return (
    <Reveal>
      <div className="relative mx-2 sm:mx-[3vw] rounded-2xl sm:rounded-[32px] bg-esr-gradient
        px-4 sm:px-[6vw] lg:px-[8vw] py-12 sm:py-16 lg:py-20 text-center overflow-hidden">
        <div className="pointer-events-none absolute -top-2/5 -left-1/5 w-3/5 h-[200%] bg-white/[.07] rounded-full" />
        <div className="pointer-events-none absolute -bottom-2/5 -right-[10%] w-1/2 h-[180%] bg-white/[.05] rounded-full" />

        <h2 className="relative z-10 font-display font-black text-white tracking-[-0.5px]"
            style={{ fontSize: "clamp(1.6rem, 5vw, 3.2rem)" }}>
          Pronto para converter mais?
        </h2>
        <p className="relative z-10 mt-3 sm:mt-4 font-body font-light text-white/90 text-sm sm:text-base max-w-[480px] mx-auto">
          Fale com a nossa equipe e receba uma proposta personalizada para o seu negócio.
        </p>
        <a href="#contato"
          className="relative z-10 inline-block mt-7 sm:mt-9 font-display font-bold text-[0.9rem] sm:text-[0.95rem] text-esr-primary bg-white
            px-8 sm:px-10 py-3.5 sm:py-[15px] rounded-full no-underline shadow-[0_8px_32px_rgba(0,0,0,.2)]
            hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(0,0,0,.25)] transition-all duration-200">
          Começar agora →
        </a>
      </div>
    </Reveal>
  );
}
