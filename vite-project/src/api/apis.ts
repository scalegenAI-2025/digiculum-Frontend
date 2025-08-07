import axios from 'axios';

export const API = axios.create({
  baseURL: 'https://backend-1-9qjs.onrender.com/api/auth',
});

export const registerUser = (data: {
  username: string;
  email: string;
 // password: string;

 mobileNumber: string;
  companyName: string;
}) => API.post('/new-register', data);

export const loginUser = (data: {
  email: string;
 // password: string;
  companyName: string;
}) => API.post('/user-login', data);

export const verifyOtp = (data: { email: string; otp: string }) =>
  API.post('/verify-otp', data);
