import { getToken, setToken } from "@/utils/storage";

import { requestRegister, RegisterCredentialsDTO } from "./register";
import { LoginCredentialsDTO, loginWithEmailAndPassword } from "./login";
import { getUser } from "./getUser";
import { useQuery } from "react-query";

const register = async (data: RegisterCredentialsDTO) => {
    const response = await requestRegister(data);
    // const user = handleUserResponse(response);
    return response.user;
};

const login = async (data: LoginCredentialsDTO) => {
    const response = await loginWithEmailAndPassword(data);
    setToken(response.token);
    return response.user;
};

const loadUser = async () => {
    if (getToken()) {
        const data = await getUser();
        return data;
    }

    return null;
};

export const useAuth = () => {
    const { data: user } = useQuery(["my"], loadUser, {
        retry: false,
    });

    return {
        register,
        login,
        loadUser,
        user,
    };
};
