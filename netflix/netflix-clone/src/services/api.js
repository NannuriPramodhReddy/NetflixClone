// src/api.js

import axios from 'axios';

const API_URL = 'http://localhost:5000/api';  // Replace with your backend URL

// Example API request
export const loginUser = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/auth/login`, { email, password });
    return response.data;
  } catch (error) {
    throw new Error('Login failed');
  }
};

export const logoutUser = async () => {
  try {
    await axios.post(`${API_URL}/auth/logout`);
  } catch (error) {
    throw new Error('Logout failed');
  }
};

// Other API functions can be added here as needed
