import { Suspense } from "react";
import { Profile } from "../components/Profile";

const UserHome = () => {
    return (
        <Suspense>
            <Profile />
        </Suspense>
    );
};

export default UserHome;
