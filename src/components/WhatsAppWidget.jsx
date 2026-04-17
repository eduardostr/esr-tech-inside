import { useState, useEffect } from 'react';

const WhatsAppWidget = () => {
  const [isOpen, setIsOpen]       = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const whatsappNumber = '5571982644841';
  const defaultMessage = 'Olá! Gostaria de saber mais sobre os serviços da ESR Tech Inside.';

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  // Close popup when clicking outside
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e) => {
      if (!e.target.closest('[data-whatsapp-widget]')) setIsOpen(false);
    };
    document.addEventListener('pointerdown', handler);
    return () => document.removeEventListener('pointerdown', handler);
  }, [isOpen]);

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`, '_blank');
    setIsOpen(false);
  };

  return (
    <div
      data-whatsapp-widget
      className={`fixed z-50 transition-all duration-500
        bottom-4 right-4 sm:bottom-6 sm:right-6
        ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
    >
      {/* Popup card */}
      {isOpen && (
        <div
          className="absolute bottom-[72px] sm:bottom-[84px] right-0
            w-[calc(100vw-32px)] max-w-[288px] sm:w-72
            bg-white dark:bg-[#1c1c1c] rounded-2xl shadow-2xl dark:shadow-black/40
            p-4 sm:p-5 border border-[#667eea]/10 dark:border-white/8"
          style={{ animation: 'fadeUpPop .25s ease both' }}
        >
          {/* Close */}
          <button onClick={() => setIsOpen(false)}
            className="absolute top-2.5 right-2.5 w-7 h-7 flex items-center justify-center rounded-full
              text-[#888] dark:text-[#666] hover:bg-[#f0f0f0] dark:hover:bg-white/10
              hover:text-[#1a1a1a] dark:hover:text-white transition-all bg-transparent border-none cursor-pointer">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </button>

          <div className="flex items-start gap-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center flex-shrink-0 shadow-esr-sm" style={{ background: "#25D366" }}>
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
              </svg>
            </div>

            <div className="flex-1 pr-4">
              <h3 className="font-semibold text-[#1a1a1a] dark:text-white text-sm mb-1 font-body">Fale Conosco</h3>
              <p className="text-[0.75rem] text-[#666] dark:text-[#aaa] mb-3 leading-snug font-body">
                Estamos online! Como podemos ajudar você hoje?
              </p>
              <button onClick={handleWhatsAppClick}
                className="w-full bg-[#25D366] hover:bg-[#1fbb5a] text-white font-semibold text-[0.82rem] sm:text-sm
                  py-2.5 px-4 rounded-xl transition-all duration-200 flex items-center justify-center gap-2
                  border-none cursor-pointer active:scale-[0.97] shadow-md">
                <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Iniciar Conversa
              </button>
            </div>
          </div>
        </div>
      )}

      {/* FAB */}
      <button
        onClick={() => setIsOpen((v) => !v)}
        aria-label="Abrir chat do WhatsApp"
        className="relative w-14 h-14 sm:w-16 sm:h-16 text-white rounded-full
          shadow-esr-lg flex items-center justify-center border-none cursor-pointer
          transition-all duration-300 hover:scale-110 active:scale-95 touch-manipulation"
        style={{ background: "#25D366" }}
      >
        {isOpen ? (
          <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        ) : (
          <>
            <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            <span className="absolute -top-1 -right-1 w-3.5 h-3.5 sm:w-4 sm:h-4 bg-red-500 rounded-full animate-ping opacity-75" />
            <span className="absolute -top-1 -right-1 w-3.5 h-3.5 sm:w-4 sm:h-4 bg-red-500 rounded-full" />
          </>
        )}
      </button>
    </div>
  );
};

export default WhatsAppWidget;
