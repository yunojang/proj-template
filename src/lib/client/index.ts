import Axios from "axios";

import { API_URL } from "@/config";

const client = Axios.create({
  baseURL: API_URL,
});

client.interceptors.request.use();
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
