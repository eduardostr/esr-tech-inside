import { useState } from "react";
import { Reveal } from "./Reveal";

const tabs = [
  {
    label: "Sites",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
        <rect x="3" y="3" width="18" height="18" rx="3"/><path d="M3 9h18M9 21V9"/>
      </svg>
    ),
    title: "Sites",
    description:
      "Tenha um site moderno, rápido e totalmente responsivo para fortalecer sua presença digital. Transmita mais credibilidade para seus clientes e destaque sua marca no mercado. Desenvolvido com foco em performance, design e experiência do usuário. Ideal para empresas que querem crescer e gerar mais oportunidades online.",
    preview: <SitesMockup />,
  },
  {
    label: "Landing Pages",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
        <path d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/>
      </svg>
    ),
    title: "Landing Pages",
    description:
      "Páginas de captura e vendas criadas para converter visitantes em clientes. Design estratégico, copy persuasivo e elementos de prova social que aumentam sua taxa de conversão. Integradas com suas ferramentas de marketing e prontas para campanhas de tráfego pago ou orgânico.",
    preview: <LandingMockup />,
  },
  {
    label: "Sistemas",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
        <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
      </svg>
    ),
    title: "Sistemas",
    description:
      "Desenvolvemos sistemas web personalizados para automatizar e otimizar os processos da sua empresa. Desde painéis administrativos e dashboards até plataformas completas. Soluções sob medida, escaláveis e com interface intuitiva para sua equipe e seus clientes.",
    preview: <SistemasMockup />,
  },
  {
    label: "Lojas Virtuais",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
        <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/>
      </svg>
    ),
    title: "Lojas Virtuais",
    description:
      "Monte sua loja online com catálogo de produtos, carrinho, checkout e pagamentos integrados. Layout atrativo, navegação fluida e experiência de compra otimizada para aumentar suas vendas. Compatível com os principais meios de pagamento do mercado.",
    preview: <LojaMockup />,
  },
  {
    label: "Bots",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
        <rect x="3" y="8" width="18" height="12" rx="2"/><path d="M9 8V6a3 3 0 016 0v2"/><circle cx="9" cy="14" r="1" fill="currentColor"/><circle cx="15" cy="14" r="1" fill="currentColor"/>
      </svg>
    ),
    title: "Bots",
    description:
      "Automatize seu atendimento e vendas com bots inteligentes para WhatsApp, Instagram e outras plataformas. Respostas automáticas, qualificação de leads, agendamentos e muito mais. Seu negócio funcionando 24 horas por dia, 7 dias por semana, sem precisar de equipe extra.",
    preview: <BotsMockup />,
  },
];

/* ── Animated Mockups ── */

