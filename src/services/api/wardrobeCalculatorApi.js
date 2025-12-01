import { apiRequest } from './config';

/**
 * Wardrobe Calculator API Service
 */

/**
 * Calculate wardrobe estimate
 * @param {Object} data - Calculation data
 * @param {String} data.height - Height ("4ft", "6ft", "7ft", "9ft")
 * @param {String} data.type - Type ("sliding", "swing")
 * @returns {Promise<Object>} Estimate result
 */
export const calculateWardrobeEstimate = async (data) => {
  return apiRequest('/price-calculators/wardrobe/calculator/estimate', {
    method: 'POST',
    body: JSON.stringify(data),
  });
};

/**
 * Submit wardrobe estimate with user details
 * @param {Object} data - Submission data
 * @param {String} data.name - User name
 * @param {String} data.email - User email
 * @param {String} data.phone - User phone
 * @param {String} data.propertyName - Property name
 * @param {Boolean} data.whatsappUpdates - WhatsApp updates preference
 * @param {Object} data.estimate - Estimate details
 * @returns {Promise<Object>} Submission result
 */
export const submitWardrobeEstimate = async (data) => {
  return apiRequest('/price-calculators/wardrobe/calculator/submit', {
    method: 'POST',
    body: JSON.stringify(data),
  });
};

