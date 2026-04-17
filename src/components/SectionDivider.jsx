export default function SectionDivider({ simple = false }) {
  return (
    /* h-0 → ocupa zero espaço vertical; overflow-visible → orb aparece sobre as seções */
    <div className="relative w-full h-0 overflow-visible z-10">
      <div className="absolute inset-x-0 top-0 flex items-center">

        {/* Left line */}
        <div
          className="flex-1 h-px"
          style={{
            background:
              "linear-gradient(to right, transparent 0%, rgba(102,126,234,0.15) 30%, rgba(102,126,234,0.50) 100%)",
          }}
        />

        {/* Center animated orb */}
        {!simple && (
          <div className="relative flex items-center justify-center" style={{ width: 56, height: 56 }}>
            {/* Pulse ring 1 */}
            <span
              className="absolute rounded-full border border-[#667eea]/30"
              style={{ width: 52, height: 52, animation: "sdiv-pulse 2.6s ease-in-out infinite" }}
            />
            {/* Pulse ring 2 – delayed */}
            <span
              className="absolute rounded-full border border-[#764ba2]/20"
              style={{ width: 40, height: 40, animation: "sdiv-pulse 2.6s ease-in-out 0.85s infinite" }}
            />
            {/* Inner glow */}
            <span
              className="absolute rounded-full"
              style={{
                width: 24, height: 24,
                background: "radial-gradient(circle at 38% 32%, rgba(167,139,250,0.6) 0%, rgba(102,126,234,0.4) 55%, transparent 100%)",
                animation: "sdiv-glow 2.6s ease-in-out infinite",
              }}
            />
            {/* Core */}
            <span
              className="relative z-10 rounded-full"
              style={{
                width: 9, height: 9,
                background: "linear-gradient(135deg,#a78bfa,#667eea)",
                boxShadow: "0 0 10px 3px rgba(102,126,234,0.6)",
                animation: "sdiv-core 2.6s ease-in-out infinite",
              }}
            />
          </div>
        )}

        {/* Right line */}
        <div
          className="flex-1 h-px"
          style={{
            background:
              "linear-gradient(to left, transparent 0%, rgba(102,126,234,0.15) 30%, rgba(102,126,234,0.50) 100%)",
          }}
        />

      </div>

      <style>{`
        @keyframes sdiv-pulse {
          0%,100% { transform: scale(1);    opacity: 0.65; }
          50%      { transform: scale(1.22); opacity: 0.12; }
        }
        @keyframes sdiv-glow {
          0%,100% { opacity: 0.7;  transform: scale(1); }
          50%      { opacity: 1;    transform: scale(1.1); }
        }
        @keyframes sdiv-core {
          0%,100% { box-shadow: 0 0 8px 2px rgba(102,126,234,0.5); }
          50%      { box-shadow: 0 0 18px 6px rgba(102,126,234,0.85); }
        }
      `}</style>
    </div>
  );
}
