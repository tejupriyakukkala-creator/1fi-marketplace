import React, { useState } from 'react';
import { Product, VariantOption, EMIPlan } from '../../types/marketplace';
import { VariantSelector } from './VariantSelector';
import { EMIPlanSelector } from './EMIPlanSelector';
import { X, Star, ShieldCheck, Zap, ArrowRight, Check, Sparkles } from 'lucide-react';

interface ProductDetailModalProps {
  product: Product;
  selectedVariants: Record<string, VariantOption>;
  selectedEmiPlan: EMIPlan | null;
  calculatedPrice: number;
  recalculatedEmiPlans: EMIPlan[];
  isOpen: boolean;
  onClose: () => void;
  onSelectVariantOption: (groupId: string, option: VariantOption) => void;
  onSelectEmiPlan: (plan: EMIPlan) => void;
  onProceed: () => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  selectedVariants,
  selectedEmiPlan,
  calculatedPrice,
  recalculatedEmiPlans,
  isOpen,
  onClose,
  onSelectVariantOption,
  onSelectEmiPlan,
  onProceed,
}) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<'emi' | 'specs' | 'features'>('emi');

  if (!isOpen) return null;

  const discountPercent = Math.round(((product.originalPrice - calculatedPrice) / product.originalPrice) * 100);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-[#0A0E17] border border-slate-800 rounded-3xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col">
        
        {/* Header bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800/80 bg-[#121824]/90 sticky top-0 z-20">
          <div className="flex items-center space-x-2">
            <span className="bg-brand-500/10 text-brand-400 font-bold text-xs px-2.5 py-1 rounded-full border border-brand-500/20">
              1Fi Marketplace
            </span>
            <span className="text-slate-400 text-xs font-semibold">/ {product.brand}</span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors border border-slate-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="overflow-y-auto p-4 sm:p-6 space-y-6 flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            
            {/* Left Column: Image Gallery */}
            <div className="space-y-3">
              <div className="relative aspect-square w-full bg-[#121824] rounded-2xl p-4 border border-slate-800 flex items-center justify-center overflow-hidden">
                <img
                  src={product.images[activeImageIndex] || product.images[0]}
                  alt={product.name}
                  className="object-contain max-h-full max-w-full"
                />
                {discountPercent > 0 && (
                  <span className="absolute top-3 left-3 bg-emerald-500 text-slate-950 font-extrabold text-xs px-2.5 py-1 rounded-lg">
                    {discountPercent}% OFF
                  </span>
                )}
              </div>

              {/* Thumbnails */}
              {product.images.length > 1 && (
                <div className="flex items-center space-x-2 overflow-x-auto pb-1">
                  {product.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`w-16 h-16 rounded-xl border p-1 bg-slate-900 flex-shrink-0 transition-all ${
                        activeImageIndex === idx
                          ? 'border-brand-500 ring-2 ring-brand-500/50'
                          : 'border-slate-800 hover:border-slate-700 opacity-60'
                      }`}
                    >
                      <img src={img} alt="" className="object-contain w-full h-full" />
                    </button>
                  ))}
                </div>
              )}

              {/* Security Banner */}
              <div className="bg-slate-900/60 border border-slate-800/80 rounded-xl p-3 flex items-center space-x-3 text-xs text-slate-400">
                <ShieldCheck className="w-5 h-5 text-brand-400 flex-shrink-0" />
                <span>Zero documentation required. EMI deducted automatically via 1Fi AutoPay.</span>
              </div>
            </div>

            {/* Right Column: Title, Price, Variants & Tabs */}
            <div className="space-y-4">
              <div>
                <div className="flex items-center space-x-2 mb-1">
                  <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                  <span className="font-bold text-sm text-white">{product.rating}</span>
                  <span className="text-xs text-slate-400">({product.reviewCount} customer reviews)</span>
                </div>

                <h1 className="text-xl sm:text-2xl font-extrabold text-white leading-tight">
                  {product.name}
                </h1>
                <p className="text-xs text-slate-400 mt-1 line-clamp-2">{product.description}</p>
              </div>

              {/* Price display */}
              <div className="bg-[#121824] p-3.5 rounded-2xl border border-slate-800/80 flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-slate-400 block">Total Price</span>
                  <div className="flex items-baseline space-x-2">
                    <span className="text-2xl font-extrabold text-brand-400">
                      ₹{calculatedPrice.toLocaleString('en-IN')}
                    </span>
                    {product.originalPrice > calculatedPrice && (
                      <span className="text-xs text-slate-500 line-through">
                        ₹{product.originalPrice.toLocaleString('en-IN')}
                      </span>
                    )}
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-[10px] bg-emerald-500/10 text-emerald-400 font-semibold px-2 py-0.5 rounded border border-emerald-500/20 block mb-0.5">
                    Pre-Approved Credit
                  </span>
                  <span className="text-[11px] text-slate-400">1Fi Interest Subsidy Applied</span>
                </div>
              </div>

              {/* Variant Selectors */}
              {product.variantGroups.length > 0 && (
                <div className="bg-[#121824]/60 p-3.5 rounded-2xl border border-slate-800/80">
                  {product.variantGroups.map((group) => (
                    <VariantSelector
                      key={group.id}
                      variantGroup={group}
                      selectedOption={selectedVariants[group.id]}
                      onSelectOption={onSelectVariantOption}
                    />
                  ))}
                </div>
              )}

              {/* Sub Navigation Tabs */}
              <div className="border-b border-slate-800 flex space-x-4">
                <button
                  onClick={() => setActiveTab('emi')}
                  className={`pb-2 text-xs font-bold transition-colors relative ${
                    activeTab === 'emi' ? 'text-brand-400' : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <span>EMI Plans ({recalculatedEmiPlans.length})</span>
                  {activeTab === 'emi' && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-500 rounded-full"></div>
                  )}
                </button>
                <button
                  onClick={() => setActiveTab('specs')}
                  className={`pb-2 text-xs font-bold transition-colors relative ${
                    activeTab === 'specs' ? 'text-brand-400' : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <span>Specifications</span>
                  {activeTab === 'specs' && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-500 rounded-full"></div>
                  )}
                </button>
                <button
                  onClick={() => setActiveTab('features')}
                  className={`pb-2 text-xs font-bold transition-colors relative ${
                    activeTab === 'features' ? 'text-brand-400' : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <span>Highlights</span>
                  {activeTab === 'features' && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-500 rounded-full"></div>
                  )}
                </button>
              </div>

              {/* Tab Content */}
              {activeTab === 'emi' && (
                <EMIPlanSelector
                  emiPlans={recalculatedEmiPlans}
                  selectedPlan={selectedEmiPlan}
                  onSelectPlan={onSelectEmiPlan}
                  productPrice={calculatedPrice}
                />
              )}

              {activeTab === 'specs' && (
                <div className="bg-[#121824] rounded-2xl p-4 border border-slate-800 text-xs divide-y divide-slate-800">
                  {Object.entries(product.specsTable).map(([key, val]) => (
                    <div key={key} className="py-2 flex justify-between">
                      <span className="text-slate-400 font-medium">{key}</span>
                      <span className="text-slate-200 font-semibold text-right max-w-[60%]">{val}</span>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'features' && (
                <div className="bg-[#121824] rounded-2xl p-4 border border-slate-800 text-xs space-y-2">
                  {product.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start space-x-2">
                      <Check className="w-4 h-4 text-brand-400 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300">{feat}</span>
                    </div>
                  ))}
                </div>
              )}

            </div>
          </div>
        </div>

        {/* Sticky Bottom Action Bar */}
        <div className="bg-[#121824] border-t border-slate-800 p-4 sticky bottom-0 z-20 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="w-full sm:w-auto">
            <span className="text-[11px] text-slate-400 block">Selected EMI Plan</span>
            {selectedEmiPlan ? (
              <div className="flex items-baseline space-x-1.5">
                <span className="font-extrabold text-base text-brand-400">
                  ₹{selectedEmiPlan.monthlyAmount.toLocaleString('en-IN')}/mo
                </span>
                <span className="text-xs text-slate-300 font-medium">
                  for {selectedEmiPlan.tenureMonths} Months
                </span>
                {selectedEmiPlan.isNoCost && (
                  <span className="text-[10px] bg-brand-500/20 text-brand-400 px-1.5 py-0.2 rounded font-bold">
                    0% No Cost
                  </span>
                )}
              </div>
            ) : (
              <span className="text-xs text-amber-400 font-semibold">Please select an EMI plan above</span>
            )}
          </div>

          <button
            disabled={!selectedEmiPlan}
            onClick={onProceed}
            className={`w-full sm:w-auto px-6 py-3 rounded-xl font-bold text-sm flex items-center justify-center space-x-2 transition-all ${
              selectedEmiPlan
                ? 'bg-brand-500 hover:bg-brand-400 text-slate-950 shadow-glow-teal cursor-pointer'
                : 'bg-slate-800 text-slate-500 cursor-not-allowed border border-slate-700'
            }`}
          >
            <span>Proceed with Selected Plan</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
