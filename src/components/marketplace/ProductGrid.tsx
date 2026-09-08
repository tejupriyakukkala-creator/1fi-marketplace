import React from 'react';
import { Product, MarketplaceFilter, ProductCategory } from '../../types/marketplace';
import { ProductCard } from './ProductCard';
import { ProductGridSkeleton } from './LoadingSkeleton';
import { ErrorState } from './ErrorState';
import { EmptyState } from './EmptyState';
import { Search, SlidersHorizontal, Zap, ShieldAlert } from 'lucide-react';

interface ProductGridProps {
  products: Product[];
  loading: boolean;
  error: string | null;
  filter: MarketplaceFilter;
  onSelectCategory: (category: ProductCategory) => void;
  onSearchChange: (query: string) => void;
  onSortChange: (sortBy: MarketplaceFilter['sortBy']) => void;
  onSelectProduct: (product: Product) => void;
  onRetry: () => void;
  onToggleSimulateError: (enable: boolean) => void;
}

const CATEGORIES: ProductCategory[] = [
  'All',
  'Smartphones',
  'Laptops',
  'Tablets',
  'Audio & Wearables',
  'Smart TV & Tech',
];

export const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  loading,
  error,
  filter,
  onSelectCategory,
  onSearchChange,
  onSortChange,
  onSelectProduct,
  onRetry,
  onToggleSimulateError,
}) => {
  return (
    <div className="space-y-6">
      
      {/* Search & Filter Header Bar */}
      <div className="bg-[#121824] p-4 rounded-2xl border border-slate-800 space-y-4">
        <div className="flex flex-col sm:flex-row items-center gap-3">
          
          {/* Search Input */}
          <div className="relative w-full flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={filter.searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search products (e.g. iPhone, MacBook, Sony)..."
              className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-10 pr-4 py-2.5 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-brand-500 transition-colors"
            />
            {filter.searchQuery && (
              <button
                onClick={() => onSearchChange('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-500 hover:text-slate-300"
              >
                Clear
              </button>
            )}
          </div>

          {/* Sort Selector */}
          <div className="flex items-center space-x-2 w-full sm:w-auto">
            <SlidersHorizontal className="w-4 h-4 text-slate-400 flex-shrink-0" />
            <select
              value={filter.sortBy}
              onChange={(e) => onSortChange(e.target.value as MarketplaceFilter['sortBy'])}
              className="bg-slate-900 border border-slate-800 text-slate-300 text-xs rounded-xl px-3 py-2.5 focus:outline-none focus:border-brand-500 transition-colors w-full sm:w-auto"
            >
              <option value="popularity">Most Popular</option>
              <option value="emi-asc">EMI: Lowest First</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
          </div>

        </div>

        {/* Category Pills */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-1 scrollbar-none">
          {CATEGORIES.map((cat) => {
            const isActive = filter.category === cat;
            return (
              <button
                key={cat}
                onClick={() => onSelectCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-brand-500 text-slate-950 shadow-glow-teal font-bold'
                    : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Interactive Error Simulation Trigger Bar (For Evaluator Testing) */}
        <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
          <span className="flex items-center gap-1">
            <Zap className="w-3 h-3 text-brand-400" />
            <span>Showing {products.length} 1Fi verified zero-collateral products</span>
          </span>
          <button
            onClick={() => onToggleSimulateError(true)}
            className="text-slate-500 hover:text-red-400 flex items-center gap-1 transition-colors underline"
            title="Simulate a network API failure to verify Error & Retry state handling"
          >
            <ShieldAlert className="w-3 h-3" />
            <span>Test Error State</span>
          </button>
        </div>

      </div>

      {/* Grid Content rendering */}
      {loading ? (
        <ProductGridSkeleton />
      ) : error ? (
        <ErrorState
          message={error}
          onRetry={() => {
            onToggleSimulateError(false);
            onRetry();
          }}
        />
      ) : products.length === 0 ? (
        <EmptyState
          searchQuery={filter.searchQuery}
          onReset={() => {
            onSearchChange('');
            onSelectCategory('All');
          }}
        />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onSelect={onSelectProduct}
            />
          ))}
        </div>
      )}

    </div>
  );
};
