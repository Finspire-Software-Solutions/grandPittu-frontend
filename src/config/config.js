// Environment configuration
const config = {
  API_BASE_URL: import.meta.env.VITE_API_BASE_URL || 'https://grandpittu-backend.onrender.com',
  NODE_ENV: import.meta.env.NODE_ENV || 'development',
};

export default config;
