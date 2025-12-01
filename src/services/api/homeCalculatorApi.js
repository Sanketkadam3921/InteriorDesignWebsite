import { apiRequest } from './config';

/**
 * Home Calculator API Service
 */

/**
 * Calculate home interior estimate
 * @param {Object} data - Calculation data
 * @param {String} data.bhk - BHK type (e.g., "1bhk", "2bhk", "3bhk")
 * @param {String} data.size - Size type ("small" or "large") - optional
 * @param {String} data.package - Package type ("essentials", "premium", "luxe")
 * @param {Object} data.rooms - Room counts object
 * @returns {Promise<Object>} Estimate result
 */
export const calculateHomeEstimate = async (data) => {
  return apiRequest('/price-calculators/home/calculator/estimate', {
    method: 'POST',
    body: JSON.stringify(data),
  });
};

/**
 * Submit home interior estimate with user details
 * @param {Object} data - Submission data
 * @param {String} data.name - User name
 * @param {String} data.email - User email
 * @param {String} data.phone - User phone
 * @param {String} data.propertyName - Property name
 * @param {Object} data.estimate - Estimate details
 * @returns {Promise<Object>} Submission result
 */
export const submitHomeEstimate = async (data) => {
  return apiRequest('/price-calculators/home/calculator/submit', {
    method: 'POST',
    body: JSON.stringify(data),
  });
};

