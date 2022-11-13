import { useQuery } from "react-query";
import { clearToken, getToken, setToken } from "@/utils/storage";
import { useToast } from "@chakra-ui/react";

import { requestRegister, RegisterCredentialsDTO } from "./register";
import { LoginCredentialsDTO, loginWithEmailAndPassword } from "./login";
import { getUser } from "@/features/users/api/getUser";
import { ReactNode } from "react";

const register = async (data: RegisterCredentialsDTO) => {
    const response = await requestRegister(data);
    return response.user;
};

const login = async (data: LoginCredentialsDTO) => {
    const response = await loginWithEmailAndPassword(data);
    setToken(response.token);
    return response.user;
};

const loadUser = async () => {
    const token = getToken();

    if (!token) {
        return null;
    }

    const response = await getUser();
    return response.user;
};

const logout = () => {
    clearToken();
    window.location.assign(window.location.origin);
};

export const useAuth = () => {
    const toast = useToast();
    const { data: user } = useQuery(["my"], loadUser, {
        onError: (err) => {
            toast({
                status: "error",
                position: "top-right",
                description: err as ReactNode,
            });
        },
    });

    return {
        register,
        login,
        user,
        logout,
    };
};
