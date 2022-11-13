import { BaseEntity } from "@/types";

export interface User extends BaseEntity {
    email: string;
    password: string;
    gender?: string;
    age?: number;
}
