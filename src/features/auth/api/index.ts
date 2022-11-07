import { UserResponse } from "../types";
import { requestRegister, RegisterCredentialsDTO } from "./register";
// import { LoginCredentialsDTO, loginWithEmailAndPassword } from "./login";

import { setToken } from "@/utils/storage";

const handleUserResponse = ({ token, user }: UserResponse) => {
    // set jwt localstarage
    setToken(token);

    return user;
};

const register = async (data: RegisterCredentialsDTO) => {
    const response = await requestRegister(data);
    const user = handleUserResponse(response);
    return user;
};

// const login = async (data: LoginCredentialsDTO) => {
//     const response = loginWithEmailAndPassword(data);
// };

export const useAuth = () => {
    return {
        register,
    };
};
