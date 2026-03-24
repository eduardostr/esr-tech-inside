import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Reveal } from "./Reveal";

const SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const STATUS = { IDLE: "idle", SENDING: "sending", SUCCESS: "success", ERROR: "error" };

export default function Contato() {
  const formRef = useRef(null);
  const [status, setStatus] = useState(STATUS.IDLE);
  const [form, setForm] = useState({ from_name: "", from_email: "", subject: "", message: "" });

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(STATUS.SENDING);
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, { publicKey: PUBLIC_KEY });
      setStatus(STATUS.SUCCESS);
      setForm({ from_name: "", from_email: "", subject: "", message: "" });
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus(STATUS.ERROR);
    }
  };

  const inputCls = `w-full bg-white dark:bg-[#1c1c1c]
    border border-esr-primary/15 dark:border-white/10
    rounded-xl sm:rounded-2xl px-4 sm:px-[18px] py-3 sm:py-3.5
    font-body text-[0.875rem] sm:text-[0.9rem] text-[#1a1a1a] dark:text-white
    outline-none placeholder:text-[#999] dark:placeholder:text-[#555]
    focus:border-esr-primary focus:ring-4 focus:ring-esr-primary/10
    transition-all disabled:opacity-50 disabled:cursor-not-allowed`;

  const labelCls = "font-body text-[0.75rem] sm:text-[0.8rem] font-semibold uppercase tracking-[0.5px] text-[#666] dark:text-[#888]";
  const isSending = status === STATUS.SENDING;

  return (
    <section id="contato" className="bg-white dark:bg-[#0a0a0a] px-4 sm:px-8 lg:px-[6vw] py-12 sm:py-16 lg:py-24">
      <div className="text-center">
        <Reveal>
          <p className="text-[0.68rem] sm:text-[0.72rem] font-semibold tracking-[2.5px] uppercase text-esr-primary mb-3">Contato</p>
          <h2 className="font-display font-extrabold text-[#1a1a1a] dark:text-white leading-[1.12] tracking-[-0.5px]"
              style={{ fontSize: "clamp(1.7rem, 5vw, 3.2rem)" }}>
            Vamos conversar sobre<br />o seu projeto
          </h2>
          <p className="mt-3 sm:mt-4 font-body font-light text-[#555] dark:text-[#aaa] max-w-[420px] leading-[1.75] text-sm sm:text-base mx-auto">
            Preencha o formulário abaixo e retornaremos em até 24 horas.
          </p>
        </Reveal>
      </div>

      <Reveal delay={0.1}>
        <div className="max-w-[640px] mx-auto mt-8 sm:mt-14
          bg-[#f8f9fa] dark:bg-[#111]
          rounded-2xl sm:rounded-[28px]
          p-5 sm:p-8 lg:p-12
          border border-esr-primary/10 dark:border-white/8">

          {/* SUCCESS */}
          {status === STATUS.SUCCESS && (
            <div className="text-center py-6 sm:py-8">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-esr-primary/10 flex items-center justify-center mx-auto mb-4 sm:mb-5">
                <svg width="26" height="26" fill="none" stroke="#667eea" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path d="M20 6L9 17l-5-5"/>
                </svg>
              </div>
              <h3 className="font-display font-bold text-[#1a1a1a] dark:text-white text-[1.2rem] sm:text-[1.4rem] tracking-[-0.5px] mb-2">
                Mensagem enviada!
              </h3>
              <p className="font-body text-[0.85rem] sm:text-[0.9rem] text-[#666] dark:text-[#999] mb-5">
                Obrigado pelo contato. Nossa equipe retornará em até 24 horas.
              </p>
              <button onClick={() => setStatus(STATUS.IDLE)}
                className="font-display font-bold text-sm text-esr-primary border border-esr-primary/30
                  px-5 sm:px-6 py-2.5 rounded-full hover:bg-esr-primary/[.08] transition-all cursor-pointer bg-transparent">
                Enviar outra mensagem
              </button>
            </div>
          )}

          {/* FORM */}
          {status !== STATUS.SUCCESS && (
            <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-4 sm:gap-5">
              {status === STATUS.ERROR && (
                <div className="flex items-start gap-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700/50 rounded-xl sm:rounded-2xl px-4 py-3">
                  <svg className="w-5 h-5 text-red-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10"/><path d="M12 8v4m0 4h.01"/>
                  </svg>
                  <p className="font-body text-[0.82rem] sm:text-[0.85rem] text-red-700 dark:text-red-400 leading-snug">
                    Ocorreu um erro ao enviar. Verifique sua conexão e tente novamente.
                  </p>
                </div>
              )}

              {/* Nome + Email — always stacked on mobile */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                <div className="flex flex-col gap-1.5 sm:gap-2">
                  <label className={labelCls}>Nome completo</label>
                  <input type="text" name="from_name" value={form.from_name} onChange={handleChange}
                    placeholder="Seu nome completo" required disabled={isSending} className={inputCls} />
                </div>
                <div className="flex flex-col gap-1.5 sm:gap-2">
                  <label className={labelCls}>E-mail</label>
                  <input type="email" name="from_email" value={form.from_email} onChange={handleChange}
                    placeholder="seu@email.com" required disabled={isSending} className={inputCls} />
                </div>
              </div>

              <div className="flex flex-col gap-1.5 sm:gap-2">
                <label className={labelCls}>Assunto</label>
                <input type="text" name="subject" value={form.subject} onChange={handleChange}
                  placeholder="Ex: Quero uma landing page para meu negócio" required disabled={isSending} className={inputCls} />
              </div>

              <div className="flex flex-col gap-1.5 sm:gap-2">
                <label className={labelCls}>Mensagem</label>
                <textarea name="message" value={form.message} onChange={handleChange}
                  placeholder="Conte um pouco sobre seu projeto, nicho e objetivos..."
                  required disabled={isSending} rows={4}
                  className={`${inputCls} resize-y min-h-[120px] sm:min-h-[140px]`} />
              </div>

              <button type="submit" disabled={isSending}
                className="w-full font-display font-bold text-sm sm:text-base text-white bg-esr-gradient
                  rounded-xl sm:rounded-2xl py-3.5 sm:py-4 border-none cursor-pointer shadow-esr-md
                  hover:-translate-y-0.5 hover:shadow-esr-lg transition-all duration-200
                  disabled:opacity-70 disabled:cursor-not-allowed disabled:translate-y-0
                  flex items-center justify-center gap-3">
                {isSending ? (
                  <>
                    <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"/>
                    </svg>
                    Enviando...
                  </>
                ) : "Enviar mensagem →"}
              </button>
            </form>
          )}
        </div>
      </Reveal>
    </section>
  );
}
