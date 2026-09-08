import React, { useState } from 'react';
import { useMarketplace } from '../../hooks/useMarketplace';
import { ProductGrid } from '../marketplace/ProductGrid';
import { ProductDetailModal } from '../marketplace/ProductDetailModal';
import { OrderReviewModal } from '../marketplace/OrderReviewModal';
import { ShoppingBag, Store, Tag, Sparkles, ShieldCheck } from 'lucide-react';

export const ShopPage: React.FC = () => {
  const [shopOption, setShopOption] = useState<'top-brands' | 'nearby-stores' | '1fi-marketplace'>('1fi-marketplace');

  const marketplace = useMarketplace();

  return (
    <div className="min-h-screen bg-[#0A0E17] pb-24 text-slate-100">
      
      {/* 1Fi Shop Hero Banner */}
      <div className="bg-gradient-to-b from-brand-950/40 via-[#0A0E17] to-[#0A0E17] border-b border-slate-800/60 pt-6 pb-4 px-4">
        <div className="max-w-7xl mx-auto space-y-4">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center space-x-1.5 bg-brand-500/10 text-brand-400 text-xs font-bold px-3 py-1 rounded-full border border-brand-500/20 mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>1Fi Shop & Financing Hub</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Shop with <span className="text-gradient-brand">0% Interest EMI</span>
              </h1>
              <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-xl">
                Convert top gadgets into low monthly installments. Pre-approved against your 1Fi Credit Line.
              </p>
            </div>

            {/* Quick Credit Limit Info */}
            <div className="bg-[#121824] p-3.5 rounded-2xl border border-slate-800 flex items-center space-x-3 self-start md:self-auto">
              <div className="w-10 h-10 rounded-xl bg-brand-500/20 text-brand-400 flex items-center justify-center font-bold">
                ₹
              </div>
              <div>
                <span className="text-[10px] text-slate-400 block">Available Credit Limit</span>
                <span className="text-base font-extrabold text-white">₹1,50,000</span>
              </div>
            </div>
          </div>

          {/* Shop Main Navigation Options (The 3 required sections) */}
          <div className="pt-2">
            <div className="bg-[#121824] p-1.5 rounded-2xl border border-slate-800 inline-flex w-full sm:w-auto gap-1">
              
              {/* 1. Top Brands */}
              <button
                onClick={() => setShopOption('top-brands')}
                className={`flex-1 sm:flex-initial px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center space-x-2 ${
                  shopOption === 'top-brands'
                    ? 'bg-brand-500 text-slate-950 shadow-glow-teal'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Tag className="w-4 h-4" />
                <span>Top Brands</span>
              </button>

              {/* 2. Nearby Stores */}
              <button
                onClick={() => setShopOption('nearby-stores')}
                className={`flex-1 sm:flex-initial px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center space-x-2 ${
                  shopOption === 'nearby-stores'
                    ? 'bg-brand-500 text-slate-950 shadow-glow-teal'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Store className="w-4 h-4" />
                <span>Nearby Stores</span>
              </button>

              {/* 3. 1Fi Marketplace (Main Feature) */}
              <button
                onClick={() => setShopOption('1fi-marketplace')}
                className={`flex-1 sm:flex-initial px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center space-x-2 relative ${
                  shopOption === '1fi-marketplace'
                    ? 'bg-brand-500 text-slate-950 shadow-glow-teal'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <ShoppingBag className="w-4 h-4" />
                <span>1Fi Marketplace</span>
                {shopOption !== '1fi-marketplace' && (
                  <span className="w-2 h-2 rounded-full bg-brand-400 animate-ping"></span>
                )}
              </button>

            </div>
          </div>

        </div>
      </div>

      {/* Content Container */}
      <main className="max-w-7xl mx-auto px-4 pt-6">
        {shopOption === 'top-brands' && (
          <div className="bg-[#121824] border border-slate-800 rounded-3xl p-12 text-center max-w-lg mx-auto my-8">
            <div className="w-12 h-12 rounded-full bg-slate-900 text-slate-500 flex items-center justify-center mx-auto mb-3">
              <Tag className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-white mb-1">Top Brands Section</h3>
            <p className="text-xs text-slate-400">
              This section is left un-implemented as specified in the assignment prompt. Please navigate to <strong>1Fi Marketplace</strong>.
            </p>
          </div>
        )}

        {shopOption === 'nearby-stores' && (
          <div className="bg-[#121824] border border-slate-800 rounded-3xl p-12 text-center max-w-lg mx-auto my-8">
            <div className="w-12 h-12 rounded-full bg-slate-900 text-slate-500 flex items-center justify-center mx-auto mb-3">
              <Store className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-white mb-1">Nearby Stores Section</h3>
            <p className="text-xs text-slate-400">
              This section is left un-implemented as specified in the assignment prompt. Please navigate to <strong>1Fi Marketplace</strong>.
            </p>
          </div>
        )}

        {shopOption === '1fi-marketplace' && (
          <ProductGrid
            products={marketplace.products}
            loading={marketplace.loading}
            error={marketplace.error}
            filter={marketplace.filter}
            onSelectCategory={marketplace.handleSelectCategory}
            onSearchChange={marketplace.handleSearchChange}
            onSortChange={marketplace.handleSortChange}
            onSelectProduct={marketplace.handleOpenProduct}
            onRetry={marketplace.retryFetch}
            onToggleSimulateError={marketplace.toggleSimulateError}
          />
        )}
      </main>

      {/* Product Detail Modal */}
      {marketplace.selectedProduct && (
        <ProductDetailModal
          product={marketplace.selectedProduct}
          selectedVariants={marketplace.selectedVariants}
          selectedEmiPlan={marketplace.selectedEmiPlan}
          calculatedPrice={marketplace.calculatedPrice}
          recalculatedEmiPlans={marketplace.recalculatedEmiPlans}
          isOpen={marketplace.isDetailOpen}
          onClose={marketplace.handleCloseProduct}
          onSelectVariantOption={marketplace.handleSelectVariantOption}
          onSelectEmiPlan={marketplace.handleSelectEmiPlan}
          onProceed={marketplace.handleProceedToReview}
        />
      )}

      {/* Order Review & Confirmation Modal */}
      <OrderReviewModal
        product={marketplace.selectedProduct}
        selectedVariants={marketplace.selectedVariants}
        selectedEmiPlan={marketplace.selectedEmiPlan}
        calculatedPrice={marketplace.calculatedPrice}
        isOpen={marketplace.isReviewOpen}
        isConfirmed={marketplace.orderConfirmed}
        onClose={() => marketplace.setIsReviewOpen(false)}
        onConfirm={marketplace.handleConfirmOrder}
        onReset={marketplace.handleResetOrder}
      />

    </div>
  );
};
