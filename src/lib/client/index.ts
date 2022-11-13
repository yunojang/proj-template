import Axios, { AxiosRequestConfig } from "axios";
import { API_URL, env } from "@/config";
import { getToken } from "@/utils/storage";

const client = Axios.create({
    baseURL: API_URL,
});

function authRequestInterceptor(config: AxiosRequestConfig) {
    const token = getToken();
    config.headers = { ...config.headers }; // undefinedable -> object type

    if (token) {
        config.headers["Authorization"] = `${env.api.auth_prefix} ${token}`;
    }

    config.headers["Accept"] = "application/json";
    return config;
}

client.interceptors.request.use(authRequestInterceptor);

// type issue
client.interceptors.response.use(
    (response) => response.data,
    // server response error
    (error) => {
        const message = error.response?.data?.message ?? error.message;

        // popup toast
        console.error(message);

        return Promise.reject(error);
    }
);

export default client;
