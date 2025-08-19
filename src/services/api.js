import axios from 'axios';

const API = axios.create({
    baseURL: 'https://server-drqw.onrender.com/api',
    withCredentials: true,   // agar cookies ka use ho rha hai
});

export default API;