/**
 * Articles Data Utilities
 * Functions to load and manipulate blog article data from JSON files
 */

// Import articles data from JSON file
import articlesData from '../../public/data/articles.json';

// TypeScript interfaces for type safety
export interface ArticleSEO {
  title: string;
  description: string;
  keywords: string[];
}

export interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  updatedAt: string;
  category: string;
  tags: string[];
  image: string;
  seo: ArticleSEO;
  readingTime: number;
  featured: boolean;
  relatedProducts: string[];
}

export interface ArticlesData {
  articles: Article[];
}

/**
 * Get all articles sorted by publish date (newest first)
 */
export const getAllArticles = (): Article[] => {
  return articlesData.articles.sort((a, b) => 
    new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
};

/**
 * Get article by slug
 */
export const getArticleBySlug = (slug: string): Article | undefined => {
  return articlesData.articles.find(article => article.slug === slug);
};

/**
 * Get featured articles
 */
export const getFeaturedArticles = (): Article[] => {
  return articlesData.articles
    .filter(article => article.featured)
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
};

/**
 * Get recent articles (limit specified)
 */
export const getRecentArticles = (limit: number = 5): Article[] => {
  return getAllArticles().slice(0, limit);
};

/**
 * Get articles by category
 */
export const getArticlesByCategory = (category: string): Article[] => {
  return articlesData.articles
    .filter(article => article.category === category)
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
};

/**
 * Get articles by tag
 */
export const getArticlesByTag = (tag: string): Article[] => {
  return articlesData.articles
    .filter(article => article.tags.includes(tag))
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
};

/**
 * Search articles by title, excerpt, or content
 */
export const searchArticles = (query: string): Article[] => {
  const lowercaseQuery = query.toLowerCase();
  return articlesData.articles.filter(article => 
    article.title.toLowerCase().includes(lowercaseQuery) ||
    article.excerpt.toLowerCase().includes(lowercaseQuery) ||
    article.content.toLowerCase().includes(lowercaseQuery) ||
    article.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  ).sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
};

/**
 * Get related articles for a given article
 */
export const getRelatedArticles = (articleId: string, limit: number = 3): Article[] => {
  const currentArticle = articlesData.articles.find(a => a.id === articleId);
  if (!currentArticle) return [];

  // Find articles with similar tags or same category
  const relatedArticles = articlesData.articles
    .filter(article => 
      article.id !== articleId && (
        article.category === currentArticle.category ||
        article.tags.some(tag => currentArticle.tags.includes(tag))
      )
    )
    .sort((a, b) => {
      // Score articles by relevance
      const aScore = calculateRelevanceScore(a, currentArticle);
      const bScore = calculateRelevanceScore(b, currentArticle);
      return bScore - aScore;
    })
    .slice(0, limit);

  return relatedArticles;
};

/**
 * Calculate relevance score between two articles
 */
const calculateRelevanceScore = (article: Article, targetArticle: Article): number => {
  let score = 0;
  
  // Same category = higher score
  if (article.category === targetArticle.category) {
    score += 3;
  }
  
  // Shared tags = additional score
  const sharedTags = article.tags.filter(tag => targetArticle.tags.includes(tag));
  score += sharedTags.length * 2;
  
  // Recent articles get slight boost
  const daysDiff = Math.abs(
    new Date(article.publishedAt).getTime() - new Date(targetArticle.publishedAt).getTime()
  ) / (1000 * 60 * 60 * 24);
  
  if (daysDiff < 30) score += 1;
  
  return score;
};

/**
 * Get all unique categories
 */
export const getAllCategories = (): string[] => {
  return [...new Set(articlesData.articles.map(article => article.category))];
};

/**
 * Get all unique tags
 */
export const getAllTags = (): string[] => {
  return [...new Set(articlesData.articles.flatMap(article => article.tags))];
};

/**
 * Get category with article count
 */
export const getCategoriesWithCount = () => {
  const categories = getAllCategories();
  return categories.map(category => ({
    name: category,
    count: getArticlesByCategory(category).length,
    slug: category.toLowerCase().replace(/\s+/g, '-')
  }));
};

/**
 * Get tags with article count
 */
export const getTagsWithCount = () => {
  const tags = getAllTags();
  return tags.map(tag => ({
    name: tag,
    count: getArticlesByTag(tag).length,
    slug: tag.toLowerCase().replace(/\s+/g, '-')
  }));
};

/**
 * Format publish date for display
 */
export const formatPublishDate = (dateString: string, locale: string = 'id-ID'): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

/**
 * Get relative time (e.g., "2 days ago")
 */
export const getRelativeTime = (dateString: string): string => {
  const date = new Date(dateString);
  const now = new Date();
  const diffTime = now.getTime() - date.getTime();
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  
  if (diffDays === 0) return 'Hari ini';
  if (diffDays === 1) return 'Kemarin';
  if (diffDays < 7) return `${diffDays} hari yang lalu`;
  if (diffDays < 30) return `${Math.floor(diffDays / 7)} minggu yang lalu`;
  if (diffDays < 365) return `${Math.floor(diffDays / 30)} bulan yang lalu`;
  
  return `${Math.floor(diffDays / 365)} tahun yang lalu`;
};

/**
 * Generate article URL
 */
export const getArticleUrl = (article: Article): string => {
  return `/blog/${article.slug}`;
};

/**
 * Generate category URL
 */
export const getCategoryUrl = (category: string): string => {
  const slug = category.toLowerCase().replace(/\s+/g, '-');
  return `/blog/kategori/${slug}`;
};

/**
 * Generate tag URL
 */
export const getTagUrl = (tag: string): string => {
  const slug = tag.toLowerCase().replace(/\s+/g, '-');
  return `/blog/tag/${slug}`;
};

/**
 * Get article breadcrumbs
 */
export const getArticleBreadcrumbs = (article: Article) => {
  return [
    { name: 'Beranda', url: '/' },
    { name: 'Blog', url: '/blog' },
    { name: getCategoryDisplayName(article.category), url: getCategoryUrl(article.category) },
    { name: article.title, url: getArticleUrl(article) }
  ];
};

/**
 * Get category breadcrumbs
 */
export const getCategoryBreadcrumbs = (category: string) => {
  return [
    { name: 'Beranda', url: '/' },
    { name: 'Blog', url: '/blog' },
    { name: getCategoryDisplayName(category), url: getCategoryUrl(category) }
  ];
};

/**
 * Convert category slug to display name
 */
export const getCategoryDisplayName = (category: string): string => {
  const categoryMap: { [key: string]: string } = {
    'safety-standards': 'Standar Keselamatan',
    'material-guide': 'Panduan Material',
    'industry-specific': 'Industri Khusus',
    'maintenance-care': 'Perawatan & Maintenance',
    'regulatory-compliance': 'Compliance & Regulasi',
    'product-reviews': 'Review Produk',
    'safety-tips': 'Tips Keselamatan',
    'company-news': 'Berita Perusahaan'
  };
  
  return categoryMap[category] || category.charAt(0).toUpperCase() + category.slice(1);
};

/**
 * Convert tag slug to display name
 */
export const getTagDisplayName = (tag: string): string => {
  return tag.charAt(0).toUpperCase() + tag.slice(1);
};

/**
 * Get estimated reading time
 */
export const estimateReadingTime = (content: string): number => {
  const wordsPerMinute = 200; // Average reading speed
  const wordCount = content.trim().split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
};

/**
 * Filter articles by multiple criteria
 */
export const filterArticles = (filters: {
  category?: string;
  tags?: string[];
  author?: string;
  featured?: boolean;
  dateFrom?: string;
  dateTo?: string;
}): Article[] => {
  let filteredArticles = articlesData.articles;

  if (filters.category) {
    filteredArticles = filteredArticles.filter(article => 
      article.category === filters.category
    );
  }

  if (filters.tags && filters.tags.length > 0) {
    filteredArticles = filteredArticles.filter(article => 
      filters.tags!.some(tag => article.tags.includes(tag))
    );
  }

  if (filters.author) {
    filteredArticles = filteredArticles.filter(article => 
      article.author.toLowerCase().includes(filters.author!.toLowerCase())
    );
  }

  if (filters.featured !== undefined) {
    filteredArticles = filteredArticles.filter(article => 
      article.featured === filters.featured
    );
  }

  if (filters.dateFrom) {
    const fromDate = new Date(filters.dateFrom);
    filteredArticles = filteredArticles.filter(article => 
      new Date(article.publishedAt) >= fromDate
    );
  }

  if (filters.dateTo) {
    const toDate = new Date(filters.dateTo);
    filteredArticles = filteredArticles.filter(article => 
      new Date(article.publishedAt) <= toDate
    );
  }

  return filteredArticles.sort((a, b) => 
    new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
};

/**
 * Get article statistics
 */
export const getArticleStats = () => {
  const articles = articlesData.articles;
  
  return {
    totalArticles: articles.length,
    totalCategories: getAllCategories().length,
    totalTags: getAllTags().length,
    featuredArticles: articles.filter(a => a.featured).length,
    averageReadingTime: Math.round(
      articles.reduce((sum, a) => sum + a.readingTime, 0) / articles.length
    ),
    publishedThisMonth: articles.filter(article => {
      const publishDate = new Date(article.publishedAt);
      const now = new Date();
      return publishDate.getMonth() === now.getMonth() && 
             publishDate.getFullYear() === now.getFullYear();
    }).length
  };
};

/**
 * Get articles for sitemap
 */
export const getArticlesForSitemap = () => {
  return articlesData.articles.map(article => ({
    url: getArticleUrl(article),
    lastModified: article.updatedAt,
    priority: article.featured ? 0.8 : 0.6,
    changeFrequency: 'monthly' as const
  }));
};