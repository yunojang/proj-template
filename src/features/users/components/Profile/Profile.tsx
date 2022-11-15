import { useAuth } from "@/features/auth/api";
import { FC, useMemo } from "react";
import { getRandomIntro } from "./constant";

export interface ProfileProps {}

export const Profile: FC<ProfileProps> = () => {
    const { user } = useAuth();

    const introMsg = useMemo(() => getRandomIntro(), []);

    return (
        <section id="profile">
            <header className="mb-4">
                <div className="text-4xl mb-4">{user?.email}님 안녕하세요</div>
                <div className="text-2xl">{introMsg}</div>
            </header>
            <main></main>
        </section>
    );
};
