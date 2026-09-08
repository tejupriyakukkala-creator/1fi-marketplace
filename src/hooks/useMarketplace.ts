import { useState, useEffect, useCallback, useMemo } from 'react';
import { Product, MarketplaceFilter, VariantOption, EMIPlan, ProductCategory } from '../types/marketplace';
import { MarketplaceService } from '../services/marketplaceService';

export function useMarketplace() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const [filter, setFilter] = useState<MarketplaceFilter>({
    category: 'All',
    searchQuery: '',
    sortBy: 'popularity',
  });

  // Selected product state
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  
  // Selected variant options (groupId -> VariantOption)
  const [selectedVariants, setSelectedVariants] = useState<Record<string, VariantOption>>({});
  
  // Selected EMI plan
  const [selectedEmiPlan, setSelectedEmiPlan] = useState<EMIPlan | null>(null);

  // Modal & Review Drawer states
  const [isDetailOpen, setIsDetailOpen] = useState<boolean>(false);
  const [isReviewOpen, setIsReviewOpen] = useState<boolean>(false);
  const [orderConfirmed, setOrderConfirmed] = useState<boolean>(false);

  // Fetch product catalog
  const loadProducts = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await MarketplaceService.getProducts(filter);
      setProducts(response.data);
    } catch (err: any) {
      setError(err.message || 'An unexpected error occurred while fetching products.');
    } finally {
      setLoading(false);
    }
  }, [filter]);

  useEffect(() => {
    loadProducts();
  }, [loadProducts]);

  // Compute final product price based on selected variants
  const calculatedPrice = useMemo(() => {
    if (!selectedProduct) return 0;
    let extra = 0;
    Object.values(selectedVariants).forEach((opt) => {
      extra += opt.priceDelta || 0;
    });
    return selectedProduct.basePrice + extra;
  }, [selectedProduct, selectedVariants]);

  // Compute recalculated EMI plans based on variant price adjustments
  const recalculatedEmiPlans = useMemo(() => {
    if (!selectedProduct) return [];
    return MarketplaceService.calculateRecalculatedEmiPlans(
      selectedProduct.emiPlans,
      calculatedPrice,
      selectedProduct.basePrice
    );
  }, [selectedProduct, calculatedPrice]);

  // When selected EMI plan is recalculated, keep selection in sync
  useEffect(() => {
    if (selectedEmiPlan && recalculatedEmiPlans.length > 0) {
      const match = recalculatedEmiPlans.find((p) => p.id === selectedEmiPlan.id);
      if (match) {
        setSelectedEmiPlan(match);
      }
    }
  }, [recalculatedEmiPlans]);

  // Handlers
  const handleSelectCategory = (category: ProductCategory) => {
    setFilter((prev) => ({ ...prev, category }));
  };

  const handleSearchChange = (query: string) => {
    setFilter((prev) => ({ ...prev, searchQuery: query }));
  };

  const handleSortChange = (sortBy: MarketplaceFilter['sortBy']) => {
    setFilter((prev) => ({ ...prev, sortBy }));
  };

  const handleOpenProduct = (product: Product) => {
    setSelectedProduct(product);
    setSelectedEmiPlan(null);
    setOrderConfirmed(false);

    // Initialize default variants (pick first available option for each variant group)
    const initialVariants: Record<string, VariantOption> = {};
    product.variantGroups.forEach((group) => {
      const availableOpt = group.options.find((opt) => opt.available) || group.options[0];
      if (availableOpt) {
        initialVariants[group.id] = availableOpt;
      }
    });

    setSelectedVariants(initialVariants);
    
    // Auto select first EMI plan (usually lowest tenure or no cost)
    if (product.emiPlans && product.emiPlans.length > 0) {
      const defaultPlan = product.emiPlans.find((p) => p.isNoCost) || product.emiPlans[0];
      setSelectedEmiPlan(defaultPlan);
    }

    setIsDetailOpen(true);
  };

  const handleCloseProduct = () => {
    setIsDetailOpen(false);
  };

  const handleSelectVariantOption = (groupId: string, option: VariantOption) => {
    if (!option.available) return;
    setSelectedVariants((prev) => ({
      ...prev,
      [groupId]: option,
    }));
  };

  const handleSelectEmiPlan = (plan: EMIPlan) => {
    setSelectedEmiPlan(plan);
  };

  const handleProceedToReview = () => {
    if (selectedProduct && selectedEmiPlan) {
      setIsReviewOpen(true);
    }
  };

  const handleConfirmOrder = () => {
    setOrderConfirmed(true);
  };

  const handleResetOrder = () => {
    setIsReviewOpen(false);
    setIsDetailOpen(false);
    setSelectedProduct(null);
    setSelectedEmiPlan(null);
    setOrderConfirmed(false);
  };

  const toggleSimulateError = (enable: boolean) => {
    MarketplaceService.setSimulateError(enable);
    loadProducts();
  };

  return {
    products,
    loading,
    error,
    filter,
    selectedProduct,
    selectedVariants,
    selectedEmiPlan,
    calculatedPrice,
    recalculatedEmiPlans,
    isDetailOpen,
    isReviewOpen,
    orderConfirmed,
    // Actions
    handleSelectCategory,
    handleSearchChange,
    handleSortChange,
    handleOpenProduct,
    handleCloseProduct,
    handleSelectVariantOption,
    handleSelectEmiPlan,
    handleProceedToReview,
    setIsReviewOpen,
    handleConfirmOrder,
    handleResetOrder,
    retryFetch: loadProducts,
    toggleSimulateError,
  };
}
