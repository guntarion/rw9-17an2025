/**
 * Product Data Utilities
 * Functions to load and manipulate product data from JSON files
 */

// Import product data from JSON file
import productsData from '../../public/data/products.json';

// TypeScript interfaces for type safety
export interface ProductCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  featured: boolean;
}

export interface ProductSpecifications {
  material: string;
  weight: string;
  standards: string[];
  colors: string[];
  sizes: string[];
  thickness?: string;
  washing?: string;
  visibility?: string;
  sleeve?: string;
  collar?: string;
  pockets?: string;
  reinforcement?: string;
  customization?: string;
  minimum_order?: string;
}

export interface ProductPrice {
  b2c: number;
  b2b_display: string;
  b2b_tiers?: {
    [key: string]: number;
  } | {
    minimum_order?: number;
    note?: string;
  };
}

export interface ProductSEO {
  title: string;
  description: string;
  keywords: string[];
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  category: string;
  featured: boolean;
  popular: boolean;
  price: ProductPrice;
  description: string;
  shortDescription: string;
  features: string[];
  specifications: ProductSpecifications;
  images: string[];
  industries: string[];
  whatsapp_message: string;
  seo: ProductSEO;
  relatedProducts: string[];
}

export interface ProductsData {
  categories: ProductCategory[];
  products: Product[];
}

/**
 * Get all products
 */
export const getAllProducts = (): Product[] => {
  return productsData.products;
};

/**
 * Get all product categories
 */
export const getAllCategories = (): ProductCategory[] => {
  return productsData.categories;
};

/**
 * Get featured categories
 */
export const getFeaturedCategories = (): ProductCategory[] => {
  return productsData.categories.filter(category => category.featured);
};

/**
 * Get product by slug
 */
export const getProductBySlug = (slug: string): Product | undefined => {
  return productsData.products.find(product => product.slug === slug);
};

/**
 * Get category by slug
 */
export const getCategoryBySlug = (slug: string): ProductCategory | undefined => {
  return productsData.categories.find(category => category.slug === slug);
};

/**
 * Get products by category
 */
export const getProductsByCategory = (categoryId: string): Product[] => {
  return productsData.products.filter(product => product.category === categoryId);
};

/**
 * Get featured products
 */
export const getFeaturedProducts = (): Product[] => {
  return productsData.products.filter(product => product.featured);
};

/**
 * Get popular products
 */
export const getPopularProducts = (): Product[] => {
  return productsData.products.filter(product => product.popular);
};

/**
 * Search products by name or description
 */
export const searchProducts = (query: string): Product[] => {
  const lowercaseQuery = query.toLowerCase();
  return productsData.products.filter(product => 
    product.name.toLowerCase().includes(lowercaseQuery) ||
    product.description.toLowerCase().includes(lowercaseQuery) ||
    product.shortDescription.toLowerCase().includes(lowercaseQuery) ||
    product.features.some(feature => feature.toLowerCase().includes(lowercaseQuery)) ||
    product.industries.some(industry => industry.toLowerCase().includes(lowercaseQuery))
  );
};

/**
 * Get products by industry
 */
export const getProductsByIndustry = (industry: string): Product[] => {
  return productsData.products.filter(product => 
    product.industries.includes(industry.toLowerCase())
  );
};

/**
 * Get related products for a given product
 */
export const getRelatedProducts = (productId: string): Product[] => {
  const product = productsData.products.find(p => p.id === productId);
  if (!product || !product.relatedProducts) return [];
  
  return productsData.products.filter(p => 
    product.relatedProducts.includes(p.id)
  );
};

/**
 * Get products by price range
 */
export const getProductsByPriceRange = (minPrice: number, maxPrice: number): Product[] => {
  return productsData.products.filter(product => 
    product.price.b2c >= minPrice && product.price.b2c <= maxPrice
  );
};

/**
 * Filter products by multiple criteria
 */
