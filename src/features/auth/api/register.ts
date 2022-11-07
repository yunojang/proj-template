import client from "@/lib/client";
import { Gender } from "../types";

export interface RegisterCredentialsDTO {
  email: string;
  password: string;
  gender?: Gender;
  age?: number;
}

export const register = (data: RegisterCredentialsDTO) => {
  return client.post("/api/auth/register", data);
};
