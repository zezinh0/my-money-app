import axios from 'axios'
const BASE_URL = 'http://localhost:3003/api'

export function getSummary() {
  const request = axios.get(`${BASE_URL}/billingCycles/summary`)
    .then(response => {

      return {
        type: 'BILLING_SUMMARY_FETCHED',
        payload: response.data
      };
    })
    .catch(error => {
      console.error('Error fetching summary:', error);
      return {
        type: 'BILLING_SUMMARY_FETCH_FAILED', // Custom action for failed request
        payload: null  // Could set a message or null if no data
      };
    });

  // Return the promise to allow for async dispatching

  return request
}