export const filterProducts = (filters: {
  category?: string;
  industry?: string;
  minPrice?: number;
  maxPrice?: number;
  featured?: boolean;
  popular?: boolean;
  materials?: string[];
  colors?: string[];
  sizes?: string[];
}): Product[] => {
  let filteredProducts = productsData.products;

  if (filters.category) {
    filteredProducts = filteredProducts.filter(product => 
      product.category === filters.category
    );
  }

  if (filters.industry) {
    filteredProducts = filteredProducts.filter(product => 
      product.industries.includes(filters.industry!.toLowerCase())
    );
  }

  if (filters.minPrice !== undefined) {
    filteredProducts = filteredProducts.filter(product => 
      product.price.b2c >= filters.minPrice!
    );
  }

  if (filters.maxPrice !== undefined) {
    filteredProducts = filteredProducts.filter(product => 
      product.price.b2c <= filters.maxPrice!
    );
  }

  if (filters.featured !== undefined) {
    filteredProducts = filteredProducts.filter(product => 
      product.featured === filters.featured
    );
  }

  if (filters.popular !== undefined) {
    filteredProducts = filteredProducts.filter(product => 
      product.popular === filters.popular
    );
  }

  if (filters.materials && filters.materials.length > 0) {
    filteredProducts = filteredProducts.filter(product => 
      filters.materials!.some(material => 
        product.specifications.material.toLowerCase().includes(material.toLowerCase())
      )
    );
  }

  if (filters.colors && filters.colors.length > 0) {
    filteredProducts = filteredProducts.filter(product => 
      filters.colors!.some(color => 
        product.specifications.colors.some(productColor => 
          productColor.toLowerCase().includes(color.toLowerCase())
        )
      )
    );
  }

  if (filters.sizes && filters.sizes.length > 0) {
    filteredProducts = filteredProducts.filter(product => 
      filters.sizes!.some(size => 
        product.specifications.sizes.includes(size)
      )
    );
  }

  return filteredProducts;
};

/**
 * Get unique values for filtering
 */
export const getFilterOptions = () => {
  const products = productsData.products;
  
  return {
    categories: productsData.categories.map(cat => ({ id: cat.id, name: cat.name })),
    industries: [...new Set(products.flatMap(p => p.industries))],
    materials: [...new Set(products.map(p => p.specifications.material))],
    colors: [...new Set(products.flatMap(p => p.specifications.colors))],
    sizes: [...new Set(products.flatMap(p => p.specifications.sizes))],
    priceRange: {
      min: Math.min(...products.map(p => p.price.b2c)),
      max: Math.max(...products.map(p => p.price.b2c))
    }
  };
};

/**
 * Format price for display
 */
export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(price);
};

/**
 * Get price display text for product
 */
export const getPriceDisplay = (product: Product): string => {
  return formatPrice(product.price.b2c);
};

/**
 * Get B2B price display text
 */
export const getB2BPriceDisplay = (product: Product): string => {
  return product.price.b2b_display;
};

/**
 * Generate product URL
 */
export const getProductUrl = (product: Product): string => {
  return `/produk/${product.slug}`;
};

/**
 * Generate category URL
 */
export const getCategoryUrl = (category: ProductCategory): string => {
  return `/produk/kategori/${category.slug}`;
};

/**
 * Get product breadcrumbs
 */
export const getProductBreadcrumbs = (product: Product) => {
  const category = getCategoryBySlug(product.category);
  
  return [
    { name: 'Beranda', url: '/' },
    { name: 'Produk', url: '/produk' },
    { name: category?.name || 'Kategori', url: `/produk/kategori/${product.category}` },
    { name: product.name, url: getProductUrl(product) }
  ];
};

/**
 * Get category breadcrumbs
 */
export const getCategoryBreadcrumbs = (category: ProductCategory) => {
  return [
    { name: 'Beranda', url: '/' },
    { name: 'Produk', url: '/produk' },
    { name: category.name, url: getCategoryUrl(category) }
  ];
};

/**
 * Calculate product statistics
 */
export const getProductStats = () => {
  const products = productsData.products;
  const categories = productsData.categories;
  
  return {
    totalProducts: products.length,
    totalCategories: categories.length,
    featuredProducts: products.filter(p => p.featured).length,
    popularProducts: products.filter(p => p.popular).length,
    industries: [...new Set(products.flatMap(p => p.industries))].length,
    averagePrice: Math.round(products.reduce((sum, p) => sum + p.price.b2c, 0) / products.length)
  };
};