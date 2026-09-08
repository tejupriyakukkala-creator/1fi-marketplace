export type ProductCategory = 
  | 'All' 
  | 'Smartphones' 
  | 'Laptops' 
  | 'Tablets' 
  | 'Audio & Wearables' 
  | 'Smart TV & Tech';

export interface VariantOption {
  id: string;
  name: string;
  value: string;
  priceDelta: number; // Additional price e.g. +5000 for 512GB
  available: boolean;
  colorHex?: string; // Optional hex for color swatches
}

export interface VariantGroup {
  id: string;
  name: string; // e.g. "Color", "Storage", "RAM"
  options: VariantOption[];
}

export interface EMIPlan {
  id: string;
  tenureMonths: number;
  monthlyAmount: number;
  interestRate: number; // e.g. 0 for No Cost EMI, 12 for 12%
  isNoCost: boolean;
  processingFee: number;
  totalPayable: number;
  popularTag?: string;
}

export interface Product {
  id: string;
  name: string;
  brand: string;
  category: ProductCategory;
  rating: number;
  reviewCount: number;
  shortSpecs: string[];
  description: string;
  basePrice: number;
  originalPrice: number;
  images: string[];
  inStock: boolean;
  variantGroups: VariantGroup[];
  features: string[];
  specsTable: Record<string, string>;
  emiPlans: EMIPlan[];
}

export interface CartSelection {
  product: Product;
  selectedVariants: Record<string, VariantOption>; // groupId -> selected Option
  selectedEmiPlan: EMIPlan | null;
  calculatedPrice: number;
}

export interface MarketplaceFilter {
  category: ProductCategory;
  searchQuery: string;
  sortBy: 'popularity' | 'price-asc' | 'price-desc' | 'emi-asc';
}

export interface APIResponse<T> {
  data: T;
  status: 'success' | 'error';
  message?: string;
}
