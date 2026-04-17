import { useState } from "react";
import { Reveal } from "./Reveal";
import { useTheme } from "../ThemeContext";

const projects = [
  {
    title: "EmbaLimp",
    category: "Site Institucional",
    desc: "Site para empresa de limpeza e descartáveis com foco em qualidade, variedade e o melhor atendimento da região.",
    url: "https://embalimplf.com/",
    preview: <img src="/Shot_Embalimp.png" alt="EmbaLimp" className="w-full h-full object-cover object-top" />,
    detalhes: {
      sobre: "A loja é especializada na venda de produtos de limpeza, descartáveis e embalagens, atendendo tanto clientes finais quanto principalmente empresas e comércios.",
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
      className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-200 cursor-pointer flex-shrink-0
        ${disabled
          ? "border-white/10 text-white/20 cursor-not-allowed"
          : "border-white/20 text-white/70 hover:border-[#667eea]/60 hover:text-[#667eea] hover:bg-[#667eea]/10"
        }`}
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4">
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
  const [modal, setModal] = useState(null); // project object or null

  const prev = () => setCurrent(i => Math.max(0, i - 1));
  const next = () => setCurrent(i => Math.min(projects.length - 1, i + 1));

  return (
    <section
      id="projetos"
      className="bg-section-projetos px-4 sm:px-8 lg:px-[6vw] py-16 sm:py-20 lg:py-28 overflow-hidden"
    >
      {/* Header */}
      <Reveal>
        <div className="text-center mb-12 sm:mb-16">
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

      {/* Cards */}
      <Reveal delay={0.1}>
        <div className="flex flex-col items-center gap-6 max-w-[778px] mx-auto">

          {/* Card */}
          {projects.map((p, i) => {
            if (i !== current) return null;
            return (
              <div
                key={p.title}
                className="w-full rounded-2xl overflow-hidden border border-[#667eea]/35 shadow-2xl
                  transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_24px_60px_rgba(102,126,234,0.2)]"
                style={{ background: dark ? "linear-gradient(160deg,#0d1f3c,#060d1f)" : "#ffffff" }}
              >
                <div className="w-full aspect-[778/448] overflow-hidden">
                  {p.preview}
                </div>
              </div>
            );
          })}

          {/* Buttons — abaixo do card */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setModal(projects[current])}
              className="font-display font-semibold text-sm text-white bg-esr-gradient
                px-6 py-3 rounded-xl border-none cursor-pointer shadow-esr-sm
                hover:-translate-y-1 hover:scale-[1.04] hover:shadow-esr-md
                active:translate-y-0 active:scale-100
                transition-all duration-200">
              Ver detalhes
            </button>
            <a href={projects[current]?.url || "#contato"}
              target={projects[current]?.url ? "_blank" : "_self"} rel="noreferrer"
              className="inline-flex items-center gap-1.5 font-display font-semibold text-sm text-gray-500 dark:text-[#8a9ab8]
                border border-gray-200 dark:border-white/15 px-6 py-3 rounded-xl no-underline
                hover:border-[#667eea]/50 hover:text-[#667eea] hover:-translate-y-1 hover:scale-[1.04]
                hover:shadow-[0_4px_14px_rgba(102,126,234,0.15)]
                active:translate-y-0 active:scale-100
                transition-all duration-200">
              Ver site
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3.5 h-3.5">
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
              </svg>
            </a>
          </div>

          {/* Dots — visível quando houver mais projetos */}
          {projects.length > 1 && (
            <div className="flex justify-center gap-2">
              {projects.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`rounded-full transition-all duration-200 cursor-pointer border-none
                    ${i === current ? "w-6 h-2 bg-[#667eea]" : "w-2 h-2 bg-white/20 hover:bg-white/40"}`}
                />
              ))}
            </div>
          )}
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
            }}
            onClick={e => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={() => setModal(null)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center
                transition-all duration-200 cursor-pointer z-10
                bg-gray-100 dark:bg-white/15 text-gray-500 dark:text-white/80 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-white/25
                border border-gray-200 dark:border-white/20"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>

            {/* Content */}
            <div className="p-8 flex flex-col gap-6">
              {/* Header */}
              <div>
                <h3 className="font-display font-black text-gray-900 dark:text-white text-3xl">
                  {modal.title}
                </h3>
                <p className="text-[#667eea] text-sm font-medium mt-1">Detalhes do projeto</p>
              </div>

              {/* Sobre */}
              <div>
                <h4 className="font-display font-bold text-gray-900 dark:text-white text-base mb-2">Sobre o projeto</h4>
                <p className="font-body text-gray-600 dark:text-[#c8d0e0] text-sm leading-[1.8]">
                  {modal.detalhes?.sobre}
                </p>
              </div>

              {/* Tecnologias */}
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

              {/* Footer */}
              <div className="flex justify-end pt-1">
                <a
                  href={modal.url}
                  target="_blank"
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
