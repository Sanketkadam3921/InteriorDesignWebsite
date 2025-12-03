// Auto-select API URL
const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL ||
  (import.meta.env.DEV
    ? "http://localhost:5000/api" // Dev mode
    : "https://kalakruti-backend.onrender.com/api"); // Production mode

/**
 * Base fetch wrapper with error handling
 */
async function apiRequest(endpoint, options = {}) {
  const url = `${API_BASE_URL}${endpoint}`;

  const config = {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
  };

  try {
    const response = await fetch(url, config);

    // Try to parse JSON safely
    let data;
    try {
      data = await response.json();
    } catch {
      data = { message: "Invalid JSON response from server" };
    }

    // Handle non-OK responses
    if (!response.ok) {
      let errorMessage = data.message || `API Error: ${response.status}`;

      // Collect express-validator error messages (if present)
      if (data.errors && Array.isArray(data.errors) && data.errors.length > 0) {
        const details = data.errors
          .map((err) => err.msg || err.message)
          .join(", ");
        errorMessage = `${errorMessage}: ${details}`;
      }

      throw new Error(errorMessage);
    }

    return data;
  } catch (error) {
    console.error("API Request Error:", error);
    throw error;
  }
}

export { API_BASE_URL, apiRequest };
