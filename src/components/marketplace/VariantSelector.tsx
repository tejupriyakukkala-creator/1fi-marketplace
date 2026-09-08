import React from 'react';
import { VariantGroup, VariantOption } from '../../types/marketplace';
import { Check, X } from 'lucide-react';

interface VariantSelectorProps {
  variantGroup: VariantGroup;
  selectedOption: VariantOption | undefined;
  onSelectOption: (groupId: string, option: VariantOption) => void;
}

export const VariantSelector: React.FC<VariantSelectorProps> = ({
  variantGroup,
  selectedOption,
  onSelectOption,
}) => {
  return (
    <div className="mb-4">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-semibold text-slate-300">
          Select {variantGroup.name}:
        </span>
        {selectedOption && (
          <span className="text-xs font-bold text-brand-400">
            {selectedOption.name}
          </span>
        )}
      </div>

      <div className="flex flex-wrap gap-2">
        {variantGroup.options.map((option) => {
          const isSelected = selectedOption?.id === option.id;
          const isAvailable = option.available;

          // Color swatch rendering
          if (option.colorHex) {
            return (
              <button
                key={option.id}
                type="button"
                disabled={!isAvailable}
                onClick={() => onSelectOption(variantGroup.id, option)}
                className={`relative flex items-center space-x-2 px-3 py-1.5 rounded-xl border text-xs font-medium transition-all ${
                  isSelected
                    ? 'border-brand-500 bg-brand-500/10 text-white ring-1 ring-brand-500'
                    : isAvailable
                    ? 'border-slate-800 bg-slate-900 text-slate-300 hover:border-slate-700'
                    : 'border-slate-800/50 bg-slate-950 text-slate-600 cursor-not-allowed opacity-50'
                }`}
              >
                <span
                  className="w-3.5 h-3.5 rounded-full border border-slate-600"
                  style={{ backgroundColor: option.colorHex }}
                />
                <span>{option.name}</span>
                {isSelected && <Check className="w-3 h-3 text-brand-400 ml-1" />}
                {!isAvailable && (
                  <span className="text-[10px] text-red-400 font-normal ml-1">(Out of stock)</span>
                )}
              </button>
            );
          }

          // Text / Size / Storage option badge
          return (
            <button
              key={option.id}
              type="button"
              disabled={!isAvailable}
              onClick={() => onSelectOption(variantGroup.id, option)}
              className={`relative px-3.5 py-2 rounded-xl border text-xs font-semibold transition-all flex items-center space-x-1.5 ${
                isSelected
                  ? 'border-brand-500 bg-brand-500/10 text-brand-400 ring-1 ring-brand-500'
                  : isAvailable
                  ? 'border-slate-800 bg-slate-900 text-slate-300 hover:border-slate-700'
                  : 'border-slate-800/40 bg-slate-950/40 text-slate-600 line-through cursor-not-allowed'
              }`}
            >
              <span>{option.name}</span>
              {option.priceDelta > 0 && isAvailable && (
                <span className="text-[10px] text-emerald-400 font-normal">
                  (+₹{option.priceDelta.toLocaleString('en-IN')})
                </span>
              )}
              {isSelected && <Check className="w-3.5 h-3.5 text-brand-400" />}
            </button>
          );
        })}
      </div>
    </div>
  );
};
