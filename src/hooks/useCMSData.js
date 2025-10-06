import { useState, useEffect } from 'react';
import apiService from '@/services/api';

/**
 * Custom hook for fetching CMS data with loading and error states
 * @param {string} endpoint - API endpoint to fetch from
 * @param {object} options - Additional options for the API call
 * @param {array} dependencies - Dependencies array for useEffect
 */
export const useCMSData = (endpoint, options = {}, dependencies = []) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const result = await apiService.fetch(endpoint, options);
        setData(result);
      } catch (err) {
        setError(err.message);
        console.error(`Error fetching ${endpoint}:`, err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, dependencies);

  return { data, loading, error, refetch: () => fetchData() };
};

/**
 * Hook for global site data (colors, contact info, etc.)
 */
export const useGlobalData = () => {
  const { data, loading, error } = useCMSData('global');
  
  useEffect(() => {
    if (data?.attributes) {
      const root = document.documentElement;
      const attrs = data.attributes;
      
      // Set CSS custom properties for theming
      root.style.setProperty('--primary-color', attrs.primaryColor || '#d4af37');
      root.style.setProperty('--secondary-color', attrs.secondaryColor || '#8b0000');
      root.style.setProperty('--accent-color', attrs.accentColor || '#ff6b35');
      root.style.setProperty('--background-color', attrs.backgroundColor || '#ffffff');
      root.style.setProperty('--text-color', attrs.textColor || '#333333');
    }
  }, [data]);

  return { globalData: data, loading, error };
};

/**
 * Hook for page-specific content
 */
export const usePageContent = (pageName, sectionName = null) => {
  const endpoint = sectionName 
    ? `page-contents?filters[pageName][$eq]=${pageName}&filters[sectionName][$eq]=${sectionName}`
    : `page-contents?filters[pageName][$eq]=${pageName}`;
    
  const { data, loading, error } = useCMSData(endpoint, {}, [pageName, sectionName]);
  
  // Return first item if it's an array, otherwise return data as is
  const content = Array.isArray(data) ? data[0] : data;
  
  return { content, loading, error };
};

/**
 * Hook for menu items with categories
 */
export const useMenuData = () => {
  const { data: menuItems, loading: menuLoading, error: menuError } = useCMSData('menu-items');
  const { data: categories, loading: categoriesLoading, error: categoriesError } = useCMSData('categories');
  
  return {
    menuItems: menuItems || [],
    categories: categories || [],
    loading: menuLoading || categoriesLoading,
    error: menuError || categoriesError
  };
};

/**
 * Hook for gallery images
 */
export const useGalleryData = () => {
  const { data, loading, error } = useCMSData('galleries');
  return { 
    galleryImages: data || [], 
    loading, 
    error 
  };
};

/**
 * Hook for testimonials
 */
export const useTestimonialsData = () => {
  const { data, loading, error } = useCMSData('testimonials');
  return { 
    testimonials: data || [], 
    loading, 
    error 
  };
};

/**
 * Hook for slider content
 */
export const useSliderData = () => {
  const { data, loading, error } = useCMSData('sliders');
  return { 
    slides: data || [], 
    loading, 
    error 
  };
};

/**
 * Hook for services data
 */
export const useServicesData = () => {
  const { data, loading, error } = useCMSData('services');
  return { 
    services: data || [], 
    loading, 
    error 
  };
};

/**
 * Hook for brands data
 */
export const useBrandsData = () => {
  const { data, loading, error } = useCMSData('brands');
  return { 
    brands: data || [], 
    loading, 
    error 
  };
};
