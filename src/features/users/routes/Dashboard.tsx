import { Suspense } from "react";

import UserLayout from "../components/Layout";
import { Profile } from "../components/Profile";
import { UserAvarta } from "../components/UserAvarta";
import { ChatStart } from "../components/ChatStart";

const Dashboard = () => {
    return (
        <Suspense>
            <UserLayout>
                <header className="flex justify-between p-8">
                    <Profile />
                    <UserAvarta />
                </header>

                <main className="flex-1 bg-gray-100 rounded-md m-4 flex flex-col p-8">
                    <div className="flex-1 flex justify-end items-end">
                        <ChatStart />
                    </div>
                </main>
            </UserLayout>
        </Suspense>
    );
};

export default Dashboard;
