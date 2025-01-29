// apiUtils.js
const baseUrl =
  'http://ec2-13-60-34-131.eu-north-1.compute.amazonaws.com:4002/v1';

export const apiCall = async (
  method,
  endpoint,
  data = null,
  queryParams = null,
  useAuth = true,
  token,
) => {
  let url = baseUrl + endpoint;

  // Add query parameters for GET requests
  if (queryParams && method === 'GET') {
    const query = new URLSearchParams(queryParams).toString();
    url += `?${query}`;
  }

  // Headers with conditional Authorization
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };

  if (useAuth && token) {
    headers.Authorization = `Bearer ${token}`;
  }

  try {
    // For GET and HEAD requests, don't include a body
    const response = await fetch(url, {
      method,
      headers,
      body: method === 'GET' ? null : JSON.stringify(data), // No body for GET requests
    });

    console.log('API request of --->', endpoint, ' ===>', JSON.stringify(data));

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const responseData = await response.json();
    console.log(
      'API response of --->',
      endpoint,
      ' ===>',
      JSON.stringify(responseData),
    );
    return responseData; // Return the response data
  } catch (error) {
    console.log(error);
    throw error; // Rethrow error to handle it in calling components
  }
};
