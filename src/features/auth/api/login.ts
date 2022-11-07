import client from "@/lib/client";

export interface LoginCredentialsDTO {
    email: string;
    password: string;
}

export const loginWithEmailAndPassword = async (data: LoginCredentialsDTO) => {
    return await client.post("/api/auth/login", data);
};
