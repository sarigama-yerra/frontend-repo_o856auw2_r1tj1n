import { useState } from 'react';

function BoostCard({ title, description, priceFrom, img, tag }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`relative rounded-2xl p-5 sm:p-6 bg-white/5 border border-white/10 backdrop-blur-xl transition-all duration-300 shadow-[0_10px_40px_rgba(0,0,0,0.35)] ${
        hovered ? 'scale-[1.015] border-cyan-400/30' : ''
      }`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Neon accent */}
      <div className="absolute inset-0 rounded-2xl pointer-events-none">
        <div className={`absolute -inset-[1px] rounded-2xl opacity-0 ${
          hovered ? 'opacity-100' : ''
        } transition-opacity duration-300 bg-gradient-to-r from-[#00E5FF] to-[#6A00FF] blur-[6px]`}></div>
      </div>

      <div className="relative flex items-start gap-4">
        <img src={img} alt="Apex badge" className="w-14 h-14 rounded-lg object-contain bg-black/20 border border-white/10" />
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-lg sm:text-xl font-semibold text-white">{title}</h3>
            {tag && (
              <span className="text-[10px] uppercase tracking-wider rounded-full px-2 py-0.5 bg-gradient-to-r from-[#00E5FF]/20 to-[#6A00FF]/20 border border-white/10 text-cyan-200">{tag}</span>
            )}
          </div>
          <p className="mt-1 text-sm text-slate-300/90">{description}</p>
          <div className="mt-3 flex items-center justify-between">
            <div className="text-sm text-slate-200/90">From <span className="text-white font-semibold">${priceFrom}</span></div>
            <button className="text-slate-950 font-semibold text-sm rounded-lg px-3 py-2 bg-gradient-to-r from-[#00E5FF] to-[#6A00FF] shadow-lg shadow-cyan-500/20 hover:opacity-95 transition">Select</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BoostCard;