function SitesMockup() {
  return (
    <div className="w-full h-full rounded-xl overflow-hidden flex flex-col"
      style={{ background: "linear-gradient(160deg,#0d1f3c 0%,#060d1f 100%)" }}>
      <style>{`
        @keyframes sm-nav{0%,12%{opacity:0;transform:translateY(-6px)}22%,82%{opacity:1;transform:translateY(0)}93%,100%{opacity:0}}
        @keyframes sm-h1{0%,18%{opacity:0;transform:translateY(5px)}28%,82%{opacity:1;transform:translateY(0)}93%,100%{opacity:0}}
        @keyframes sm-h2{0%,24%{opacity:0;transform:translateY(5px)}34%,82%{opacity:1;transform:translateY(0)}93%,100%{opacity:0}}
        @keyframes sm-sub{0%,30%{opacity:0}40%,82%{opacity:1}93%,100%{opacity:0}}
        @keyframes sm-cta{0%,36%{opacity:0;transform:scale(0.92)}46%,82%{opacity:1;transform:scale(1)}93%,100%{opacity:0}}
        @keyframes sm-c1{0%,42%{opacity:0;transform:translateY(7px)}52%,82%{opacity:1;transform:translateY(0)}93%,100%{opacity:0}}
        @keyframes sm-c2{0%,48%{opacity:0;transform:translateY(7px)}58%,82%{opacity:1;transform:translateY(0)}93%,100%{opacity:0}}
        @keyframes sm-c3{0%,54%{opacity:0;transform:translateY(7px)}64%,82%{opacity:1;transform:translateY(0)}93%,100%{opacity:0}}
      `}</style>

      {/* Browser bar */}
      <div className="flex items-center gap-1.5 px-4 py-2.5 bg-[#0f1a35] border-b border-white/8 flex-shrink-0">
        <span className="w-2.5 h-2.5 rounded-full bg-red-400/80"/>
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/80"/>
        <span className="w-2.5 h-2.5 rounded-full bg-green-400/80"/>
        <div className="ml-3 flex-1 h-5 rounded-md bg-white/6 flex items-center px-2 gap-1 max-w-[200px]">
          <div className="w-2 h-2 rounded-full bg-green-400/50"/>
          <div className="h-1.5 flex-1 rounded bg-white/15"/>
        </div>
        <div className="ml-auto flex gap-1.5">
          <div className="w-5 h-5 rounded bg-white/5"/>
          <div className="w-5 h-5 rounded bg-white/5"/>
        </div>
      </div>

      {/* Navbar animates in */}
      <div className="flex items-center px-5 py-2.5 bg-[#0c1830]/80 border-b border-white/5 gap-4 flex-shrink-0"
        style={{ animation: "sm-nav 8s ease-in-out infinite" }}>
        <div className="w-16 h-4 rounded bg-[#667eea]/60"/>
        <div className="flex gap-3 ml-4">
          {[40,36,44,32].map((w,i) => <div key={i} style={{ width: w }} className="h-2 rounded bg-white/20"/>)}
        </div>
        <div className="ml-auto w-20 h-6 rounded-full bg-[#667eea]/50"/>
      </div>

      {/* Hero content */}
      <div className="flex-1 px-5 pt-4 pb-3 flex flex-col gap-2.5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-36 h-36 pointer-events-none rounded-full"
          style={{ background: "radial-gradient(circle,rgba(102,126,234,0.2) 0%,transparent 70%)" }}/>

        <div className="h-5 w-52 rounded bg-white/25" style={{ animation: "sm-h1 8s ease-in-out infinite" }}/>
        <div className="h-5 w-44 rounded bg-white/20" style={{ animation: "sm-h2 8s ease-in-out infinite" }}/>
        <div className="h-5 w-36 rounded" style={{ background: "linear-gradient(90deg,#667eea,#764ba2)", animation: "sm-h2 8s ease-in-out infinite" }}/>

        <div className="flex flex-col gap-1 mt-0.5" style={{ animation: "sm-sub 8s ease-in-out infinite" }}>
          <div className="h-2 w-full rounded bg-white/10"/>
          <div className="h-2 w-5/6 rounded bg-white/8"/>
        </div>

        <div className="flex gap-2 mt-1" style={{ animation: "sm-cta 8s ease-in-out infinite" }}>
          <div className="h-7 w-24 rounded-full bg-[#667eea]/70"/>
          <div className="h-7 w-20 rounded-full bg-white/8 border border-white/15"/>
        </div>

        <div className="mt-auto grid grid-cols-3 gap-2">
          {[
            { c: "#667eea", a: "sm-c1" },
            { c: "#764ba2", a: "sm-c2" },
            { c: "#667eea", a: "sm-c3" },
          ].map((x, i) => (
            <div key={i} className="rounded-lg border border-white/8 p-2.5 flex flex-col gap-1.5"
              style={{ background: "rgba(255,255,255,0.04)", animation: `${x.a} 8s ease-in-out infinite` }}>
              <div className="w-6 h-6 rounded-md mb-1" style={{ background: `${x.c}55` }}/>
              <div className="h-2 rounded bg-white/25" style={{ width: 28 }}/>
              <div className="h-1.5 w-full rounded bg-white/8"/>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function LandingMockup() {
  return (
    <div className="w-full h-full rounded-xl overflow-hidden bg-[#0a0f1e] flex flex-col">
      <style>{`
        @keyframes lp-head{0%,10%{opacity:0;transform:translateY(8px)}22%,82%{opacity:1;transform:translateY(0)}93%,100%{opacity:0}}
        @keyframes lp-sub{0%,18%{opacity:0}30%,82%{opacity:1}93%,100%{opacity:0}}
        @keyframes lp-cta{0%,26%{opacity:0;transform:scale(0.88)}38%,82%{opacity:1;transform:scale(1)}93%,100%{opacity:0}}
        @keyframes lp-cta-pulse{0%,100%{box-shadow:0 0 0 0 rgba(102,126,234,0.55)}60%{box-shadow:0 0 0 10px rgba(102,126,234,0)}}
        @keyframes lp-stat{0%,36%{opacity:0;transform:scale(0.85)}48%,82%{opacity:1;transform:scale(1)}93%,100%{opacity:0}}
        @keyframes lp-social{0%,48%{opacity:0;transform:translateY(5px)}60%,82%{opacity:1;transform:translateY(0)}93%,100%{opacity:0}}
        @keyframes lp-progress{0%,54%{transform:scaleX(0);transform-origin:left}68%,82%{transform:scaleX(1);transform-origin:left}93%,100%{opacity:0}}
      `}</style>

      <div className="flex items-center gap-1.5 px-3 py-2 bg-[#111827] border-b border-white/5">
        <span className="w-2.5 h-2.5 rounded-full bg-red-500/70"/>
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70"/>
        <span className="w-2.5 h-2.5 rounded-full bg-green-500/70"/>
        <div className="ml-2 flex-1 h-4 rounded bg-white/5 max-w-[160px]"/>
      </div>

      <div className="flex-1 p-4 flex flex-col items-center gap-3 overflow-hidden">
        {/* Badge */}
        <div className="h-4 w-24 rounded-full mt-1"
          style={{ background: "rgba(102,126,234,0.25)", border: "1px solid rgba(102,126,234,0.35)", animation: "lp-head 9s ease-in-out infinite" }}/>

        {/* Headline */}
        <div className="flex flex-col gap-1.5 items-center w-full" style={{ animation: "lp-head 9s ease-in-out infinite" }}>
          <div className="h-6 w-48 rounded bg-white/15"/>
          <div className="h-6 w-36 rounded" style={{ background: "linear-gradient(90deg,rgba(102,126,234,0.55),rgba(118,75,162,0.55))" }}/>
        </div>

        {/* Subtitle */}
        <div className="flex flex-col gap-1 items-center w-full" style={{ animation: "lp-sub 9s ease-in-out infinite" }}>
          <div className="h-2 w-full rounded bg-white/8"/>
          <div className="h-2 w-4/5 rounded bg-white/6"/>
        </div>

        {/* CTA pulsing button */}
        <div className="h-10 w-40 rounded-full flex items-center justify-center mt-1"
          style={{ background: "linear-gradient(90deg,#667eea,#764ba2)", animation: "lp-cta 9s ease-in-out infinite, lp-cta-pulse 2s 3.5s ease-in-out infinite" }}>
          <div className="h-2.5 w-24 rounded bg-white/50"/>
        </div>

        {/* Conversion stats */}
        <div className="flex gap-4 mt-1 w-full justify-center" style={{ animation: "lp-stat 9s ease-in-out infinite" }}>
          {[
            { label: "Conversão", color: "#667eea" },
            { label: "Satisfação", color: "#764ba2" },
            { label: "Retorno",    color: "#06b6d4" },
          ].map((s, i) => (
            <div key={i} className="flex flex-col items-center gap-1">
              <div className="h-4 w-10 rounded" style={{ background: `${s.color}70` }}/>
              <div className="h-1.5 w-12 rounded bg-white/15"/>
              <div className="h-1 w-10 rounded overflow-hidden bg-white/8">
                <div className="h-full rounded" style={{ background: s.color, animation: "lp-progress 9s ease-in-out infinite" }}/>
              </div>
            </div>
          ))}
        </div>

        {/* Social proof */}
        <div className="flex items-center gap-2 mt-auto" style={{ animation: "lp-social 9s ease-in-out infinite" }}>
          <div className="flex">
            {[220,250,280,310,340].map((hue, i) => (
              <div key={i} className="w-6 h-6 rounded-full border-2 border-[#0a0f1e] -ml-1.5 first:ml-0"
                style={{ background: `hsl(${hue},55%,38%)` }}/>
            ))}
          </div>
          <div className="h-2 w-20 rounded bg-white/20"/>
        </div>
      </div>
    </div>
  );
}

function SistemasMockup() {
  return (
    <div className="w-full h-full rounded-xl overflow-hidden bg-[#0a0f1e] flex">
      <style>{`
        @keyframes dash-side{0%,8%{opacity:0;transform:translateX(-8px)}18%,86%{opacity:1;transform:translateX(0)}96%,100%{opacity:0}}
        @keyframes dash-hdr{0%,14%{opacity:0}24%,86%{opacity:1}96%,100%{opacity:0}}
        @keyframes dash-k1{0%,20%{opacity:0;transform:translateY(4px)}30%,86%{opacity:1;transform:translateY(0)}96%,100%{opacity:0}}
        @keyframes dash-k2{0%,25%{opacity:0;transform:translateY(4px)}35%,86%{opacity:1;transform:translateY(0)}96%,100%{opacity:0}}
        @keyframes dash-k3{0%,30%{opacity:0;transform:translateY(4px)}40%,86%{opacity:1;transform:translateY(0)}96%,100%{opacity:0}}
        @keyframes dash-b1{0%,36%{transform:scaleY(0)}46%,86%{transform:scaleY(1)}96%,100%{opacity:0}}
        @keyframes dash-b2{0%,40%{transform:scaleY(0)}50%,86%{transform:scaleY(1)}96%,100%{opacity:0}}
        @keyframes dash-b3{0%,44%{transform:scaleY(0)}54%,86%{transform:scaleY(1)}96%,100%{opacity:0}}
        @keyframes dash-b4{0%,48%{transform:scaleY(0)}58%,86%{transform:scaleY(1)}96%,100%{opacity:0}}
        @keyframes dash-b5{0%,52%{transform:scaleY(0)}62%,86%{transform:scaleY(1)}96%,100%{opacity:0}}
        @keyframes dash-rows{0%,58%{opacity:0}70%,86%{opacity:1}96%,100%{opacity:0}}
        @keyframes dash-dot{0%,100%{transform:scale(1);opacity:1}50%{transform:scale(1.5);opacity:0.4}}
      `}</style>

      {/* Sidebar */}
      <div className="w-14 bg-[#111827] border-r border-white/5 flex flex-col items-center py-3 gap-3 flex-shrink-0"
        style={{ animation: "dash-side 9s ease-in-out infinite" }}>
        <div className="w-7 h-7 rounded-lg bg-[#667eea]/50"/>
        {[1,2,3,4].map(i => (
          <div key={i} className="w-6 h-6 rounded"
            style={{ background: i === 1 ? "rgba(102,126,234,0.3)" : "rgba(255,255,255,0.06)", border: i === 1 ? "1px solid rgba(102,126,234,0.5)" : "none" }}/>
        ))}
      </div>

      {/* Main area */}
      <div className="flex-1 p-3 flex flex-col gap-2 overflow-hidden">
        {/* Header */}
        <div className="flex gap-2 items-center mb-0.5" style={{ animation: "dash-hdr 9s ease-in-out infinite" }}>
          <div className="h-3.5 w-20 rounded bg-white/15"/>
          <div className="ml-auto flex items-center gap-1.5">
            <div className="w-5 h-5 rounded-full bg-[#667eea]/30 flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-[#667eea]"
                style={{ animation: "dash-dot 1.8s 2s ease-in-out infinite" }}/>
            </div>
            <div className="h-6 w-14 rounded bg-[#667eea]/35"/>
          </div>
        </div>

        {/* KPI cards */}
        <div className="grid grid-cols-3 gap-1.5">
          {[
            { a: "dash-k1", c: "#667eea" },
            { a: "dash-k2", c: "#764ba2" },
            { a: "dash-k3", c: "#06b6d4" },
          ].map((x, i) => (
            <div key={i} className="rounded-lg border border-white/8 p-2 flex flex-col gap-1"
              style={{ background: "rgba(255,255,255,0.04)", animation: `${x.a} 9s ease-in-out infinite` }}>
              <div className="h-1.5 w-8 rounded" style={{ background: `${x.c}70` }}/>
              <div className="h-4 w-10 rounded bg-white/20"/>
              <div className="h-1 w-full rounded" style={{ background: `${x.c}25` }}/>
            </div>
          ))}
        </div>

        {/* Bar chart */}
        <div className="flex-1 rounded-lg border border-white/8 p-2 flex flex-col"
          style={{ background: "rgba(255,255,255,0.03)" }}>
          <div className="h-2 w-16 rounded bg-white/15 mb-2"/>
          <div className="flex-1 flex items-end gap-1.5 pb-1">
            {[
              { h: "65%", a: "dash-b1", c: "#667eea" },
              { h: "82%", a: "dash-b2", c: "#764ba2" },
              { h: "48%", a: "dash-b3", c: "#667eea" },
              { h: "74%", a: "dash-b4", c: "#06b6d4" },
              { h: "91%", a: "dash-b5", c: "#764ba2" },
              { h: "57%", a: "dash-b1", c: "#667eea" },
            ].map((b, i) => (
              <div key={i} className="flex-1 rounded-t-sm"
                style={{
                  height: b.h,
                  background: `linear-gradient(to top,${b.c}90,${b.c}30)`,
                  transformOrigin: "bottom",
                  animation: `${b.a} 9s ease-in-out infinite`,
                }}/>
            ))}
          </div>
        </div>

        {/* Table rows */}
        <div className="rounded-lg border border-white/8 p-2 flex flex-col gap-1.5"
          style={{ background: "rgba(255,255,255,0.03)", animation: "dash-rows 9s ease-in-out infinite" }}>
          {[1,2,3].map(i => (
            <div key={i} className="flex gap-2 items-center">
              <div className="w-4 h-4 rounded bg-white/8 flex-shrink-0"/>
              <div className="h-1.5 flex-1 rounded bg-white/10"/>
              <div className="h-4 w-12 rounded-full" style={{ background: "rgba(102,126,234,0.28)" }}/>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function LojaMockup() {
  return (
    <div className="w-full h-full rounded-xl overflow-hidden bg-[#0a0f1e] flex flex-col">
      <style>{`
        @keyframes loja-nav{0%,8%{opacity:0}18%,86%{opacity:1}95%,100%{opacity:0}}
        @keyframes loja-p1{0%,16%{opacity:0;transform:translateY(6px)}26%,86%{opacity:1;transform:translateY(0)}95%,100%{opacity:0}}
        @keyframes loja-p2{0%,22%{opacity:0;transform:translateY(6px)}32%,86%{opacity:1;transform:translateY(0)}95%,100%{opacity:0}}
        @keyframes loja-p3{0%,28%{opacity:0;transform:translateY(6px)}38%,86%{opacity:1;transform:translateY(0)}95%,100%{opacity:0}}
        @keyframes loja-p4{0%,34%{opacity:0;transform:translateY(6px)}44%,86%{opacity:1;transform:translateY(0)}95%,100%{opacity:0}}
        @keyframes loja-badge{0%,48%{opacity:0;transform:scale(0)}56%,86%{opacity:1;transform:scale(1)}95%,100%{opacity:0}}
        @keyframes loja-cart-bounce{0%,100%{transform:translateY(0)}50%{transform:translateY(-2px)}}
        @keyframes loja-added{0%,52%{opacity:0;transform:translateY(4px)}62%,80%{opacity:1;transform:translateY(0)}88%,100%{opacity:0}}
      `}</style>

      {/* Nav */}
      <div className="flex items-center gap-2 px-3 py-2 bg-[#111827] border-b border-white/5"
        style={{ animation: "loja-nav 9s ease-in-out infinite" }}>
        <div className="w-14 h-4 rounded bg-[#667eea]/50"/>
        <div className="flex gap-2 ml-2">
          {[28,22,26].map((w, i) => <div key={i} style={{ width: w }} className="h-2 rounded bg-white/15"/>)}
        </div>
        <div className="ml-auto flex items-center gap-2">
          <div className="w-5 h-5 rounded bg-white/8 flex items-center justify-center">
            <div className="w-2.5 h-2 rounded-sm bg-white/30"/>
          </div>
          {/* Cart with badge */}
          <div className="relative" style={{ animation: "loja-cart-bounce 1s 4.5s ease-in-out infinite" }}>
            <div className="w-7 h-7 rounded-lg bg-white/8 border border-white/10 flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.55)" strokeWidth="2" className="w-3.5 h-3.5">
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
                <line x1="3" y1="6" x2="21" y2="6"/>
                <path d="M16 10a4 4 0 01-8 0"/>
              </svg>
            </div>
            <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#667eea] flex items-center justify-center"
              style={{ animation: "loja-badge 9s ease-in-out infinite" }}>
              <span style={{ color: "#fff", fontSize: 8, fontWeight: 700, lineHeight: 1 }}>3</span>
            </div>
          </div>
        </div>
      </div>

      {/* Products */}
      <div className="flex-1 p-3 flex flex-col gap-2 overflow-hidden">
        <div className="flex items-center gap-2 mb-0.5">
          <div className="h-3 w-20 rounded bg-white/15"/>
          <div className="ml-auto flex gap-1">
            <div className="h-5 w-14 rounded-full bg-[#667eea]/35"/>
            <div className="h-5 w-14 rounded-full bg-white/8 border border-white/10"/>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 flex-1">
          {[
            { a: "loja-p1" },
            { a: "loja-p2" },
            { a: "loja-p3" },
            { a: "loja-p4" },
          ].map((p, i) => (
            <div key={i} className="rounded-xl border border-white/8 flex flex-col overflow-hidden"
              style={{ background: "rgba(255,255,255,0.04)", animation: `${p.a} 9s ease-in-out infinite` }}>
              <div className="h-14 flex items-center justify-center"
                style={{ background: "linear-gradient(135deg,rgba(102,126,234,0.18),rgba(118,75,162,0.12))" }}>
                <div className="w-8 h-8 rounded-lg" style={{ background: "rgba(102,126,234,0.45)" }}/>
              </div>
              <div className="p-1.5 flex flex-col gap-1">
                <div className="h-1.5 w-full rounded bg-white/18"/>
                <div className="h-1.5 w-2/3 rounded bg-white/10"/>
                <div className="flex items-center justify-between mt-0.5">
                  <div className="h-3 w-8 rounded" style={{ background: "rgba(102,126,234,0.65)" }}/>
                  <div className="h-5 w-12 rounded-lg" style={{ background: "rgba(102,126,234,0.5)" }}/>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* "Adicionado ao carrinho" toast */}
        <div className="rounded-lg px-3 py-1.5 flex items-center gap-2"
          style={{ background: "rgba(102,126,234,0.2)", border: "1px solid rgba(102,126,234,0.35)", animation: "loja-added 9s ease-in-out infinite" }}>
          <div className="w-4 h-4 rounded-full bg-[#667eea]/60 flex items-center justify-center flex-shrink-0">
            <svg viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.8)" strokeWidth="3" className="w-2.5 h-2.5">
              <path d="M20 6L9 17l-5-5"/>
            </svg>
          </div>
          <div className="h-1.5 w-28 rounded bg-white/30"/>
        </div>
      </div>
    </div>
  );
}

function BotsMockup() {
  return (
    <div className="w-full h-full rounded-xl overflow-hidden bg-[#0a0f1e] flex flex-col">
      <style>{`
        @keyframes bt-hdr{0%,5%{opacity:0}15%,88%{opacity:1}97%,100%{opacity:0}}
        @keyframes bt-m1{0%,10%{opacity:0;transform:translateY(4px)}20%,88%{opacity:1;transform:translateY(0)}97%,100%{opacity:0}}
        @keyframes bt-m2{0%,22%{opacity:0;transform:translateY(4px)}32%,88%{opacity:1;transform:translateY(0)}97%,100%{opacity:0}}
        @keyframes bt-typing{0%,38%{opacity:0}44%,54%{opacity:1}58%,100%{opacity:0}}
        @keyframes bt-m3{0%,56%{opacity:0;transform:translateY(4px)}66%,88%{opacity:1;transform:translateY(0)}97%,100%{opacity:0}}
        @keyframes bt-chips{0%,62%{opacity:0;transform:scale(0.85)}72%,88%{opacity:1;transform:scale(1)}97%,100%{opacity:0}}
        @keyframes bt-m4{0%,70%{opacity:0;transform:translateY(4px)}80%,88%{opacity:1;transform:translateY(0)}97%,100%{opacity:0}}
        @keyframes bt-input{0%,78%{opacity:0}88%{opacity:1}97%,100%{opacity:0}}
        @keyframes bt-dot{0%,100%{transform:translateY(0);opacity:0.35}50%{transform:translateY(-3px);opacity:1}}
        @keyframes bt-online{0%,100%{opacity:1}50%{opacity:0.25}}
      `}</style>

      {/* Header */}
      <div className="flex items-center gap-2 px-3 py-2.5 bg-[#111827] border-b border-white/5"
        style={{ animation: "bt-hdr 10s ease-in-out infinite" }}>
        <div className="relative">
          <div className="w-8 h-8 rounded-full bg-green-500/25 flex items-center justify-center flex-shrink-0">
            <svg viewBox="0 0 24 24" fill="rgba(74,222,128,0.85)" className="w-4 h-4">
              <rect x="3" y="8" width="18" height="12" rx="2"/>
              <path d="M9 8V6a3 3 0 016 0v2" stroke="rgba(74,222,128,0.85)" strokeWidth="2" fill="none"/>
              <circle cx="9" cy="14" r="1"/><circle cx="15" cy="14" r="1"/>
            </svg>
          </div>
          <div className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-green-400 border-2 border-[#111827]"
            style={{ animation: "bt-online 2.5s 2s ease-in-out infinite" }}/>
        </div>
        <div className="flex flex-col gap-0.5">
          <div className="h-2.5 w-16 rounded bg-white/25"/>
          <div className="h-1.5 w-10 rounded bg-green-400/45"/>
        </div>
        <div className="ml-auto flex gap-2">
          <div className="w-6 h-6 rounded-full bg-white/6"/>
          <div className="w-6 h-6 rounded-full bg-white/6"/>
        </div>
      </div>

      {/* Chat area */}
      <div className="flex-1 px-3 pt-3 pb-2 flex flex-col gap-2 overflow-hidden">
        {/* Bot msg 1 */}
        <div className="flex gap-2" style={{ animation: "bt-m1 10s ease-in-out infinite" }}>
          <div className="w-6 h-6 rounded-full bg-green-500/25 flex-shrink-0 mt-0.5"/>
          <div className="rounded-xl rounded-tl-none px-2.5 py-2 max-w-[72%] flex flex-col gap-1"
            style={{ background: "rgba(255,255,255,0.07)" }}>
            <div className="h-1.5 w-32 rounded bg-white/28"/>
            <div className="h-1.5 w-24 rounded bg-white/18"/>
          </div>
        </div>

        {/* User msg */}
        <div className="flex gap-2 justify-end" style={{ animation: "bt-m2 10s ease-in-out infinite" }}>
          <div className="rounded-xl rounded-tr-none px-2.5 py-2 max-w-[58%]"
            style={{ background: "rgba(102,126,234,0.32)" }}>
            <div className="h-1.5 w-20 rounded bg-[#667eea]/75"/>
          </div>
        </div>

        {/* Typing indicator */}
        <div className="flex gap-2" style={{ animation: "bt-typing 10s ease-in-out infinite" }}>
          <div className="w-6 h-6 rounded-full bg-green-500/25 flex-shrink-0 mt-0.5"/>
          <div className="rounded-xl rounded-tl-none px-3 py-2.5 flex gap-1 items-center"
            style={{ background: "rgba(255,255,255,0.07)" }}>
            {[0, 0.22, 0.44].map((d, i) => (
              <div key={i} className="w-1.5 h-1.5 rounded-full bg-white/40"
                style={{ animation: `bt-dot 0.9s ${d}s ease-in-out infinite` }}/>
            ))}
          </div>
        </div>

        {/* Bot msg 2 with chips */}
        <div className="flex gap-2" style={{ animation: "bt-m3 10s ease-in-out infinite" }}>
          <div className="w-6 h-6 rounded-full bg-green-500/25 flex-shrink-0 mt-0.5"/>
          <div className="rounded-xl rounded-tl-none px-2.5 py-2 max-w-[82%] flex flex-col gap-1.5"
            style={{ background: "rgba(255,255,255,0.07)" }}>
            <div className="h-1.5 w-36 rounded bg-white/28"/>
            <div className="h-1.5 w-28 rounded bg-white/18"/>
            <div className="flex gap-1.5 mt-0.5 flex-wrap" style={{ animation: "bt-chips 10s ease-in-out infinite" }}>
              {[24, 18, 30].map((w, i) => (
                <div key={i} className="h-5 rounded-full px-2 flex items-center"
                  style={{ background: "rgba(102,126,234,0.38)" }}>
                  <div className="h-1.5 rounded bg-[#667eea]/80" style={{ width: w }}/>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* User reply */}
        <div className="flex gap-2 justify-end" style={{ animation: "bt-m4 10s ease-in-out infinite" }}>
          <div className="rounded-xl rounded-tr-none px-2.5 py-2"
            style={{ background: "rgba(102,126,234,0.32)" }}>
            <div className="h-1.5 w-16 rounded bg-[#667eea]/75"/>
          </div>
        </div>

        {/* Input bar */}
        <div className="mt-auto flex gap-2 items-center rounded-full px-3 py-2 border border-white/8"
          style={{ background: "rgba(255,255,255,0.05)", animation: "bt-input 10s ease-in-out infinite" }}>
          <div className="h-1.5 flex-1 rounded bg-white/18"/>
          <div className="w-6 h-6 rounded-full flex-shrink-0" style={{ background: "rgba(102,126,234,0.65)" }}/>
        </div>
      </div>
    </div>
  );
}

/* ── Main component ── */

export default function Servicos() {
  const [active, setActive] = useState(0);
  const current = tabs[active];

  return (
    <section
      id="servicos"
      className="bg-section-servicos px-4 sm:px-8 lg:px-[6vw] py-16 sm:py-20 lg:py-28"
    >
      {/* Header */}
      <Reveal>
        <div className="text-center mb-10 sm:mb-14">
          <h2
            className="font-display font-black text-gray-900 dark:text-white leading-[1.12] tracking-tight"
            style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
          >
            O que podemos{" "}
            <span className="gradient-text">criar para você</span>
          </h2>
          <p className="mt-3 font-body text-gray-500 dark:text-[#8a9ab8] max-w-[480px] mx-auto leading-relaxed text-sm sm:text-base">
            Soluções digitais modernas que transformam ideias em resultados reais.
          </p>
        </div>
      </Reveal>

      {/* Tabs */}
      <Reveal delay={0.1}>
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 sm:mb-12">
          {tabs.map((tab, i) => (
            <button
              key={tab.label}
              onClick={() => setActive(i)}
              className={`inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-sm font-medium transition-all duration-200 border cursor-pointer
                ${active === i
                  ? "bg-[#667eea]/15 border-[#667eea]/50 text-[#667eea] scale-[1.04] -translate-y-0.5 shadow-[0_4px_14px_rgba(102,126,234,0.25)]"
                  : "bg-gray-100 dark:bg-white/5 border-gray-200 dark:border-white/10 text-gray-500 dark:text-[#8a9ab8] hover:bg-[#667eea]/8 hover:border-[#667eea]/35 hover:text-[#667eea] dark:hover:bg-[#667eea]/10 dark:hover:border-[#667eea]/35 dark:hover:text-[#667eea] hover:-translate-y-0.5 hover:scale-[1.04] hover:shadow-[0_4px_14px_rgba(102,126,234,0.15)]"
                }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>
      </Reveal>

      {/* Content */}
      <Reveal delay={0.15}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">

          {/* Preview mockup */}
          <div
            className="w-full aspect-[4/3] rounded-2xl overflow-hidden border border-gray-200 dark:border-white/8 shadow-2xl"
            style={{ background: "linear-gradient(135deg,#0d1f3c,#060d1f)" }}
          >
            {current.preview}
          </div>

          {/* Text */}
          <div className="flex flex-col items-start">
            <h3
              className="font-display font-black text-gray-900 dark:text-white mb-4 leading-tight"
              style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}
            >
              {current.title}
            </h3>
            <p className="font-body text-gray-500 dark:text-[#8a9ab8] leading-relaxed text-sm sm:text-base mb-8">
              {current.description}
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
