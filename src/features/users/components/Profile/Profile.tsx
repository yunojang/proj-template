import { useAuth } from "@/features/auth/api";
import React, { FC } from "react";

export interface ProfileProps {}

export const Profile: FC<ProfileProps> = () => {
    const { user } = useAuth();

    return (
        <div className="p-6 bg-gray-100 rounded-md m-4">
            <div>{user?.email}</div>
        </div>
    );
};
