import { useTheme } from "../ThemeContext";

export default function Footer() {
  const { dark } = useTheme();

  return (
    <footer className={`px-4 sm:px-8 lg:px-[6vw] py-8 sm:py-12 border-t transition-colors duration-300
      ${dark
        ? "bg-[#0a0a0a] text-white border-white/8"
        : "bg-white text-[#1a1a1a] border-[#e8e8e8]"
      }`}>
      <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-5 sm:gap-4 text-center sm:text-left">

        {/* Logo — troca conforme o tema */}
        <a href="#inicio" className="flex items-center no-underline">
          <img
            src={dark ? "/logo-esr-dark.png" : "/logo-esr-light.png"}
            alt="ESR Tech Inside"
            className="h-[56px] sm:h-[68px] w-auto object-contain transition-all duration-300 hover:opacity-85"
          />
        </a>

        <p className={`font-body text-[0.78rem] sm:text-[0.82rem] font-light order-last sm:order-none
          ${dark ? "text-white/50" : "text-[#999]"}`}>
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
              <a href={l.href}
                className={`font-body text-[0.78rem] sm:text-[0.82rem] no-underline hover:text-esr-primary transition-colors
                  ${dark ? "text-white/50" : "text-[#888]"}`}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
