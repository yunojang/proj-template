import { ReactNode, useCallback } from "react";
import { useMutation, useQuery } from "react-query";
import { clearToken, getToken, setToken } from "@/utils/storage";

import { requestRegister, RegisterCredentialsDTO } from "./register";
import { LoginCredentialsDTO, loginWithEmailAndPassword } from "./login";
import { getUser } from "@/features/users/api/getUser";

import { useToast } from "@chakra-ui/react";

const loadUser = async () => {
    const token = getToken();

    if (!token) {
        return null;
    }

    const response = await getUser();
    if (!response) return;
    return response.user;
};

const logout = () => {
    clearToken();
    window.location.assign(window.location.origin);
};

const register = async (data: RegisterCredentialsDTO) => {
    const response = await requestRegister(data);
    return response.user;
};

const login = async (data: LoginCredentialsDTO) => {
    const response = await loginWithEmailAndPassword(data);

    setToken(response.token);
    return response.user;
};

export const useAuth = () => {
    const toast = useToast();

    const { data: user } = useQuery(["my"], loadUser, {
        suspense: false,
        useErrorBoundary: false,
        onError: (err) => {
            toast({
                title: "Error",
                description: err as ReactNode,
                status: "error",
                position: "top-right",
                duration: 1500,
                isClosable: true,
            });
        },
    });

    const { mutateAsync: loginFn } = useMutation({
        mutationFn: login,
        onError: (err) => {
            toast({
                title: err as string,
                status: "error",
                position: "top-right",
                duration: 1500,
                isClosable: true,
            });
        },
    });

    const { mutateAsync: resgiterFn } = useMutation({
        mutationFn: register,
        onSuccess: () => {
            toast({
                title: "Success",
                description: "Create new user",
                status: "success",
                position: "top-right",
                duration: 1500,
                isClosable: true,
            });
        },
    });

    return {
        register: resgiterFn,
        login: loginFn,
        user,
        logout,
    };
};
