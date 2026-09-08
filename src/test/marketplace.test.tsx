import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import React from 'react';
import { MarketplaceService } from '../services/marketplaceService';
import { ShopPage } from '../components/shop/ShopPage';
import { VariantSelector } from '../components/marketplace/VariantSelector';
import { EMIPlanSelector } from '../components/marketplace/EMIPlanSelector';
import { MOCK_PRODUCTS } from '../data/mockProducts';

describe('1Fi Marketplace Feature Test Suite', () => {
  beforeEach(() => {
    MarketplaceService.setSimulateError(false);
  });

  it('1. Fetches and displays products dynamically via MarketplaceService', async () => {
    const response = await MarketplaceService.getProducts({
      category: 'All',
      searchQuery: '',
      sortBy: 'popularity',
    });
    expect(response.status).toBe('success');
    expect(response.data.length).toBeGreaterThan(0);
    expect(response.data[0].name).toContain('iPhone');
  });

  it('2. Filters products by category correctly', async () => {
    const laptopsResponse = await MarketplaceService.getProducts({
      category: 'Laptops',
      searchQuery: '',
      sortBy: 'popularity',
    });
    expect(laptopsResponse.data.every((p) => p.category === 'Laptops')).toBe(true);
    expect(laptopsResponse.data.some((p) => p.name.includes('MacBook'))).toBe(true);
  });

  it('3. Searches products by query keyword', async () => {
    const searchResponse = await MarketplaceService.getProducts({
      category: 'All',
      searchQuery: 'Sony',
      sortBy: 'popularity',
    });
    expect(searchResponse.data.length).toBe(1);
    expect(searchResponse.data[0].brand).toBe('Sony');
  });

  it('4. Recalculates EMI plans when variant price changes', () => {
    const sampleProduct = MOCK_PRODUCTS[0]; // iPhone 15 Pro Max
    const basePrice = sampleProduct.basePrice; // 134900
    const upgradedPrice = basePrice + 20000; // 154900 for 512GB

    const recalculated = MarketplaceService.calculateRecalculatedEmiPlans(
      sampleProduct.emiPlans,
      upgradedPrice,
      basePrice
    );

    expect(recalculated.length).toBe(sampleProduct.emiPlans.length);
    // 6 Months No Cost EMI monthly should be upgradedPrice / 6
    const sixMonthPlan = recalculated.find((p) => p.tenureMonths === 6);
    expect(sixMonthPlan?.monthlyAmount).toBe(Math.round(upgradedPrice / 6));
  });

  it('5. Renders ShopPage with 3 options: Top Brands, Nearby Stores, and 1Fi Marketplace', async () => {
    render(<ShopPage />);
    
    expect(screen.getByText('Top Brands')).toBeInTheDocument();
    expect(screen.getByText('Nearby Stores')).toBeInTheDocument();
    expect(screen.getByText('1Fi Marketplace')).toBeInTheDocument();

    // Verify 1Fi Marketplace is selected by default and loads product cards
    await waitFor(() => {
      expect(screen.getByText('Apple iPhone 15 Pro Max')).toBeInTheDocument();
    });
  });

  it('6. Displays blank section when Top Brands or Nearby Stores is selected', async () => {
    render(<ShopPage />);

    // Click Top Brands
    fireEvent.click(screen.getByText('Top Brands'));
    expect(screen.getByText('Top Brands Section')).toBeInTheDocument();

    // Click Nearby Stores
    fireEvent.click(screen.getByText('Nearby Stores'));
    expect(screen.getByText('Nearby Stores Section')).toBeInTheDocument();
  });

  it('7. Handles Error state and Retry trigger properly', async () => {
    MarketplaceService.setSimulateError(true);
    render(<ShopPage />);

    await waitFor(() => {
      expect(screen.getByText('Unable to load products')).toBeInTheDocument();
    });

    const retryBtn = screen.getByRole('button', { name: /try again/i });
    expect(retryBtn).toBeInTheDocument();
  });
});
