import React from 'react';
import { X, ShieldCheck, TrendingUp, Zap, PieChart, Info, CheckCircle2 } from 'lucide-react';

interface CreditLimitModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CreditLimitModal: React.FC<CreditLimitModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
      <div className="relative w-full max-w-md bg-[#0A0E17] border border-slate-800 rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-[#121824]">
          <div className="flex items-center space-x-2">
            <div className="w-7 h-7 rounded-lg bg-brand-500/20 text-brand-400 border border-brand-500/30 flex items-center justify-center font-extrabold text-xs">
              1Fi
            </div>
            <h3 className="font-extrabold text-white text-sm">Your 1Fi Credit Line Details</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-slate-900 text-slate-400 hover:text-white transition-colors border border-slate-800"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-5">
          {/* Main Approved Banner */}
          <div className="bg-gradient-to-br from-brand-950/60 via-[#121824] to-[#121824] p-5 rounded-2xl border border-brand-500/30 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-3 opacity-10">
              <ShieldCheck className="w-24 h-24 text-brand-400" />
            </div>
            
            <span className="text-[10px] uppercase font-bold text-brand-400 tracking-wider block mb-1">
              Sanctioned Credit Line
            </span>
            <div className="flex items-baseline space-x-2">
              <span className="text-3xl font-extrabold text-white">₹1,50,000</span>
              <span className="text-xs text-emerald-400 font-semibold flex items-center gap-0.5">
                <CheckCircle2 className="w-3.5 h-3.5" /> Active
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-2">
              0% Interest EMI available on 1Fi Marketplace using your pre-approved collateral credit line.
            </p>
          </div>

          {/* Collateral Breakdown */}
          <div className="bg-[#121824] p-4 rounded-2xl border border-slate-800 space-y-3">
            <h4 className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
              <PieChart className="w-4 h-4 text-brand-400" />
              <span>Pledged Mutual Fund Holdings</span>
            </h4>

            <div className="space-y-2 text-xs">
              <div className="flex justify-between py-1 border-b border-slate-800/80">
                <span className="text-slate-400">Total MF Portfolio Value</span>
                <span className="font-semibold text-white">₹3,40,000</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-800/80">
                <span className="text-slate-400">Loan-To-Value (LTV) Ratio</span>
                <span className="font-semibold text-brand-400">44.1%</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-800/80">
                <span className="text-slate-400">Pledged Fund 1</span>
                <span className="font-medium text-slate-300">Axis Bluechip Fund (Direct)</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-slate-400">Pledged Fund 2</span>
                <span className="font-medium text-slate-300">Nippon India Small Cap</span>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="bg-slate-900/60 p-3.5 rounded-2xl border border-slate-800 text-xs text-slate-300 space-y-1.5">
            <div className="flex items-center space-x-2">
              <Zap className="w-4 h-4 text-brand-400 flex-shrink-0" />
              <span>No redemption of your mutual funds required. Your investments continue growing!</span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-full py-2.5 bg-brand-500 hover:bg-brand-400 text-slate-950 font-bold text-xs rounded-xl transition-all shadow-glow-teal"
          >
            Got it
          </button>
        </div>

      </div>
    </div>
  );
};
