import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Reveal } from "./Reveal";
import { useTheme } from "../ThemeContext";

const SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const STATUS = { IDLE: "idle", SENDING: "sending", SUCCESS: "success", ERROR: "error" };

const TIPOS = [
  "Site",
  "Landing Page",
  "Loja Virtual",
  "Sistema",
  "Bot de atendimento",
  "Outro",
];

const EMPTY = {
  from_name: "",
  from_email: "",
  phone: "",
  project_type: "",
  scope: "",
  colors: "",
  goal: "",
};

export default function Contato() {
  const { dark } = useTheme();
  const formRef = useRef(null);
  const [status, setStatus] = useState(STATUS.IDLE);
  const [form, setForm] = useState(EMPTY);

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(STATUS.SENDING);
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, { publicKey: PUBLIC_KEY });
      setStatus(STATUS.SUCCESS);
      setForm(EMPTY);
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus(STATUS.ERROR);
    }
  };

  const inputCls = dark
    ? `w-full bg-white/5 border border-white/10 rounded-xl
        px-4 py-3 font-body text-sm text-white outline-none
        placeholder:text-white/30
        focus:border-[#667eea]/60 focus:ring-2 focus:ring-[#667eea]/15
        transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed`
    : `w-full bg-gray-50 border border-gray-200 rounded-xl
        px-4 py-3 font-body text-sm text-gray-900 outline-none
        placeholder:text-gray-400
        focus:border-[#667eea]/60 focus:ring-2 focus:ring-[#667eea]/15
        transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed`;

  const isSending = status === STATUS.SENDING;

  return (
    <section
      id="contato"
      className="bg-section-contato px-4 sm:px-8 lg:px-[6vw] py-16 sm:py-20 lg:py-28"
    >
      {/* Header */}
      <Reveal>
        <div className="text-center mb-10 sm:mb-14">
          <h2
            className="font-display font-black text-gray-900 dark:text-white leading-[1.12] tracking-tight"
            style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
          >
            Vamos tirar sua ideia{" "}
            <span className="gradient-text">do papel</span>
          </h2>
          <p className="mt-3 font-body text-gray-500 dark:text-[#8a9ab8] max-w-[420px] mx-auto leading-relaxed text-sm sm:text-base">
            Me conte um pouco sobre seu projeto e eu entro em contato com você.
          </p>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <div
          className="max-w-[720px] mx-auto rounded-2xl overflow-hidden"
          style={{
            background: dark ? "rgba(13,31,60,0.6)" : "rgba(255,255,255,0.9)",
            backdropFilter: "blur(12px)",
            border: dark ? "1px solid rgba(255,255,255,0.08)" : "1px solid rgba(0,0,0,0.08)",
            boxShadow: dark ? "none" : "0 4px 24px rgba(0,0,0,0.06)",
          }}
        >

          {/* SUCCESS */}
          {status === STATUS.SUCCESS && (
            <div className="text-center py-16 px-8">
              <div className="w-14 h-14 rounded-full bg-[#667eea]/15 flex items-center justify-center mx-auto mb-5">
                <svg width="26" height="26" fill="none" stroke="#667eea" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path d="M20 6L9 17l-5-5"/>
                </svg>
              </div>
              <h3 className="font-display font-bold text-gray-900 dark:text-white text-xl mb-2">Formulário enviado!</h3>
              <p className="font-body text-gray-500 dark:text-[#8a9ab8] text-sm mb-6">
                Obrigado pelo contato. Entrarei em breve com você.
              </p>
              <button
                onClick={() => setStatus(STATUS.IDLE)}
                className="font-display font-bold text-sm text-[#667eea] border border-[#667eea]/30
                  px-6 py-2.5 rounded-xl hover:bg-[#667eea]/10 transition-all cursor-pointer bg-transparent"
              >
                Enviar outro
              </button>
            </div>
          )}

          {/* FORM */}
          {status !== STATUS.SUCCESS && (
            <form ref={formRef} onSubmit={handleSubmit} className="p-6 sm:p-10 flex flex-col gap-4">

              {status === STATUS.ERROR && (
                <div className="flex items-start gap-3 bg-red-500/10 border border-red-500/25 rounded-xl px-4 py-3">
                  <svg className="w-5 h-5 text-red-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10"/><path d="M12 8v4m0 4h.01"/>
                  </svg>
                  <p className="font-body text-sm text-red-400 leading-snug">
                    Ocorreu um erro ao enviar. Verifique sua conexão e tente novamente.
                  </p>
                </div>
              )}

              {/* Nome */}
              <input
                type="text" name="from_name" value={form.from_name}
                onChange={handleChange} placeholder="Nome do responsável"
                required disabled={isSending} className={inputCls}
              />

              {/* Email */}
              <input
                type="email" name="from_email" value={form.from_email}
                onChange={handleChange} placeholder="Seu e-mail"
                required disabled={isSending} className={inputCls}
              />

              {/* Telefone */}
              <input
                type="tel" name="phone" value={form.phone}
                onChange={handleChange} placeholder="Telefone (WhatsApp)"
                disabled={isSending} className={inputCls}
              />

              {/* Tipo de projeto */}
              <div className="relative">
                <select
                  name="project_type" value={form.project_type}
                  onChange={handleChange} required disabled={isSending}
                  className={`${inputCls} appearance-none cursor-pointer
                    ${form.project_type === "" ? (dark ? "text-white/30" : "text-gray-400") : (dark ? "text-white" : "text-gray-900")}`}
                >
                  <option value="" disabled hidden>Tipo de projeto</option>
                  {TIPOS.map(t => (
                    <option key={t} value={t} className={dark ? "bg-[#0d1f3c] text-white" : "bg-white text-gray-900"}>{t}</option>
                  ))}
                </select>
                <svg
                  viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                  className="w-4 h-4 text-white/30 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none"
                >
                  <path d="M6 9l6 6 6-6"/>
                </svg>
              </div>

              {/* Escopo */}
              <textarea
                name="scope" value={form.scope}
                onChange={handleChange} placeholder="Descreva o escopo do projeto"
                disabled={isSending} rows={4}
                className={`${inputCls} resize-y min-h-[100px]`}
              />

              {/* Cores */}
              <input
                type="text" name="colors" value={form.colors}
                onChange={handleChange} placeholder="Cores principais da marca"
                disabled={isSending} className={inputCls}
              />

              {/* Objetivo */}
              <textarea
                name="goal" value={form.goal}
                onChange={handleChange} placeholder="Objetivo do projeto"
                disabled={isSending} rows={3}
                className={`${inputCls} resize-y min-h-[90px]`}
              />

              {/* Submit */}
              <button
                type="submit" disabled={isSending}
                className="w-full font-display font-bold text-sm text-white bg-esr-gradient
                  rounded-xl py-4 border-none cursor-pointer shadow-esr-md
                  hover:-translate-y-0.5 hover:shadow-esr-lg transition-all duration-200
                  disabled:opacity-70 disabled:cursor-not-allowed disabled:translate-y-0
                  flex items-center justify-center gap-3 mt-1"
              >
                {isSending ? (
                  <>
                    <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"/>
                    </svg>
                    Enviando...
                  </>
                ) : "Enviar formulário"}
              </button>
            </form>
          )}
        </div>
      </Reveal>
    </section>
  );
}
