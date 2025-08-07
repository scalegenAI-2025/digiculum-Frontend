import axios from 'axios';

// const api = axios.create({
//   baseURL: 'http://localhost:9000/api/auth',
//   withCredentials: true,
//   headers: {
//     'Content-Type': 'application/json',
//   },
// });

// export default api;

const api = axios.create({
   baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:9000/api/auth',
   //baseURL: "https://backend-1-9qjs.onrender.com/api/auth",
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});
export default api;
