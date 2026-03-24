import { Reveal } from "./Reveal";

const nichos = [
  "Saúde & Bem-estar","Educação & Cursos Online","E-commerce & Produtos",
  "Imobiliário","Consultorias","Advocacia & Direito",
  "Gastronomia & Restaurantes","Tecnologia & SaaS","Eventos & Entretenimento",
  "Fitness & Personal Trainer","Moda & Lifestyle","Infoprodutos",
  "Clínicas & Medicina","Financeiro & Investimentos","Beleza & Estética",
  "Agências de Marketing","E muito mais...",
];

export default function Nichos() {
  return (
    <section id="nichos" className="bg-white dark:bg-[#0a0a0a] px-4 sm:px-8 lg:px-[6vw] py-12 sm:py-16 lg:py-24">
      <Reveal>
        <p className="text-[0.68rem] sm:text-[0.72rem] font-semibold tracking-[2.5px] uppercase text-esr-primary mb-3">Nichos atendidos</p>
        <h2 className="font-display font-extrabold text-[#1a1a1a] dark:text-white leading-[1.12] tracking-[-0.5px] max-w-[640px]"
            style={{ fontSize: "clamp(1.7rem, 5vw, 3.2rem)" }}>
          Seu nicho, nossa especialidade
        </h2>
        <p className="mt-3 sm:mt-4 font-body font-light text-[#555] dark:text-[#aaa] max-w-[520px] leading-[1.75] text-sm sm:text-base">
          Criamos landing pages para os mais variados segmentos de mercado.
        </p>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="flex flex-wrap gap-2 sm:gap-3 mt-8 sm:mt-12">
          {nichos.map((n) => (
            <span key={n}
              className="inline-flex items-center gap-1.5 sm:gap-2
                bg-[#f8f9fa] dark:bg-[#1a1a1a]
                border border-[#667eea]/15 dark:border-[#667eea]/25
                rounded-full px-3 sm:px-5 py-1.5 sm:py-2.5
                font-body text-[0.78rem] sm:text-[0.85rem]
                text-[#333] dark:text-[#ccc]
                hover:bg-esr-primary/[.08] hover:border-esr-primary hover:text-esr-primary
                dark:hover:bg-esr-primary/[.12] dark:hover:text-[#a0b4ff]
                transition-all duration-200 cursor-default">
              <span className="w-1.5 h-1.5 rounded-full bg-esr-gradient shrink-0" />
              {n}
            </span>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
