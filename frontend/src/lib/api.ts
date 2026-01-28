export const getApiUrl = () => {
  // In production, we want to hit the backend directly or via proxy
  // If API_URL is set in environment (NEXT_PUBLIC_API_URL), use it.
  // Otherwise fallback to localhost for dev.
  
  const productionUrl = process.env.NEXT_PUBLIC_API_URL;
  
  if (process.env.NODE_ENV === 'production' && productionUrl) {
      return productionUrl;
  }
  
  return 'http://localhost:5000';
};
