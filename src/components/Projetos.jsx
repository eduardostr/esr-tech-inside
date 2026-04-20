import { useState, useRef } from "react";
import { Reveal } from "./Reveal";
import { useTheme } from "../ThemeContext";

const projects = [
  {
    title: "EmbaLimp",
    category: "Site Institucional",
    desc: "Site para empresa de limpeza e descartáveis com foco em qualidade, variedade e o melhor atendimento da região.",
    url: "https://embalimplf.com/",
    preview: (
      <>
        <img src="/Shot_Embalimp.png"        alt="EmbaLimp" className="hidden sm:block w-full h-full object-cover object-top" />
        <img src="/Shot_Embalimp_Mobile.png" alt="EmbaLimp" className="block sm:hidden w-full h-full object-cover object-top" />
      </>
    ),
    detalhes: {
      sobre: "A loja é especializada na venda de produtos de limpeza, descartáveis e embalagens, atendendo tanto clientes finais quanto principalmente empresas e comércios.",
      tecnologias: ["HTML", "CSS", "Tailwind", "JavaScript", "React"],
    },
  },
  {
    title: "Café Delícia Creme",
    category: "Site Institucional",
    desc: "Site para cafeteria artesanal com foco em apresentar o cardápio, ambiente acolhedor e facilitar o contato com os clientes.",
    url: "https://cafedeliciacreme.vercel.app/",
    preview: (
      <>
        <img src="/Shot_CaféDeliciaCreme.png"        alt="Café Delícia Creme" className="hidden sm:block w-full h-full object-cover object-top" />
        <img src="/Shot_CaféDeliciaCreme_Mobile.png" alt="Café Delícia Creme" className="block sm:hidden w-full h-full object-cover object-top" />
      </>
    ),
    detalhes: {
      sobre: "O Café Delícia Creme nasceu da dedicação de Rosi Dantas com a proposta de oferecer cafés gourmet de forma prática e moderna. Atuando no modelo de entregas sob encomenda, a marca se destaca em Lauro de Freitas pela qualidade, conveniência e experiência única em cada pedido.",
      tecnologias: ["HTML", "CSS", "Tailwind", "JavaScript", "React"],
    },
  },
];

/* ── Arrow button ── */
function Arrow({ dir, onClick, disabled }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`w-9 h-9 sm:w-11 sm:h-11 rounded-full border flex items-center justify-center
        transition-all duration-200 cursor-pointer flex-shrink-0
        ${disabled
          ? "border-white/10 text-white/20 cursor-not-allowed"
          : "border-white/30 text-white/80 bg-black/30 backdrop-blur-sm hover:border-[#667eea]/60 hover:text-[#667eea] hover:bg-[#667eea]/10 hover:scale-110 active:scale-95"
        }`}
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3.5 h-3.5 sm:w-4 sm:h-4">
        {dir === "left"
          ? <path d="M15 18l-6-6 6-6" />
          : <path d="M9 18l6-6-6-6" />}
      </svg>
    </button>
  );
}

/* ── Main component ── */

