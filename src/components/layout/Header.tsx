import React, { useState } from 'react';
import { ShieldCheck, Wallet, Bell, Sparkles } from 'lucide-react';
import { CreditLimitModal } from './CreditLimitModal';

export const Header: React.FC = () => {
  const [isCreditModalOpen, setIsCreditModalOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-30 bg-[#0A0E17]/90 backdrop-blur-md border-b border-slate-800/80 px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Left: 1Fi Brand Logo & Credit Badge */}
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-brand-600 via-brand-500 to-emerald-300 flex items-center justify-center shadow-glow-teal font-extrabold text-slate-950 text-xl tracking-tighter">
                1Fi
              </div>
              <span className="font-extrabold text-xl tracking-tight text-white hidden sm:inline-block">
                1Fi <span className="text-brand-500 font-normal text-sm ml-1 px-2 py-0.5 rounded-full bg-brand-500/10 border border-brand-500/20">FINTECH</span>
              </span>
            </div>

            <div className="h-5 w-px bg-slate-800 hidden md:block"></div>

            {/* Collateral / Credit Line Badge (Clickable) */}
            <button
              onClick={() => setIsCreditModalOpen(true)}
              className="flex items-center space-x-1.5 bg-slate-900/90 hover:bg-slate-800 border border-brand-500/30 px-2.5 py-1 rounded-full text-xs text-slate-300 transition-colors cursor-pointer group"
              title="Click to view 1Fi Credit Line details"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-brand-400 group-hover:scale-110 transition-transform" />
              <span className="text-slate-400 hidden xs:inline">1Fi Line:</span>
              <span className="font-semibold text-brand-400 group-hover:underline">₹1,50,000 Approved</span>
            </button>
          </div>

        {/* Right: Wallet & Notifications */}
        <div className="flex items-center space-x-3">
          <button className="flex items-center space-x-1.5 bg-slate-900 hover:bg-slate-800 border border-slate-800 px-3 py-1.5 rounded-full transition-colors text-xs font-medium text-slate-300">
            <Wallet className="w-3.5 h-3.5 text-brand-400" />
            <span>₹12,450</span>
          </button>
          
          <button className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white transition-colors relative">
            <Bell className="w-4 h-4" />
            <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-brand-500"></span>
          </button>
        </div>

      </div>
    </header>

    <CreditLimitModal
      isOpen={isCreditModalOpen}
      onClose={() => setIsCreditModalOpen(false)}
    />
  </>
  );
};
