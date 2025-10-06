// API service for Grand Pittu backend
import config from '../config/config';

class APIService {
  constructor() {
    // Use proxy path during development, direct URL in production
    this.baseURL = this.getBaseURL();
  }

  getBaseURL() {
    const isDev = import.meta.env.DEV;
    const devURL = '/api';
    const prodURL = config.API_BASE_URL;
    
    console.log(`Environment: ${isDev ? 'development' : 'production'}`);
    console.log(`Using base URL: ${isDev ? devURL : prodURL}`);
    
    if (isDev) {
      // Use Vite proxy during development
      return devURL;
    } else {
      // Use direct URL in production
      return prodURL;
    }
  }

  async makeRequest(endpoint, method = 'GET', data = null) {
    const url = `${this.baseURL}${endpoint}`;
    
    const requestConfig = {
      method,
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    };

    // Add CORS headers only in development when not using proxy
    if (import.meta.env.DEV && this.baseURL !== '/api') {
      requestConfig.mode = 'cors';
      requestConfig.credentials = 'omit';
      requestConfig.headers['Access-Control-Allow-Origin'] = '*';
      requestConfig.headers['X-Requested-With'] = 'XMLHttpRequest';
    }

    if (data && (method === 'POST' || method === 'PUT')) {
      requestConfig.body = JSON.stringify(data);
    }

    try {
      console.log(`Making ${method} request to: ${url}`, data);
      console.log(`Base URL: ${this.baseURL}, Environment: ${import.meta.env.DEV ? 'development' : 'production'}`);
      const response = await fetch(url, requestConfig);
      
      if (!response.ok) {
        let errorData = {};
        try {
          errorData = await response.json();
        } catch (e) {
          // If can't parse JSON, use default error
        }
        
        const errorMessage = errorData.message || 
                            errorData.businessExceptionDescription || 
                            `HTTP error! status: ${response.status}`;
        
        console.error('API Error:', {
          status: response.status,
          statusText: response.statusText,
          errorData
        });
        
        throw new Error(errorMessage);
      }

      return await response.json();
    } catch (error) {
      console.error(`API Request failed: ${method} ${endpoint}`, error);
      
      // Handle network errors (including CORS)
      if (error.name === 'TypeError' && (error.message.includes('fetch') || error.message.includes('NetworkError') || error.message.includes('CORS'))) {
        throw new Error('Unable to connect to server. This might be due to network issues or server configuration. Please try again later or contact support.');
      }
      
      throw error;
    }
  }

  // Reservation API
  async createReservation(reservationData) {
    const payload = {
      username: reservationData.name,
      email: reservationData.email,
      phoneNo: reservationData.tel,
      message: reservationData.message || '',
      tableNo: parseInt(reservationData.tableNo) || 1, // Default table number
      date: reservationData.date, // Format: YYYY-MM-DD
      time: reservationData.time, // Format: HH:mm
      guestNo: parseInt(reservationData.persons)
    };

    console.log('Sending reservation payload:', payload);
    
    try {
      return await this.makeRequest('/v1/book', 'POST', payload);
    } catch (error) {
      // If CORS fails, provide a more user-friendly message
      if (error.message.includes('Unable to connect to server')) {
        throw new Error('We\'re currently experiencing technical difficulties with our reservation system. Please call us directly at +94 765 785 4211 to make your reservation, or try again in a few minutes.');
      }
      throw error;
    }
  }

  // Contact API
  async createContact(contactData) {
    const payload = {
      fullname: contactData.name,
      email: contactData.email,
      phoneNo: contactData.tel,
      subject: contactData.subject,
      message: contactData.message
    };

    console.log('Sending contact payload:', payload);
    
    try {
      return await this.makeRequest('/v1/contact', 'POST', payload);
    } catch (error) {
      // If CORS fails, provide a more user-friendly message
      if (error.message.includes('Unable to connect to server')) {
        throw new Error('We\'re currently experiencing technical difficulties with our contact system. Please call us directly at +94 765 785 4211, or try again in a few minutes.');
      }
      throw error;
    }
  }
}

// Export singleton instance
export const apiService = new APIService();
export default apiService;
