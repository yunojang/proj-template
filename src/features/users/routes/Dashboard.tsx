import { Suspense } from "react";
import { Profile } from "../components/Profile";
import UserLayout from "../components/Layout";

const Dashboard = () => {
    return (
        <Suspense>
            <UserLayout>
                <Profile />
            </UserLayout>
        </Suspense>
    );
};

export default Dashboard;
