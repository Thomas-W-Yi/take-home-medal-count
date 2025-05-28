import axios from 'axios';

export const TIMEOUT_MESSAGE =
  'Time-out error. Please try again in a few minutes.';
export const GENERIC_MESSAGE =
  'An internal server occurred. Please try again in a few minutes';
export const UNAUTHORIZED_MESSAGE =
  'Unable to process request. Please refresh the page and try again';

export interface ResponseDataError {
  data: { detail?: string; message?: string };
  status: number;
}

export interface RequestError {
  success: boolean;
  status: number;
  error: string;
}

const API_BASE_URL_DEFAULT = 'http://localhost:3000'; // Fallback URL

// Get base URL from environment variable, with a fallback
const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || API_BASE_URL_DEFAULT;

// Mock Data Endpoints: Use environment variables, with potential fallbacks or empty strings if not defined
// If these are meant to be loaded from local JSON files, you might need a Next.js API route to serve them,
// or use a separate fetch for static JSON files if they are in the `public` directory.
export const MOCK_MEDALS_API_ENDPOINT =
  process.env.NEXT_PUBLIC_MOCK_MEDALS_API || '';

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000, // Example: 10 seconds timeout
  headers: {
    'Content-Type': 'application/json',
    // You might add authorization headers here too, e.g., Bearer token
    // 'Authorization': `Bearer ${localStorage.getItem('token')}`,
  },
});

export function handleAxiosFailure(error) {
  /*
    If the request failed for any reason, process the error and extract the error message and error code
    The error is formatted as follows:
      {
        "message"?: "<error message>",
        "detail"? : "<error detail>"
      }
  */
  if (error.response) {
    // should only validate against response
    const { status } = error.response as ResponseDataError;

    // Message displayed will depend on status code
    let errorMessage = '';
    switch (status) {
      case 401:
        errorMessage =
          error?.response?.data?.message ||
          error?.response?.data?.detail ||
          UNAUTHORIZED_MESSAGE;
        break;
      case 408:
        errorMessage = TIMEOUT_MESSAGE;
        break;
      case 413:
        errorMessage = error.response?.data?.detail ?? GENERIC_MESSAGE;
        break;
      case 409:
        errorMessage = error.response?.data?.detail ?? GENERIC_MESSAGE;
        break;
      default:
        errorMessage = GENERIC_MESSAGE;
        break;
    }
    return Promise.reject({
      success: false,
      status,
      error: errorMessage,
    });
  } else if (!error.request || !error.response) {
    // If the error response or request is undefined, return a generic error message
    // promise should be rejected. There is no outside handler to catch a thrown exception
    if (error.code == 'ERR_CANCELED') {
      return Promise.reject({
        success: false,
        status: 408,
        error: TIMEOUT_MESSAGE,
      });
    }
    return Promise.reject({
      success: false,
      status: 0,
      error: GENERIC_MESSAGE,
    });
  }
}
// Add a response interceptor
api.interceptors.response.use(function (response) {
  // Return response as-is if status is 2xx
  return response;
}, handleAxiosFailure);

export default api;
