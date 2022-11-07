import { User } from "@/features/users/types";

export interface UserResponse {
    user: User;
    token: string;
}
