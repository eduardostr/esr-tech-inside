import { useState, useEffect } from "react";
import { useTheme } from "../ThemeContext";

const navItems = [
  { label: "Início",   href: "#inicio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Projetos", href: "#projetos" },
  { label: "Sobre",    href: "#sobre" },
  { label: "Contato",  href: "#contato" },
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
      <span className={`absolute top-[3px] w-[22px] h-[22px] rounded-full bg-white shadow-md transition-all duration-300 flex items-center justify-center ${dark ? "left-[27px]" : "left-[3px]"}`}>
        {dark ? (
          /* Moon */
          <svg viewBox="0 0 24 24" fill="none" className="w-3.5 h-3.5">
            <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z" fill="#667eea" stroke="#667eea" strokeWidth="1.2" strokeLinejoin="round"/>
          </svg>
        ) : (
          /* Sun */
          <svg viewBox="0 0 24 24" fill="none" className="w-3.5 h-3.5">
            <circle cx="12" cy="12" r="4" fill="#f59e0b" stroke="#f59e0b" strokeWidth="1"/>
            <line x1="12" y1="2"  x2="12" y2="5"  stroke="#f59e0b" strokeWidth="1.8" strokeLinecap="round"/>
            <line x1="12" y1="19" x2="12" y2="22" stroke="#f59e0b" strokeWidth="1.8" strokeLinecap="round"/>
            <line x1="2"  y1="12" x2="5"  y2="12" stroke="#f59e0b" strokeWidth="1.8" strokeLinecap="round"/>
            <line x1="19" y1="12" x2="22" y2="12" stroke="#f59e0b" strokeWidth="1.8" strokeLinecap="round"/>
            <line x1="4.22"  y1="4.22"  x2="6.34"  y2="6.34"  stroke="#f59e0b" strokeWidth="1.8" strokeLinecap="round"/>
            <line x1="17.66" y1="17.66" x2="19.78" y2="19.78" stroke="#f59e0b" strokeWidth="1.8" strokeLinecap="round"/>
            <line x1="4.22"  y1="19.78" x2="6.34"  y2="17.66" stroke="#f59e0b" strokeWidth="1.8" strokeLinecap="round"/>
            <line x1="17.66" y1="6.34"  x2="19.78" y2="4.22"  stroke="#f59e0b" strokeWidth="1.8" strokeLinecap="round"/>
          </svg>
        )}
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
    <nav className={`fixed top-0 left-0 right-0 z-50 grid grid-cols-[auto_auto_auto] items-center justify-center gap-6 lg:gap-12
        px-4 sm:px-6 h-[72px] sm:h-[84px]
        bg-white/92 dark:bg-[#0a0a0a]/92 backdrop-blur-md
        border-b border-esr-primary/10 transition-shadow duration-300
        ${scrolled ? "shadow-esr-sm" : ""}`}>

      {/* Logo */}
      <a href="#inicio" className="flex items-center no-underline">
        <img
          src="/ESR_transparent.png"
          alt="ESR Tech Inside"
          className="h-[60px] sm:h-[72px] w-auto object-contain transition-all duration-300 hover:opacity-85"
        />
      </a>

      {/* Desktop links — centralizados */}
      <ul className="hidden md:flex items-center gap-5 lg:gap-8 list-none">
        {navItems.map((item) => (
          <li key={item.href}>
            <a href={item.href} className="font-body text-sm font-medium text-[#444] dark:text-[#ccc] no-underline hover:text-[#667eea] dark:hover:text-[#667eea] transition-colors">
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Desktop: toggle */}
      <div className="hidden md:flex items-center">
        <ThemeToggle />
      </div>

      {/* Mobile: apenas toggle */}
      <div className="md:hidden flex items-center col-start-3">
        <ThemeToggle />
      </div>
    </nav>
  );
}
