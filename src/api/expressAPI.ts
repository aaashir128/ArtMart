import axios from "axios";
import type User from "../store/user/userInterface";


const instance = axios.create({
    baseURL: "http://localhost:3000/api/v1/user",
  withCredentials:true
  });
  

  export const registerUser = async (payload : User["userData"]) => {

   
  
    const response = await instance.post(`/register`,payload);
      return response;
  
  
     
  };


  
  export const loginUser = async (payload : User["userData"]) => {

   
  
    const response = await instance.post(`/login`,payload);
      return response;
  
  
     
  };

  const instanceLogin = axios.create({
    baseURL: "http://localhost:3000/api/v1/user",
  withCredentials:true
  });
  

  instanceLogin.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('accessToken');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );
  

  // Add a response interceptor
  instanceLogin.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // If the error status is 401 and there is no originalRequest._retry flag,
    // it means the token has expired and we need to refresh it
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refreshToken = localStorage.getItem('refreshToken');
        const response = await axios.post('http://localhost:3000/api/v1/user/refresh-token', { refreshToken });
        const { token } = response.data;

        localStorage.setItem('accessToken', token);

        // Retry the original request with the new token
        originalRequest.headers.Authorization = `Bearer ${token}`;
        return axios(originalRequest);
      } catch (error) {
        // Handle refresh token error or redirect to login
      }
    }

    return Promise.reject(error);
  }
);
  export default instanceLogin;