function HeroIllustration() {
  return (
    <div className="relative w-full max-w-[500px] aspect-square select-none">
      {/* Ambient glow */}
      <div
        className="absolute inset-0 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle at 50% 50%, rgba(102,126,234,0.22) 0%, transparent 68%)" }}
      />

      <svg viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <defs>
          <radialGradient id="hSphereG" cx="38%" cy="32%" r="62%">
            <stop offset="0%" stopColor="#a78bfa" />
            <stop offset="45%" stopColor="#667eea" />
            <stop offset="100%" stopColor="#1a2d6b" />
          </radialGradient>
          <radialGradient id="hGlowG" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#667eea" stopOpacity="0.28" />
            <stop offset="100%" stopColor="#667eea" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="hCard1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1c2b54" />
            <stop offset="100%" stopColor="#0e1830" />
          </linearGradient>
          <linearGradient id="hCard2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#221447" />
            <stop offset="100%" stopColor="#0e1830" />
          </linearGradient>
          <filter id="hBlur"><feGaussianBlur stdDeviation="10" /></filter>
          <filter id="hBlur2"><feGaussianBlur stdDeviation="3" /></filter>
        </defs>

        {/* Background glow blob */}
        <ellipse cx="250" cy="270" rx="190" ry="155" fill="url(#hGlowG)" filter="url(#hBlur)" />

        {/* Orbital ring – flat ellipse */}
        <ellipse cx="250" cy="255" rx="175" ry="58" stroke="#667eea" strokeOpacity="0.18" strokeWidth="1.5" fill="none" />
        {/* Orbital ring – circle dashed */}
        <circle cx="250" cy="250" r="138" stroke="#667eea" strokeOpacity="0.12" strokeWidth="1" fill="none" strokeDasharray="4 7" />

        {/* Main sphere */}
        <circle cx="250" cy="230" r="108" fill="url(#hSphereG)" />
        <circle cx="250" cy="230" r="108" fill="none" stroke="#667eea" strokeOpacity="0.35" strokeWidth="1.5" />

        {/* Sphere shine */}
        <ellipse cx="222" cy="192" rx="42" ry="28" fill="white" fillOpacity="0.08" />

        {/* Cloud shape inside sphere */}
        <path
          d="M200 225 Q210 210 226 215 Q231 200 250 203 Q268 196 272 211
             Q288 208 291 224 Q295 237 280 242 L205 242 Q193 242 200 225Z"
          fill="white" fillOpacity="0.14"
        />

        {/* Floating card — top left */}
        <rect x="48" y="105" width="118" height="72" rx="12" fill="url(#hCard1)" stroke="#667eea" strokeOpacity="0.28" strokeWidth="1" />
        <rect x="60" y="117" width="32" height="18" rx="4" fill="#667eea" fillOpacity="0.55" />
        <rect x="60" y="141" width="94" height="4" rx="2" fill="#667eea" fillOpacity="0.22" />
        <rect x="60" y="149" width="66" height="4" rx="2" fill="#667eea" fillOpacity="0.14" />
        <circle cx="148" cy="118" r="7" fill="#a78bfa" fillOpacity="0.5" />

        {/* Floating card — right */}
        <rect x="365" y="148" width="108" height="68" rx="12" fill="url(#hCard1)" stroke="#667eea" strokeOpacity="0.22" strokeWidth="1" />
        <circle cx="385" cy="168" r="10" fill="#667eea" fillOpacity="0.45" />
        <rect x="401" y="162" width="58" height="5" rx="2" fill="#667eea" fillOpacity="0.28" />
        <rect x="401" y="171" width="40" height="4" rx="2" fill="#667eea" fillOpacity="0.18" />
        <rect x="377" y="183" width="84" height="4" rx="2" fill="#667eea" fillOpacity="0.18" />
        <rect x="377" y="191" width="58" height="4" rx="2" fill="#667eea" fillOpacity="0.1" />

        {/* Floating card — bottom right */}
        <rect x="332" y="328" width="126" height="76" rx="12" fill="url(#hCard2)" stroke="#764ba2" strokeOpacity="0.28" strokeWidth="1" />
        <rect x="344" y="340" width="38" height="20" rx="4" fill="#764ba2" fillOpacity="0.55" />
        <rect x="344" y="366" width="102" height="4" rx="2" fill="#764ba2" fillOpacity="0.22" />
        <rect x="344" y="374" width="74" height="4" rx="2" fill="#764ba2" fillOpacity="0.14" />

        {/* Connector lines */}
        <line x1="166" y1="148" x2="202" y2="200" stroke="#667eea" strokeOpacity="0.22" strokeWidth="1" strokeDasharray="3 5" />
        <line x1="365" y1="183" x2="342" y2="228" stroke="#667eea" strokeOpacity="0.18" strokeWidth="1" strokeDasharray="3 5" />
        <line x1="358" y1="340" x2="325" y2="308" stroke="#764ba2" strokeOpacity="0.2" strokeWidth="1" strokeDasharray="3 5" />

        {/* Floating dots */}
        <circle cx="118" cy="295" r="5" fill="#667eea" fillOpacity="0.65" />
        <circle cx="128" cy="306" r="3" fill="#667eea" fillOpacity="0.3" />
        <circle cx="408" cy="272" r="4" fill="#764ba2" fillOpacity="0.55" />
        <circle cx="162" cy="378" r="3" fill="#667eea" fillOpacity="0.4" />
        <circle cx="308" cy="418" r="5" fill="#667eea" fillOpacity="0.3" />
        <circle cx="72" cy="222" r="3" fill="#667eea" fillOpacity="0.45" />

        {/* Orbit dots */}
        <circle cx="80" cy="255" r="6" fill="#667eea" fillOpacity="0.85" filter="url(#hBlur2)" />
        <circle cx="80" cy="255" r="3.5" fill="#667eea" />
        <circle cx="420" cy="255" r="5" fill="#a78bfa" fillOpacity="0.8" filter="url(#hBlur2)" />
        <circle cx="420" cy="255" r="3" fill="#a78bfa" />
      </svg>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden bg-section-hero
        px-6 sm:px-10 lg:px-[8vw] pt-[84px] sm:pt-[100px] pb-16"
    >
      {/* Background ambient blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div style={{ position: "absolute", top: "15%", left: "25%", width: "520px", height: "520px", background: "radial-gradient(circle, rgba(102,126,234,0.13) 0%, transparent 70%)", borderRadius: "50%" }} />
        <div style={{ position: "absolute", bottom: "5%", right: "15%", width: "360px", height: "360px", background: "radial-gradient(circle, rgba(118,75,162,0.1) 0%, transparent 70%)", borderRadius: "50%" }} />
      </div>

      {/* Main grid */}
      <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

        {/* ── Left: copy ── */}
        <div className="flex flex-col items-start">

          {/* Heading */}
          <h1
            className="animate-fade-up-1 font-display font-black text-gray-900 dark:text-white leading-[1.1] tracking-tight mb-6"
            style={{ fontSize: "clamp(2.1rem, 4.8vw, 3.8rem)" }}
          >
            Criando soluções que{" "}
            <span className="gradient-text">transformam negócios</span>
          </h1>

          {/* Subtitle */}
          <p
            className="animate-fade-up-2 font-body text-gray-500 dark:text-[#8a9ab8] leading-relaxed mb-8 max-w-[480px]"
            style={{ fontSize: "clamp(0.88rem, 1.4vw, 1.02rem)" }}
          >
            Aprimore sua presença digital com sites, sistemas e automações
            modernas, rápidas e focadas em resultado.
          </p>

          {/* CTAs */}
          <div className="animate-fade-up-3 flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <a
              href="#contato"
              className="inline-flex items-center justify-center gap-2 font-display font-bold text-white
                bg-esr-gradient px-8 py-4 rounded-xl no-underline shadow-esr-md
                hover:-translate-y-0.5 hover:shadow-esr-lg transition-all duration-200 text-[0.9rem]"
            >
              {/* Chat icon */}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 flex-shrink-0">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
              Fale conosco
            </a>

          </div>
        </div>

        {/* ── Right: illustration ── */}
        <div className="animate-fade-up-2 flex items-center justify-center">
          <HeroIllustration />
        </div>
      </div>

    </section>
  );
}
