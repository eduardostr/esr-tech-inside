import { useState, useEffect } from "react";
import { useTheme } from "../ThemeContext";

const navItems = [
  { label: "Sobre",         href: "#sobre" },
  { label: "Serviços",      href: "#servicos" },
  { label: "Como Funciona", href: "#processo" },
  { label: "Nichos",        href: "#nichos" },
];

function ThemeToggle() {
  const { dark, toggle } = useTheme();
  return (
    <button
      onClick={toggle}
      aria-label={dark ? "Ativar modo claro" : "Ativar modo escuro"}
      className="relative w-[52px] h-[28px] rounded-full border border-esr-primary/30
        bg-[#f0f0f0] dark:bg-[#2a2a2a] transition-all duration-300 cursor-pointer
        focus:outline-none focus:ring-2 focus:ring-esr-primary/40 flex-shrink-0"
    >
      <span className={`absolute inset-0 rounded-full transition-all duration-300 ${dark ? "bg-esr-gradient opacity-100" : "opacity-0"}`} />
      <span className={`absolute top-[3px] w-[22px] h-[22px] rounded-full bg-white shadow-md transition-all duration-300 flex items-center justify-center text-[11px] ${dark ? "left-[27px]" : "left-[3px]"}`}>
        {dark ? "🌙" : "☀️"}
      </span>
    </button>
  );
}

export default function Navbar() {
  const { dark } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const close = () => setMenuOpen(false);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between
        px-4 sm:px-6 lg:px-[6vw] h-[72px] sm:h-[84px]
        bg-white/92 dark:bg-[#0a0a0a]/92 backdrop-blur-md
        border-b border-esr-primary/10 transition-shadow duration-300
        ${scrolled ? "shadow-esr-sm" : ""}`}>

      {/* Logo — troca conforme o tema */}
      <a href="#inicio" className="flex items-center no-underline">
        <img
          src={dark ? "/logo-esr-dark.png" : "/logo-esr-light.png"}
          alt="ESR Tech Inside"
          className="h-[60px] sm:h-[72px] w-auto object-contain transition-all duration-300 hover:opacity-85"
        />
      </a>

      {/* Desktop links */}
      <ul className="hidden md:flex items-center gap-5 lg:gap-8 list-none">
        {navItems.map((item) => (
          <li key={item.href}>
            <a href={item.href} className="font-body text-sm font-medium text-[#444] dark:text-[#ccc] no-underline hover:text-[#1a1a1a] dark:hover:text-white transition-colors">
              {item.label}
            </a>
          </li>
        ))}
        <li>
          <a href="#contato" className="font-display font-bold text-[0.82rem] text-white bg-esr-gradient
            px-4 lg:px-[22px] py-[9px] lg:py-[10px] rounded-full no-underline shadow-esr-sm
            hover:-translate-y-px hover:shadow-esr-md transition-all duration-200 whitespace-nowrap">
            Fale Conosco
          </a>
        </li>
        <li><ThemeToggle /></li>
      </ul>

      {/* Mobile: toggle + hamburger */}
      <div className="md:hidden flex items-center gap-3">
        <ThemeToggle />
        <button
          className="flex flex-col gap-[5px] bg-transparent border-none p-1.5 cursor-pointer"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
        >
          <span className={`block w-6 h-[2px] bg-[#1a1a1a] dark:bg-white rounded transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
          <span className={`block w-6 h-[2px] bg-[#1a1a1a] dark:bg-white rounded transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-[2px] bg-[#1a1a1a] dark:bg-white rounded transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden absolute top-[72px] sm:top-[84px] left-0 right-0
        bg-white dark:bg-[#111] border-b border-esr-primary/10 shadow-lg
        px-4 sm:px-6 flex flex-col gap-0 overflow-hidden transition-all duration-300
        ${menuOpen ? "max-h-[400px] py-4" : "max-h-0 py-0"}`}>
        {navItems.map((item) => (
          <a key={item.href} href={item.href} onClick={close}
            className="font-body text-sm font-medium text-[#444] dark:text-[#ccc] no-underline hover:text-[#1a1a1a] dark:hover:text-white py-3 border-b border-[#f0f0f0] dark:border-white/5 last:border-0">
            {item.label}
          </a>
        ))}
        <a href="#contato" onClick={close}
          className="font-display font-bold text-sm text-white bg-esr-gradient px-5 py-3 rounded-full no-underline self-start shadow-esr-sm mt-3 mb-1">
          Fale Conosco
        </a>
      </div>
    </nav>
  );
}
