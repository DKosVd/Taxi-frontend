import axios from 'axios';

const axiosInstance = axios.create({baseURL: 'http://192.168.0.109:3003'});

export default axiosInstance;