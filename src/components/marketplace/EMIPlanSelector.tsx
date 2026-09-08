import React from 'react';
import { EMIPlan } from '../../types/marketplace';
import { CheckCircle2, Zap, Info, ShieldCheck } from 'lucide-react';

interface EMIPlanSelectorProps {
  emiPlans: EMIPlan[];
  selectedPlan: EMIPlan | null;
  onSelectPlan: (plan: EMIPlan) => void;
  productPrice: number;
}

export const EMIPlanSelector: React.FC<EMIPlanSelectorProps> = ({
  emiPlans,
  selectedPlan,
  onSelectPlan,
  productPrice,
}) => {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <div>
          <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-brand-400" />
            <span>Select 1Fi EMI Plan</span>
          </h4>
          <p className="text-xs text-slate-400">Pre-approved zero collateral EMI with instant approval</p>
        </div>
        <span className="text-[11px] bg-brand-500/10 text-brand-400 font-semibold px-2.5 py-1 rounded-full border border-brand-500/20">
          0% Interest Available
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
        {emiPlans.map((plan) => {
          const isSelected = selectedPlan?.id === plan.id;
          return (
            <div
              key={plan.id}
              onClick={() => onSelectPlan(plan)}
              className={`relative p-3.5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                isSelected
                  ? 'bg-brand-950/40 border-brand-500 ring-1 ring-brand-500 shadow-glow-teal'
                  : 'bg-slate-900/90 border-slate-800 hover:border-slate-700'
              }`}
            >
              {/* Popular tag badge */}
              {plan.popularTag && (
                <span className="absolute -top-2.5 right-3 bg-gradient-to-r from-brand-500 to-emerald-400 text-slate-950 text-[10px] font-extrabold px-2 py-0.5 rounded-full shadow-sm">
                  {plan.popularTag}
                </span>
              )}

              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center space-x-1.5 mb-1">
                    <span className="font-extrabold text-base text-white">
                      ₹{plan.monthlyAmount.toLocaleString('en-IN')}
                    </span>
                    <span className="text-xs text-slate-400">/ mo</span>
                  </div>

                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-bold text-slate-200">
                      {plan.tenureMonths} Months
                    </span>
                    {plan.isNoCost ? (
                      <span className="text-[10px] bg-brand-500/20 text-brand-400 font-bold px-2 py-0.5 rounded-md flex items-center gap-0.5">
                        <Zap className="w-2.5 h-2.5 fill-brand-400" />
                        No Cost EMI
                      </span>
                    ) : (
                      <span className="text-[10px] bg-slate-800 text-slate-400 font-medium px-2 py-0.5 rounded-md">
                        {plan.interestRate}% p.a.
                      </span>
                    )}
                  </div>
                </div>

                {/* Radio Checkbox Indicator */}
                <div className="pt-0.5">
                  <CheckCircle2
                    className={`w-5 h-5 transition-colors ${
                      isSelected ? 'text-brand-400 fill-brand-500/20' : 'text-slate-700'
                    }`}
                  />
                </div>
              </div>

              {/* Total breakdown footer */}
              <div className="mt-3 pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                <span>Total Payable: <strong className="text-slate-200">₹{plan.totalPayable.toLocaleString('en-IN')}</strong></span>
                <span>Proc. Fee: {plan.processingFee === 0 ? <strong className="text-emerald-400">FREE</strong> : `₹${plan.processingFee}`}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
