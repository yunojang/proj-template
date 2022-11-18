import { BaseEntity } from "@/types";

export enum StartChatType {
    Text = "text",
    Voice = "voice",
    Video = "video",
}

export interface User extends BaseEntity {
    email: string;
    password: string;
    gender?: string;
    age?: number;
    startChatType?: StartChatType;
}
