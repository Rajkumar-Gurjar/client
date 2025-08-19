import axios from 'axios';

const API = axios.create({
    baseURL: 'https://server-wzqe.onrender.com/api',
    withCredentials: true,   // agar cookies ka use ho rha hai
});

export default API;