import { useAuth } from "@/features/auth/api";
import { FC } from "react";

export interface ProfileProps {}

export const Profile: FC<ProfileProps> = () => {
    const { user } = useAuth();

    return (
        <section id="profile" className="p-6 bg-gray-100 rounded-md">
            <header className="mb-4">
                <h3 className="text-xl">{user?.email}님 안녕하세요 👋</h3>
            </header>
            <main></main>
        </section>
    );
};
