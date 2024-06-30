import axios from "axios";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
  baseURL:import.meta.env.VITE_API_URL,
})
const useAxiosSecure = () => {
  const {logOut} = useAuth()
  const navigate = useNavigate()
  axiosSecure.interceptors.request.use(function (config) {
      // Do something before request is sent
      const token = localStorage.getItem('token')
      config.headers.authorization = `Bearer ${token}`
      return config;
    }, function (error) {
      // Do something with request error
      return Promise.reject(error);
    });
    axiosSecure.interceptors.response.use(function (response) {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      return response;
    }, async (error) => {
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      const status = error.response.status
      console.log('Status from response error',status);
      if(status === 401 || status === 403){
          navigate('/')
          await logOut()
      }
      return Promise.reject(error);
    });

  return axiosSecure
};

export default useAxiosSecure;