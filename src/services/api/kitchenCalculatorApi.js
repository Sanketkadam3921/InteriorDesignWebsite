import { apiRequest } from './config';

/**
 * Kitchen Calculator API Service
 */

/**
 * Calculate kitchen estimate
 * @param {Object} data - Calculation data
 * @param {String} data.layout - Layout type ("l-shaped", "u-shaped", "straight", "parallel")
 * @param {Number} data.A - Dimension A in feet
 * @param {Number} data.B - Dimension B in feet (optional)
 * @param {Number} data.C - Dimension C in feet (optional)
 * @param {String} data.package - Package type ("essentials", "premium", "luxe")
 * @returns {Promise<Object>} Estimate result
 */
export const calculateKitchenEstimate = async (data) => {
  return apiRequest('/price-calculators/kitchen/calculator/estimate', {
    method: 'POST',
    body: JSON.stringify(data),
  });
};

/**
 * Submit kitchen estimate with user details
 * @param {Object} data - Submission data
 * @param {String} data.name - User name
 * @param {String} data.email - User email
 * @param {String} data.phone - User phone
 * @param {String} data.city - User city
 * @param {String} data.message - Optional message
 * @param {Object} data.estimate - Estimate details
 * @returns {Promise<Object>} Submission result
 */
export const submitKitchenEstimate = async (data) => {
  return apiRequest('/price-calculators/kitchen/calculator/submit', {
    method: 'POST',
    body: JSON.stringify(data),
  });
};



