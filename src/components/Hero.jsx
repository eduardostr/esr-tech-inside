import { useState, useEffect, useRef } from "react";

// Duas frases alternadas com cores distintas
const PHRASES = [
  { text: "Sua ideia no ar,",               color: "white"    }, // branco
  { text: "Seu cliente pronto pra comprar.", color: "gradient" }, // azul/roxo
];

const TYPE_SPEED        = 65;
const ERASE_SPEED       = 30;
const PAUSE_AFTER_TYPE  = 1800;
const PAUSE_AFTER_ERASE = 300;

function useTypewriterAlternate(phrases) {
  const [displayed, setDisplayed]   = useState("");
  const [phraseIdx, setPhraseIdx]   = useState(0);
  const stateRef = useRef({ index: 0, erasing: false, phrase: 0 });
  const timerRef = useRef(null);

  useEffect(() => {
    function tick() {
      const s    = stateRef.current;
      const text = phrases[s.phrase].text;

      if (!s.erasing) {
        if (s.index < text.length) {
          s.index += 1;
          setDisplayed(text.slice(0, s.index));
          timerRef.current = setTimeout(tick, TYPE_SPEED);
        } else {
          // terminou de digitar → pausa → começa a apagar
          timerRef.current = setTimeout(() => {
            s.erasing = true;
            tick();
          }, PAUSE_AFTER_TYPE);
        }
      } else {
        if (s.index > 0) {
          s.index -= 1;
          setDisplayed(text.slice(0, s.index));
          timerRef.current = setTimeout(tick, ERASE_SPEED);
        } else {
          // terminou de apagar → troca frase → pausa → começa a digitar
          timerRef.current = setTimeout(() => {
            s.erasing = false;
            s.phrase  = (s.phrase + 1) % phrases.length;
            setPhraseIdx(s.phrase);
            tick();
          }, PAUSE_AFTER_ERASE);
        }
      }
    }

    timerRef.current = setTimeout(tick, 700);
    return () => clearTimeout(timerRef.current);
  }, []); // eslint-disable-line

  return { displayed, phraseIdx };
}

export default function Hero() {
  const { displayed, phraseIdx } = useTypewriterAlternate(PHRASES);
  const isGradient = PHRASES[phraseIdx].color === "gradient";

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col items-center justify-center text-center
        px-4 sm:px-8 lg:px-[6vw] pt-[80px] sm:pt-[100px] pb-[80px] overflow-hidden bg-white dark:bg-[#0a0a0a]"
    >
      <div className="pointer-events-none absolute inset-0" style={{
        background: "radial-gradient(ellipse 60% 50% at 50% -10%, rgba(102,126,234,.18) 0%, transparent 70%), radial-gradient(ellipse 40% 40% at 90% 80%, rgba(118,75,162,.14) 0%, transparent 60%)",
      }} />

      {/* Badge */}
      <span className="animate-fade-up relative inline-flex items-center gap-2
        bg-esr-primary/[.08] dark:bg-esr-primary/[.15]
        border border-esr-primary/20 dark:border-esr-primary/40
        rounded-full px-3 sm:px-[18px] py-[6px] sm:py-[7px]
        text-[0.68rem] sm:text-[0.78rem] font-semibold text-esr-primary
        uppercase tracking-[0.5px] mb-5 sm:mb-7 text-center max-w-[90vw]">
        <span className="animate-pulse-dot w-[6px] h-[6px] rounded-full bg-esr-primary inline-block flex-shrink-0" />
        Agência Especializada em Landing Pages
      </span>

      {/* Heading */}
      <h1
        className="animate-fade-up-1 font-display font-black
          w-full max-w-[340px] sm:max-w-[640px] lg:max-w-[860px]
          leading-[1.1] sm:leading-[1.06] tracking-[-0.5px] sm:tracking-[-1px]
          min-h-[3.5em] sm:min-h-[2.2em] flex items-center justify-center"
        style={{ fontSize: "clamp(1.9rem, 6vw, 4.4rem)" }}
      >
        <span>
          {/* Texto com cor dinâmica por frase */}
          {isGradient ? (
            <span className="gradient-text">{displayed}</span>
          ) : (
            <span className="text-[#1a1a1a] dark:text-white">{displayed}</span>
          )}

          {/* Cursor piscante */}
          <span
            aria-hidden="true"
            style={{
              display: "inline-block",
              width: "clamp(2px, 0.45vw, 4px)",
              height: "0.82em",
              marginLeft: "3px",
              borderRadius: "2px",
              verticalAlign: "middle",
              background: isGradient
                ? "linear-gradient(135deg,#667eea,#764ba2)"
                : "currentColor",
              animation: "blink-cursor 0.7s step-start infinite",
            }}
          />
        </span>
      </h1>

      {/* Sub */}
      <p className="animate-fade-up-2 mt-4 sm:mt-6 font-body font-light text-[#444] dark:text-[#b0b0b0]
        max-w-[320px] sm:max-w-[500px] leading-[1.7] text-[0.95rem] sm:text-[1.05rem]">
        Criamos landing pages que transformam visitantes em clientes — para qualquer nicho, com design que vende.
      </p>

      {/* CTAs */}
      <div className="animate-fade-up-3 mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 items-center w-full max-w-[320px] sm:max-w-none justify-center">
        <a href="#contato"
          className="w-full sm:w-auto font-display font-bold text-[0.9rem] sm:text-[0.95rem] text-white bg-esr-gradient
            px-8 sm:px-9 py-4 sm:py-[15px] rounded-full no-underline shadow-esr-md text-center
            hover:-translate-y-0.5 hover:shadow-esr-lg transition-all duration-200">
          Quero minha Landing Page
        </a>
        <a href="#servicos"
          className="w-full sm:w-auto font-display font-semibold text-[0.9rem] sm:text-[0.95rem] text-[#1a1a1a] dark:text-white
            border border-[#1a1a1a]/20 dark:border-white/25
            px-8 sm:px-9 py-4 sm:py-[15px] rounded-full no-underline text-center
            hover:border-esr-primary hover:text-esr-primary transition-all duration-200">
          Ver serviços
        </a>
      </div>

      {/* Scroll hint */}
      <div className="animate-fade-up-6 hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-[0.72rem] uppercase tracking-[1.5px] text-[#1a1a1a]/40 dark:text-white/40">
        <div className="relative w-px h-10 bg-[#1a1a1a]/25 dark:bg-white/20 overflow-hidden">
          <span className="absolute left-0 w-full h-full bg-esr-primary" style={{ animation: "scroll-line 2s 1s infinite" }} />
        </div>
        <span>Scroll</span>
      </div>
    </section>
  );
}
