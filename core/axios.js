import axios from 'axios';

const axiosInstance = axios.create({baseURL: 'http://192.168.1.52:3003'});

export default axiosInstance;