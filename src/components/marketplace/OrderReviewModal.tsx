import React from 'react';
import { Product, VariantOption, EMIPlan } from '../../types/marketplace';
import { X, ShieldCheck, CheckCircle2, Calendar, FileText, ArrowRight, Sparkles, ShoppingBag } from 'lucide-react';

interface OrderReviewModalProps {
  product: Product | null;
  selectedVariants: Record<string, VariantOption>;
  selectedEmiPlan: EMIPlan | null;
  calculatedPrice: number;
  isOpen: boolean;
  isConfirmed: boolean;
  onClose: () => void;
  onConfirm: () => void;
  onReset: () => void;
}

export const OrderReviewModal: React.FC<OrderReviewModalProps> = ({
  product,
  selectedVariants,
  selectedEmiPlan,
  calculatedPrice,
  isOpen,
  isConfirmed,
  onClose,
  onConfirm,
  onReset,
}) => {
  if (!isOpen || !product || !selectedEmiPlan) return null;

  const firstDueDate = new Date();
  firstDueDate.setMonth(firstDueDate.getMonth() + 1);
  firstDueDate.setDate(5); // 5th of next month

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 bg-slate-950/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-lg bg-[#0A0E17] border border-slate-800 rounded-3xl shadow-2xl overflow-hidden my-auto">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800/80 bg-[#121824]">
          <div className="flex items-center space-x-2">
            <ShieldCheck className="w-5 h-5 text-brand-400" />
            <h3 className="font-bold text-white text-base">
              {isConfirmed ? '1Fi EMI Loan Approved!' : 'Review EMI Selection'}
            </h3>
          </div>
          {!isConfirmed && (
            <button
              onClick={onClose}
              className="p-1.5 rounded-full bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors border border-slate-800"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-5">
          {isConfirmed ? (
            /* Success State */
            <div className="text-center py-4 space-y-4">
              <div className="w-16 h-16 rounded-full bg-brand-500/20 text-brand-400 border border-brand-500/40 flex items-center justify-center mx-auto shadow-glow-teal animate-bounce">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <h4 className="text-xl font-extrabold text-white">Application Approved!</h4>
                <p className="text-xs text-slate-400 mt-1">
                  Your 1Fi EMI Loan of <strong className="text-white">₹{calculatedPrice.toLocaleString('en-IN')}</strong> has been approved instantly against your 1Fi Credit Line.
                </p>
              </div>

              {/* Order reference summary */}
              <div className="bg-[#121824] p-4 rounded-2xl border border-slate-800 text-left space-y-2 text-xs">
                <div className="flex justify-between text-slate-400">
                  <span>Product:</span>
                  <span className="font-semibold text-white">{product.name}</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Monthly EMI:</span>
                  <span className="font-bold text-brand-400">₹{selectedEmiPlan.monthlyAmount.toLocaleString('en-IN')}/mo</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Tenure:</span>
                  <span className="font-semibold text-white">{selectedEmiPlan.tenureMonths} Months</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>First EMI Debit:</span>
                  <span className="font-semibold text-emerald-400">{firstDueDate.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                </div>
              </div>

              <button
                onClick={onReset}
                className="w-full py-3 bg-brand-500 hover:bg-brand-400 text-slate-950 font-extrabold text-xs rounded-xl shadow-glow-teal transition-all flex items-center justify-center space-x-2"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Return to Marketplace</span>
              </button>
            </div>
          ) : (
            /* Review State */
            <>
              {/* Product summary card */}
              <div className="flex items-center space-x-3 bg-[#121824] p-3.5 rounded-2xl border border-slate-800">
                <div className="w-14 h-14 bg-slate-900 rounded-xl p-1 border border-slate-800 flex items-center justify-center flex-shrink-0">
                  <img src={product.images[0]} alt="" className="object-contain max-h-full max-w-full" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-[10px] font-semibold text-brand-400 bg-brand-500/10 px-2 py-0.5 rounded">
                    {product.brand}
                  </span>
                  <h4 className="font-bold text-sm text-white truncate mt-0.5">{product.name}</h4>
                  <div className="flex items-center space-x-2 text-xs text-slate-400 mt-0.5">
                    {Object.values(selectedVariants).map((v, i) => (
                      <span key={i} className="bg-slate-900 px-1.5 py-0.5 rounded text-[10px]">
                        {v.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* EMI breakdown card */}
              <div className="bg-[#121824] p-4 rounded-2xl border border-slate-800 space-y-3">
                <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                  Selected EMI Plan Details
                </h4>

                <div className="space-y-2 text-xs">
                  <div className="flex justify-between items-center py-1 border-b border-slate-800/80">
                    <span className="text-slate-400">Monthly EMI</span>
                    <span className="font-extrabold text-brand-400 text-base">
                      ₹{selectedEmiPlan.monthlyAmount.toLocaleString('en-IN')}/mo
                    </span>
                  </div>

                  <div className="flex justify-between items-center py-1 border-b border-slate-800/80">
                    <span className="text-slate-400">Duration / Tenure</span>
                    <span className="font-semibold text-white">{selectedEmiPlan.tenureMonths} Months</span>
                  </div>

                  <div className="flex justify-between items-center py-1 border-b border-slate-800/80">
                    <span className="text-slate-400">Interest Type</span>
                    <span className="font-semibold text-emerald-400">
                      {selectedEmiPlan.isNoCost ? '0% No Cost EMI' : `${selectedEmiPlan.interestRate}% p.a.`}
                    </span>
                  </div>

                  <div className="flex justify-between items-center py-1 border-b border-slate-800/80">
                    <span className="text-slate-400">Processing Fee</span>
                    <span className="font-semibold text-slate-200">
                      {selectedEmiPlan.processingFee === 0 ? '₹0 (Waived)' : `₹${selectedEmiPlan.processingFee}`}
                    </span>
                  </div>

                  <div className="flex justify-between items-center pt-1 font-bold">
                    <span className="text-slate-200">Total Payable Amount</span>
                    <span className="text-white text-sm">
                      ₹{selectedEmiPlan.totalPayable.toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>
              </div>

              {/* AutoPay hint */}
              <div className="bg-brand-500/10 border border-brand-500/20 rounded-xl p-3 flex items-center space-x-3 text-xs text-brand-300">
                <Calendar className="w-5 h-5 text-brand-400 flex-shrink-0" />
                <div>
                  <span className="font-bold block">First EMI Auto-Debit Date:</span>
                  <span>{firstDueDate.toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })} via 1Fi AutoPay</span>
                </div>
              </div>

              {/* Action buttons */}
              <div className="pt-2 flex space-x-3">
                <button
                  onClick={onClose}
                  className="w-1/3 py-3 bg-slate-900 hover:bg-slate-800 text-slate-300 font-semibold text-xs rounded-xl border border-slate-800 transition-colors"
                >
                  Back
                </button>
                <button
                  onClick={onConfirm}
                  className="w-2/3 py-3 bg-brand-500 hover:bg-brand-400 text-slate-950 font-extrabold text-xs rounded-xl shadow-glow-teal transition-all flex items-center justify-center space-x-1.5"
                >
                  <span>Confirm & Apply EMI</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </>
          )}
        </div>

      </div>
    </div>
  );
};
