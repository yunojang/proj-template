import client from "@/lib/client";
import { UserResponse } from "../types";

export interface LoginCredentialsDTO {
    email: string;
    password: string;
}

export const loginWithEmailAndPassword = async (data: LoginCredentialsDTO) => {
    return await client.post<any, UserResponse>("/api/auth/login", data);
};
