import SectionDivider from "./SectionDivider";

export default function Footer() {
  return (
    <footer className="bg-section-footer">
      {/* Main grid */}
      <div className="px-4 sm:px-8 lg:px-[6vw] py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1.6fr_1fr] gap-10 lg:gap-8">

          {/* ── Col 1: Brand ── */}
          <div className="flex flex-col gap-4 items-center sm:items-start">
            <img
              src="/ESR_transparent.png"
              alt="ESR Tech Inside"
              className="h-[60px] sm:h-[72px] w-auto object-contain"
            />
            <p className="font-body text-gray-500 dark:text-[#8a9ab8] text-sm leading-[1.8] max-w-[280px] text-center sm:text-left">
              Desenvolvemos soluções digitais modernas, rápidas e focadas em resultado. Criamos sites, sistemas e experiências digitais que realmente geram valor para o seu negócio, com performance, design e estratégia.
            </p>
          </div>

          {/* ── Col 2: Navegação ── */}
          <div className="flex flex-col gap-4 items-center sm:items-start">
            <h4 className="font-display font-bold text-gray-900 dark:text-white text-sm tracking-wide">
              Navegação
            </h4>
            <ul className="flex flex-col gap-2.5 list-none items-center sm:items-start">
              {[
                { label: "Início",   href: "#inicio" },
                { label: "Serviços", href: "#servicos" },
                { label: "Projetos", href: "#projetos" },
                { label: "Sobre",    href: "#sobre" },
                { label: "Contato",  href: "#contato" },
              ].map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="font-body text-gray-500 dark:text-[#8a9ab8] text-sm no-underline
                      hover:text-[#667eea] dark:hover:text-[#667eea] transition-colors duration-200"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 3: Contato + Atendimento ── */}
          <div className="flex flex-col gap-6 items-center sm:items-start">
            {/* Contato */}
            <div className="flex flex-col gap-3 items-center sm:items-start">
              <h4 className="font-display font-bold text-gray-900 dark:text-white text-sm tracking-wide">
                Contato
              </h4>
              <ul className="flex flex-col gap-2.5 list-none">
                <li className="flex items-center gap-2.5 text-gray-500 dark:text-[#8a9ab8] text-sm font-body">
                  {/* Mail icon */}
                  <svg className="w-4 h-4 shrink-0 text-[#667eea]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                  contatoesrtechinside@gmail.com
                </li>
                <li className="flex items-center gap-2.5 text-gray-500 dark:text-[#8a9ab8] text-sm font-body">
                  {/* Phone icon */}
                  <svg className="w-4 h-4 shrink-0 text-[#667eea]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.08 1.2 2 2 0 012.06 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/>
                  </svg>
                  (71) 98264-4841
                </li>
                <li className="flex items-center gap-2.5 text-gray-500 dark:text-[#8a9ab8] text-sm font-body">
                  {/* Location icon */}
                  <svg className="w-4 h-4 shrink-0 text-[#667eea]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                  Brasil
                </li>
              </ul>
            </div>

            {/* Atendimento */}
            <div className="flex flex-col gap-3 items-center sm:items-start">
              <h4 className="font-display font-bold text-gray-900 dark:text-white text-sm tracking-wide">
                Atendimento
              </h4>
              <ul className="flex flex-col gap-2.5 list-none">
                {[
                  "Seg - Sex: 07h às 22h",
                  "Sábado: 09h às 14h",
                  "Domingo: Fechado",
                ].map((t) => (
                  <li key={t} className="flex items-center gap-2.5 text-gray-500 dark:text-[#8a9ab8] text-sm font-body">
                    {/* Clock icon */}
                    <svg className="w-4 h-4 shrink-0 text-[#667eea]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10"/>
                      <polyline points="12 6 12 12 16 14"/>
                    </svg>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ── Col 4: Redes ── */}
          <div className="flex flex-col gap-4 items-center sm:items-start">
            <h4 className="font-display font-bold text-gray-900 dark:text-white text-sm tracking-wide">
              Redes
            </h4>
            <div className="flex gap-3">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/edurodriguesdr/"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-lg border border-gray-200 dark:border-white/10 flex items-center justify-center
                  text-gray-500 dark:text-[#8a9ab8] hover:text-white hover:border-transparent
                  hover:-translate-y-1 hover:scale-110 hover:shadow-[0_6px_18px_rgba(220,39,67,0.35)]
                  transition-all duration-200"
                onMouseEnter={e => e.currentTarget.style.background="linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)"}
                onMouseLeave={e => e.currentTarget.style.background=""}
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/5571982644841"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-lg border border-gray-200 dark:border-white/10 flex items-center justify-center
                  text-gray-500 dark:text-[#8a9ab8] hover:text-white hover:border-transparent
                  hover:-translate-y-1 hover:scale-110 hover:shadow-[0_6px_18px_rgba(37,211,102,0.35)]
                  transition-all duration-200"
                onMouseEnter={e => e.currentTarget.style.background="#25D366"}
                onMouseLeave={e => e.currentTarget.style.background=""}
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="pb-8" />
      <SectionDivider simple />
      <div className="px-4 sm:px-8 lg:px-[6vw] pt-10 pb-6">
        <p className="font-body text-gray-500 dark:text-[#8a9ab8] text-sm text-center">
          © 2026 ESR Tech Inside. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