export default function Projetos() {
  const { dark } = useTheme();
  const [current, setCurrent] = useState(0);
  const [modal, setModal] = useState(null);
  const prevRef = useRef(0);
  const touchStartX = useRef(0);

  const navigate = (dir) => {
    prevRef.current = current;
    setCurrent(i => dir === "right"
      ? Math.min(projects.length - 1, i + 1)
      : Math.max(0, i - 1)
    );
  };

  const goTo = (i) => {
    if (i === current) return;
    prevRef.current = current;
    setCurrent(i);
  };

  const prev = () => navigate("left");
  const next = () => navigate("right");

  const handleTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; };
  const handleTouchEnd = (e) => {
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 40) dx < 0 ? next() : prev();
  };

  return (
    <section
      id="projetos"
      className="bg-section-projetos px-4 sm:px-8 lg:px-[6vw] py-16 sm:py-20 lg:py-28 overflow-hidden"
    >
      {/* Header */}
      <Reveal>
        <div className="text-center mb-10 sm:mb-14 lg:mb-16">
          <h2
            className="font-display font-black text-gray-900 dark:text-white leading-[1.12] tracking-tight"
            style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
          >
            Confira Alguns de{" "}
            <span className="gradient-text">Nossos Projetos</span>
          </h2>
          <p className="mt-3 font-body text-gray-500 dark:text-[#8a9ab8] max-w-[500px] mx-auto leading-relaxed text-sm sm:text-base">
            Projetos desenvolvidos com foco em performance, design moderno e resultados reais para nossos clientes.
          </p>
        </div>
      </Reveal>

      {/* Carousel */}
      <Reveal delay={0.1}>
        <div className="flex flex-col items-center gap-5 sm:gap-6 overflow-x-hidden">

          {/* Setas fora do card, em linha */}
          <div
            className="flex items-center gap-2 sm:gap-4 lg:gap-5 w-full justify-center overflow-x-hidden"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {/* Seta esquerda */}
            <div className="flex-shrink-0">
              {projects.length > 1
                ? <Arrow dir="left" onClick={prev} disabled={current === 0} />
                : <div className="w-9 sm:w-11" />}
            </div>

            {/* Track */}
            <div className="relative flex-1 max-w-[860px] aspect-[9/16] sm:aspect-[1920/905] rounded-2xl overflow-hidden">
              {projects.map((p, i) => {
                const isActive = i === current;
                const wasActive = prevRef.current === i;
                if (!isActive && !wasActive) return null;

                return (
                  <div
                    key={p.title}
                    style={{
                      position: "absolute",
                      inset: 0,
                      transition: "opacity 480ms ease",
                      opacity: isActive ? 1 : 0,
                      pointerEvents: isActive ? "auto" : "none",
                      zIndex: isActive ? 2 : 1,
                    }}
                  >
                    <div
                      className="w-full h-full border border-[#667eea]/35 shadow-2xl"
                      style={{ background: dark ? "linear-gradient(160deg,#0d1f3c,#060d1f)" : "#ffffff" }}
                    >
                      <div className="w-full h-full">{p.preview}</div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Seta direita */}
            <div className="flex-shrink-0">
              {projects.length > 1
                ? <Arrow dir="right" onClick={next} disabled={current === projects.length - 1} />
                : <div className="w-9 sm:w-11" />}
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => setModal(projects[current])}
              className="font-display font-semibold text-sm text-white bg-esr-gradient
                px-6 py-3 rounded-xl border-none cursor-pointer shadow-esr-sm
                hover:-translate-y-1 hover:scale-[1.04] hover:shadow-esr-md
                active:translate-y-0 active:scale-100
                transition-all duration-200"
            >
              Ver detalhes
            </button>
            <a
              href={projects[current]?.url || "#contato"}
              target={projects[current]?.url ? "_blank" : "_self"}
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 font-display font-semibold text-sm text-gray-500 dark:text-[#8a9ab8]
                border border-gray-200 dark:border-white/15 px-6 py-3 rounded-xl no-underline
                hover:border-[#667eea]/50 hover:text-[#667eea] hover:-translate-y-1 hover:scale-[1.04]
                hover:shadow-[0_4px_14px_rgba(102,126,234,0.15)]
                active:translate-y-0 active:scale-100
                transition-all duration-200"
            >
              Ver site
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3.5 h-3.5">
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
              </svg>
            </a>
          </div>

        </div>
      </Reveal>

      {/* Modal de detalhes */}
      {modal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: dark ? "rgba(6,13,31,0.85)" : "rgba(0,0,0,0.45)", backdropFilter: "blur(6px)" }}
          onClick={() => setModal(null)}
        >
          <div
            className="relative w-full max-w-[780px] rounded-2xl border shadow-2xl overflow-hidden"
            style={{
              background: dark ? "linear-gradient(160deg,#0d1f3c,#060d1f)" : "#ffffff",
              borderColor: dark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.08)",
              maxHeight: "90dvh",
            }}
            onClick={e => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={() => setModal(null)}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 w-8 h-8 rounded-full flex items-center justify-center
                transition-all duration-200 cursor-pointer z-10
                bg-gray-100 dark:bg-white/15 text-gray-500 dark:text-white/80
                hover:text-gray-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-white/25
                border border-gray-200 dark:border-white/20"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>

            {/* Content — scrollável no mobile */}
            <div className="p-5 sm:p-8 flex flex-col gap-5 sm:gap-6 overflow-y-auto" style={{ maxHeight: "90dvh" }}>
              <div className="pr-8">
                <h3 className="font-display font-black text-gray-900 dark:text-white text-2xl sm:text-3xl">
                  {modal.title}
                </h3>
                <p className="text-[#667eea] text-sm font-medium mt-1">Detalhes do projeto</p>
              </div>

              <div>
                <h4 className="font-display font-bold text-gray-900 dark:text-white text-base mb-2">Sobre o projeto</h4>
                <p className="font-body text-gray-600 dark:text-[#c8d0e0] text-sm leading-[1.8]">
                  {modal.detalhes?.sobre}
                </p>
              </div>

              {modal.detalhes?.tecnologias?.length > 0 && (
                <div>
                  <h4 className="font-display font-bold text-gray-900 dark:text-white text-base mb-3">Tecnologias utilizadas</h4>
                  <div className="flex flex-wrap gap-2">
                    {modal.detalhes.tecnologias.map(t => (
                      <span key={t}
                        className="px-3 py-1 rounded-full text-xs font-semibold text-[#667eea]
                          bg-[#667eea]/10 border border-[#667eea]/25">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex justify-end pt-1">
                <a
                  href={modal.url || "#contato"}
                  target={modal.url ? "_blank" : "_self"}
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 font-display font-bold text-sm text-white
                    bg-esr-gradient px-6 py-3 rounded-xl no-underline
                    hover:-translate-y-px hover:shadow-esr-md transition-all duration-200"
                >
                  Ver projeto completo
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3.5 h-3.5">
                    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
