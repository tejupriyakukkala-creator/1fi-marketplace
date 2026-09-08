import { Product, MarketplaceFilter, EMIPlan, APIResponse } from '../types/marketplace';
import { MOCK_PRODUCTS } from '../data/mockProducts';

// Simulated latency (ms)
const SIMULATED_DELAY_MS = 500;

export class MarketplaceService {
  private static shouldSimulateError = false;

  /**
   * Toggle simulated API errors for testing error handling & retry mechanism
   */
  public static setSimulateError(flag: boolean) {
    this.shouldSimulateError = flag;
  }

  /**
   * Fetch product catalog with filter, search, and sorting capabilities
   */
  public static async getProducts(filter: MarketplaceFilter): Promise<APIResponse<Product[]>> {
    await new Promise((resolve) => setTimeout(resolve, SIMULATED_DELAY_MS));

    if (this.shouldSimulateError) {
      throw new Error('Failed to connect to 1Fi Marketplace API service. Please try again.');
    }

    let filtered = [...MOCK_PRODUCTS];

    // Filter by Category
    if (filter.category !== 'All') {
      filtered = filtered.filter((p) => p.category === filter.category);
    }

    // Filter by Search Query
    if (filter.searchQuery.trim() !== '') {
      const q = filter.searchQuery.toLowerCase();
      filtered = filtered.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.brand.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.shortSpecs.some((spec) => spec.toLowerCase().includes(q))
      );
    }

    // Sort Products
    switch (filter.sortBy) {
      case 'price-asc':
        filtered.sort((a, b) => a.basePrice - b.basePrice);
        break;
      case 'price-desc':
        filtered.sort((a, b) => b.basePrice - a.basePrice);
        break;
      case 'emi-asc':
        filtered.sort((a, b) => (a.emiPlans[0]?.monthlyAmount || 0) - (b.emiPlans[0]?.monthlyAmount || 0));
        break;
      case 'popularity':
      default:
        filtered.sort((a, b) => b.rating - a.rating);
        break;
    }

    return {
      data: filtered,
      status: 'success',
    };
  }

  /**
   * Fetch single product details by ID
   */
  public static async getProductById(id: string): Promise<APIResponse<Product>> {
    await new Promise((resolve) => setTimeout(resolve, SIMULATED_DELAY_MS));

    if (this.shouldSimulateError) {
      throw new Error('Unable to retrieve product information from server.');
    }

    const product = MOCK_PRODUCTS.find((p) => p.id === id);

    if (!product) {
      throw new Error(`Product with ID '${id}' not found.`);
    }

    return {
      data: product,
      status: 'success',
    };
  }

  /**
   * Dynamically recalculate EMI plans when a variant with a price differential is selected
   */
  public static calculateRecalculatedEmiPlans(baseEmiPlans: EMIPlan[], finalPrice: number, basePrice: number): EMIPlan[] {
    if (finalPrice === basePrice) return baseEmiPlans;
    const ratio = finalPrice / basePrice;

    return baseEmiPlans.map((plan) => {
      const newTotal = Math.round(plan.isNoCost ? finalPrice : finalPrice * (1 + (plan.interestRate * plan.tenureMonths) / 1200));
      const newMonthly = Math.round(newTotal / plan.tenureMonths);

      return {
        ...plan,
        monthlyAmount: newMonthly,
        totalPayable: newTotal,
      };
    });
  }
}
