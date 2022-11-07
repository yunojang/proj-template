import client from "@/lib/client";
import { Gender, UserResponse } from "../types";

export interface RegisterCredentialsDTO {
    email: string;
    password: string;
    gender?: Gender;
    age?: number;
}

export const requestRegister = async (data: RegisterCredentialsDTO) => {
    return (await client.post("/api/auth/register", data)) as UserResponse;
};
