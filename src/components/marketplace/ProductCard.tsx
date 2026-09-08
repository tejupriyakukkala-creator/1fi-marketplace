import React from 'react';
import { Product } from '../../types/marketplace';
import { Star, ShieldCheck, Zap, ArrowRight } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onSelect }) => {
  const lowestEmi = product.emiPlans.reduce((min, plan) => (plan.monthlyAmount < min.monthlyAmount ? plan : min), product.emiPlans[0]);
  const discountPercent = Math.round(((product.originalPrice - product.basePrice) / product.originalPrice) * 100);

  return (
    <div
      onClick={() => onSelect(product)}
      className="group relative bg-[#121824] hover:bg-[#161e2e] border border-slate-800 hover:border-brand-500/50 rounded-2xl p-4 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-glow-teal flex flex-col justify-between"
    >
      {/* Top badges */}
      <div className="flex items-center justify-between mb-3 z-10">
        <span className="bg-slate-800/80 text-slate-300 text-[11px] font-semibold px-2.5 py-0.5 rounded-full border border-slate-700">
          {product.brand}
        </span>
        {lowestEmi?.isNoCost && (
          <span className="bg-brand-500/15 text-brand-400 text-[11px] font-bold px-2.5 py-0.5 rounded-full border border-brand-500/30 flex items-center gap-1">
            <Zap className="w-3 h-3 fill-brand-400" />
            0% No Cost EMI
          </span>
        )}
      </div>

      {/* Image container */}
      <div className="relative aspect-[4/3] w-full mb-4 overflow-hidden rounded-xl bg-slate-900/50 flex items-center justify-center p-2">
        <img
          src={product.images[0]}
          alt={product.name}
          className="object-contain max-h-full max-w-full group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        {discountPercent > 0 && (
          <span className="absolute top-2 left-2 bg-emerald-500 text-slate-950 font-extrabold text-[10px] px-2 py-0.5 rounded-md">
            {discountPercent}% OFF
          </span>
        )}
      </div>

      {/* Product Information */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          {/* Rating */}
          <div className="flex items-center space-x-1 mb-1">
            <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
            <span className="text-xs font-semibold text-white">{product.rating}</span>
            <span className="text-[11px] text-slate-400">({product.reviewCount})</span>
          </div>

          {/* Title */}
          <h3 className="font-bold text-slate-100 text-sm line-clamp-1 group-hover:text-brand-400 transition-colors mb-1">
            {product.name}
          </h3>

          {/* Short Specs highlights */}
          <div className="flex flex-wrap gap-1 mb-3">
            {product.shortSpecs.slice(0, 2).map((spec, idx) => (
              <span key={idx} className="text-[10px] bg-slate-900 text-slate-400 px-2 py-0.5 rounded">
                {spec}
              </span>
            ))}
          </div>
        </div>

        {/* Price & EMI summary */}
        <div className="pt-3 border-t border-slate-800/80">
          <div className="flex items-baseline space-x-2">
            <span className="font-extrabold text-base text-white">
              ₹{product.basePrice.toLocaleString('en-IN')}
            </span>
            <span className="text-xs text-slate-500 line-through">
              ₹{product.originalPrice.toLocaleString('en-IN')}
            </span>
          </div>

          {/* EMI Highlight Card */}
          {lowestEmi && (
            <div className="mt-2 bg-slate-900/90 border border-brand-500/20 rounded-xl p-2 flex items-center justify-between group-hover:border-brand-500/40 transition-colors">
              <div>
                <span className="text-[10px] text-slate-400 block">EMI Starts at</span>
                <span className="font-bold text-xs text-brand-400">
                  ₹{lowestEmi.monthlyAmount.toLocaleString('en-IN')}/mo
                </span>
              </div>
              <span className="text-[10px] font-semibold text-slate-300 bg-slate-800 px-2 py-1 rounded-md">
                {lowestEmi.tenureMonths} Months
              </span>
            </div>
          )}

          {/* Action Button */}
          <button className="mt-3 w-full py-2 px-3 bg-brand-500 hover:bg-brand-400 text-slate-950 font-bold text-xs rounded-xl flex items-center justify-center space-x-1.5 transition-all shadow-glow-teal">
            <span>View Details & EMI</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
