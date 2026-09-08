import React from 'react';

export const ProductCardSkeleton: React.FC = () => {
  return (
    <div className="bg-[#121824] border border-slate-800 rounded-2xl p-4 animate-pulse flex flex-col justify-between h-[360px]">
      <div>
        <div className="flex justify-between items-center mb-3">
          <div className="w-16 h-4 bg-slate-800 rounded-md"></div>
          <div className="w-20 h-4 bg-slate-800 rounded-md"></div>
        </div>
        <div className="w-full h-36 bg-slate-800/60 rounded-xl mb-4"></div>
        <div className="w-3/4 h-5 bg-slate-800 rounded-md mb-2"></div>
        <div className="w-1/2 h-3 bg-slate-800/70 rounded-md mb-3"></div>
      </div>
      <div className="pt-3 border-t border-slate-800/80">
        <div className="w-28 h-6 bg-slate-800 rounded-md mb-2"></div>
        <div className="w-full h-10 bg-slate-800 rounded-xl"></div>
      </div>
    </div>
  );
};

export const ProductGridSkeleton: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {Array.from({ length: 8 }).map((_, idx) => (
        <ProductCardSkeleton key={idx} />
      ))}
    </div>
  );
};
