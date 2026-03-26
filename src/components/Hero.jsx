import { useState, useEffect, useRef } from "react";

// Hook de efeito typewriter
function useTypewriter(text, { speed = 60, delay = 900 } = {}) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone]           = useState(false);
  const indexRef = useRef(0);

  useEffect(() => {
    setDisplayed("");
    setDone(false);
    indexRef.current = 0;

    const start = setTimeout(() => {
      const interval = setInterval(() => {
        indexRef.current += 1;
        setDisplayed(text.slice(0, indexRef.current));
        if (indexRef.current >= text.length) {
          clearInterval(interval);
          setDone(true);
        }
      }, speed);
      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(start);
  }, [text, speed, delay]);

  return { displayed, done };
}

export default function Hero() {
  const line1 = "Sua ideia,";
  const line2 = "convertida.";

  // Linha 1 começa logo
  const t1 = useTypewriter(line1, { speed: 70, delay: 600 });
  // Linha 2 começa após a 1 terminar (delay = tempo da linha1 + pausa)
  const t2 = useTypewriter(line2, {
    speed: 70,
    delay: 600 + line1.length * 70 + 200,
  });

  // Cursor pisca na linha ativa; some depois que linha2 termina
  const showCursor1 = !t1.done;
  const showCursor2 = t1.done && !t2.done;
  const hideCursor  = t2.done;

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

      {/* Heading com typewriter */}
      <h1
        className="animate-fade-up-1 font-display font-black text-[#1a1a1a] dark:text-white
          w-full max-w-[340px] sm:max-w-[600px] lg:max-w-[800px]
          leading-[1.08] sm:leading-[1.04] tracking-[-0.5px] sm:tracking-[-1px]"
        style={{ fontSize: "clamp(2.2rem, 8vw, 5.4rem)" }}
      >
        {/* Linha 1 */}
        <span>
          {t1.displayed}
          {showCursor1 && <Cursor />}
        </span>

        {/* Linha 2 — só renderiza quando linha 1 terminar */}
        {t1.done && (
          <>
            {" "}
            <span className="gradient-text">
              {t2.displayed}
              {showCursor2 && <Cursor gradient />}
              {/* Cursor final some com fade */}
              {hideCursor && <CursorFade gradient />}
            </span>
          </>
        )}
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

/* Cursor piscante — cor sólida (linha 1) ou gradiente (linha 2) */
function Cursor({ gradient = false }) {
  return (
    <span
      aria-hidden="true"
      style={{
        display: "inline-block",
        width: "3px",
        marginLeft: "4px",
        borderRadius: "2px",
        verticalAlign: "baseline",
        height: "0.85em",
        background: gradient
          ? "linear-gradient(135deg,#667eea,#764ba2)"
          : "currentColor",
        animation: "blink-cursor 0.75s step-start infinite",
      }}
    />
  );
}

/* Cursor que aparece no fim e some com fade */
function CursorFade({ gradient = false }) {
  return (
    <span
      aria-hidden="true"
      style={{
        display: "inline-block",
        width: "3px",
        marginLeft: "4px",
        borderRadius: "2px",
        verticalAlign: "baseline",
        height: "0.85em",
        background: gradient
          ? "linear-gradient(135deg,#667eea,#764ba2)"
          : "currentColor",
        animation: "cursor-fade-out 0.8s 0.4s ease forwards",
      }}
    />
  );
}
