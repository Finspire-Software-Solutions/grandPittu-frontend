/**
 * Centralized API service for Custom CMS integration
 * Handles all API calls with caching and error handling
 */

class ApiService {
  constructor() {
    // Use the same environment variable as apiService.js
    this.baseURL = import.meta.env.VITE_API_BASE_URL || 'https://grandpittu-backend.onrender.com';
    this.cache = new Map();
    this.cacheTimeout = 5 * 60 * 1000; // 5 minutes
  }

  /**
   * Generic fetch method with caching
   */
  async fetch(endpoint, options = {}) {
    const cacheKey = `${endpoint}_${JSON.stringify(options)}`;
    
    // Check cache first
    if (this.cache.has(cacheKey)) {
      const cached = this.cache.get(cacheKey);
      if (Date.now() - cached.timestamp < this.cacheTimeout) {
        return cached.data;
      }
      this.cache.delete(cacheKey);
    }

    try {
      const url = `${this.baseURL}/api/${endpoint}`;
      const response = await fetch(url, {
        headers: {
          'Content-Type': 'application/json',
          ...options.headers,
        },
        ...options,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      
      // Cache the result
      this.cache.set(cacheKey, {
        data: data,
        timestamp: Date.now(),
      });

      return data;
    } catch (error) {
      console.error('API Error:', error);
      
      // Return fallback data when backend is not available
      return this.getFallbackData(endpoint);
    }
  }

  /**
   * Get fallback data when backend is not available
   */
  getFallbackData(endpoint) {
    const fallbackData = {
      'global': {
        siteName: 'Grand Pittu',
        siteDescription: 'Authentic Sri Lankan Restaurant',
        logo: { url: '/images/logo.png' },
        phone: '+94 77 123 4567',
        email: 'info@grandpittu.com',
        address: 'Colombo, Sri Lanka'
      },
      'categories': [
        {
          id: 1,
          name: 'Rice & Curry',
          description: 'Traditional Sri Lankan rice and curry',
          image: { url: '/images/category1.jpg' }
        },
        {
          id: 2,
          name: 'Pittu',
          description: 'Our signature pittu dishes',
          image: { url: '/images/category2.jpg' }
        },
        {
          id: 3,
          name: 'Hoppers',
          description: 'Delicious hoppers and egg hoppers',
          image: { url: '/images/category3.jpg' }
        },
        {
          id: 4,
          name: 'Kottu',
          description: 'Spicy kottu roti varieties',
          image: { url: '/images/category4.jpg' }
        },
        {
          id: 5,
          name: 'Beverages',
          description: 'Fresh juices and drinks',
          image: { url: '/images/category5.jpg' }
        },
        {
          id: 6,
          name: 'Desserts',
          description: 'Sweet treats and desserts',
          image: { url: '/images/category6.jpg' }
        }
      ],
      'menu-items': [
        {
          id: 1,
          name: 'Chicken Rice & Curry',
          description: 'Traditional chicken curry with rice',
          price: 'Rs. 450',
          category: 'Rice & Curry',
          image: { url: '/images/menu1.jpg' }
        },
        {
          id: 2,
          name: 'Coconut Pittu',
          description: 'Fresh coconut pittu with curry',
          price: 'Rs. 350',
          category: 'Pittu',
          image: { url: '/images/pittu.jpg' }
        },
        {
          id: 3,
          name: 'Egg Hopper',
          description: 'Crispy hopper with egg',
          price: 'Rs. 120',
          category: 'Hoppers',
          image: { url: '/images/eggappam.jpg' }
        }
      ],
      'services': [
        {
          id: 1,
          title: 'Dine In',
          description: 'Comfortable dining experience',
          icon: 'fa-utensils'
        },
        {
          id: 2,
          title: 'Take Away',
          description: 'Quick takeaway service',
          icon: 'fa-shopping-bag'
        },
        {
          id: 3,
          title: 'Delivery',
          description: 'Home delivery available',
          icon: 'fa-truck'
        }
      ]
    };

    // Handle filtered endpoints
    if (endpoint.includes('page-contents')) {
      return [];
    }

    return fallbackData[endpoint] || [];
  }

  /**
   * Clear cache for specific endpoint or all cache
   */
  clearCache(endpoint = null) {
    if (endpoint) {
      const keysToDelete = Array.from(this.cache.keys()).filter(key => 
        key.startsWith(endpoint)
      );
      keysToDelete.forEach(key => this.cache.delete(key));
    } else {
      this.cache.clear();
    }
  }

  // Specific API methods
  async getGlobal() {
    return this.fetch('global');
  }

  async getPageContent(pageName, sectionName = null) {
    let endpoint = `page-contents?filters[pageName][$eq]=${pageName}`;
    if (sectionName) {
      endpoint += `&filters[sectionName][$eq]=${sectionName}`;
    }
    return this.fetch(endpoint);
  }

  async getMenuItems() {
    return this.fetch('menu-items');
  }

  async getCategories() {
    return this.fetch('categories');
  }

  async getTestimonials() {
    return this.fetch('testimonials');
  }

  async getGalleryImages() {
    return this.fetch('galleries');
  }

  async getSliderImages() {
    return this.fetch('sliders');
  }

  async getBrands() {
    return this.fetch('brands');
  }

  async getFeatures() {
    return this.fetch('features');
  }

  async getAbout() {
    return this.fetch('about');
  }

  async getCTA() {
    return this.fetch('cta');
  }

  async getServices() {
    return this.fetch('services');
  }

  async getContact() {
    return this.fetch('contact');
  }
}

// Create and export singleton instance
const apiService = new ApiService();
export default apiService;
