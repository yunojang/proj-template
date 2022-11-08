import Axios, { AxiosRequestConfig } from "axios";
import { API_URL, env } from "@/config";
import { getToken } from "@/utils/storage";

// interface CustomResponse<T = any> {
//     data: T;
//     refreshedToken?: string;
// }

// interface CustomInterceptorManager<T> extends AxiosInterceptorManager<T> {
//     use<D>(
//         onFulfilled?: (value: T) => D | Promise<D>,
//         onRejected?: (error: any) => any,
//         options?: AxiosInterceptorOptions
//     ): number;
// }

// interface ClientInterface extends AxiosInstance {
//     interceptors: {
//         request: AxiosInterceptorManager<AxiosRequestConfig>;
//         response: CustomInterceptorManager<AxiosResponse>;
//     };
//     // getUri(config?: AxiosRequestConfig): string;
//     // request<T = any, R = AxiosResponse<T>, D = any>(
//     //     config: AxiosRequestConfig<D>
//     // ): Promise<R>;
//     // get<T = any, R = AxiosResponse<T>, D = any>(
//     //     url: string,
//     //     config?: AxiosRequestConfig<D>
//     // ): Promise<R>;
//     // delete<T = any, R = AxiosResponse<T>, D = any>(
//     //     url: string,
//     //     config?: AxiosRequestConfig<D>
//     // ): Promise<R>;
//     // post<T = any, R = AxiosResponse<T>, D = any>(
//     //     url: string,
//     //     data?: D,
//     //     config?: AxiosRequestConfig<D>
//     // ): Promise<R>;
//     // put<T = any, R = AxiosResponse<T>, D = any>(
//     //     url: string,
//     //     data?: D,
//     //     config?: AxiosRequestConfig<D>
//     // ): Promise<R>;
// }

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
    (error) => {
        const message = error.response?.data?.message ?? error.message;

        // popup toast
        console.error(message);

        return Promise.reject(error);
    }
);

export default client;
