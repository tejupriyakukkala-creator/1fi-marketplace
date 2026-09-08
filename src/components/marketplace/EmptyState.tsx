import React from 'react';
import { SearchX, RotateCcw } from 'lucide-react';

interface EmptyStateProps {
  searchQuery: string;
  onReset: () => void;
}

export const EmptyState: React.FC<EmptyStateProps> = ({ searchQuery, onReset }) => {
  return (
    <div className="bg-[#121824] border border-slate-800 rounded-2xl p-8 text-center max-w-md mx-auto my-12">
      <div className="w-12 h-12 rounded-full bg-slate-900 text-slate-400 flex items-center justify-center mx-auto mb-4 border border-slate-800">
        <SearchX className="w-6 h-6" />
      </div>
      <h3 className="text-lg font-bold text-white mb-2">No matching products found</h3>
      <p className="text-xs text-slate-400 mb-6">
        We couldn't find any products matching <strong className="text-brand-400">"{searchQuery}"</strong>. Try checking your spelling or adjusting your filters.
      </p>
      <button
        onClick={onReset}
        className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs rounded-xl inline-flex items-center space-x-2 transition-colors border border-slate-700"
      >
        <RotateCcw className="w-3.5 h-3.5" />
        <span>Reset Filters</span>
      </button>
    </div>
  );
};
