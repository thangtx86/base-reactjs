import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

api.interceptors.request.use(
    (config) => {
        const configuration = { ...config };
        const { params } = configuration;

        configuration.params = {
            ...params,
            language: 'en-US'
        };
        configuration.headers = {
            'Content-Type': 'application/json',
            Authorization: 'Bearer your-auth-token'
        };
        return configuration;
    },
    (e) => Promise.reject(e)
);
export default api;
