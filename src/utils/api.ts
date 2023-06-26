import axios from 'axios';

const api = axios.create({
  baseURL:
    import.meta.env.VITE_BASE_API_URL || 'https://study4free-api.onrender.com',
  timeout: 1000,
  headers: {
    'X-Custom-Header': 'foobar',
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

export default api;
