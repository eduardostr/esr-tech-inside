export default function Footer() {
  return (
    <footer className="bg-[#0f0f0f] text-white px-4 sm:px-8 lg:px-[6vw] py-8 sm:py-12
      border-t border-white/8">
      {/* Mobile: stacked center | Desktop: row spread */}
      <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-5 sm:gap-4 text-center sm:text-left">
        <a href="#inicio" className="flex items-center gap-2 font-display font-bold text-[1rem] sm:text-[1.08rem] text-white no-underline">
          <span className="w-2 h-2 rounded-full bg-esr-gradient inline-block flex-shrink-0" />
          ESR Tech Inside
        </a>

        <p className="font-body text-[0.78rem] sm:text-[0.82rem] font-light text-white/50 order-last sm:order-none">
          © 2026 Feito com{" "}
          <span className="animate-heartbeat inline-block text-[#e05c7e]">♥</span>{" "}
          por ESR Tech Inside
        </p>

        <ul className="flex gap-5 sm:gap-6 list-none">
          {[
            { label: "Sobre",    href: "#sobre" },
            { label: "Serviços", href: "#servicos" },
            { label: "Contato",  href: "#contato" },
          ].map((l) => (
            <li key={l.href}>
              <a href={l.href} className="font-body text-[0.78rem] sm:text-[0.82rem] text-white/50 no-underline hover:text-esr-primary transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
