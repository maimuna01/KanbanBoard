import axios from 'axios';

const BASE_URL = 'http://localhost:9000'; 

const authApi = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true, // Include this if you're using cookies for authentication
});

const login = async (username, password) => {
  try {
    const response = await authApi.post('/login', { username, password });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

const signup = async (username, password) => {
  try {
    const response = await authApi.post('/signup', { username, password });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export { login, signup };
