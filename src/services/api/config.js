// API Configuration
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api';

/**
 * Base fetch wrapper with error handling
 */
async function apiRequest(endpoint, options = {}) {
  const url = `${API_BASE_URL}${endpoint}`;
  
  const config = {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  };

  try {
    const response = await fetch(url, config);
    const data = await response.json();

    if (!response.ok) {
      // Extract detailed error messages from validation errors
      let errorMessage = data.message || `API Error: ${response.status}`;
      if (data.errors && Array.isArray(data.errors) && data.errors.length > 0) {
        const errorDetails = data.errors.map(err => err.msg || err.message).join(', ');
        errorMessage = `${errorMessage}: ${errorDetails}`;
      }
      throw new Error(errorMessage);
    }

    return data;
  } catch (error) {
    console.error('API Request Error:', error);
    throw error;
  }
}

export { API_BASE_URL, apiRequest };

