import { Route, Routes } from "react-router-dom";

// import UserHome from "./userHome";
import Dashboard from "./Dashboard";

export const UserRoute = () => {
    return (
        <Routes>
            <Route path="/" element={<Dashboard />} />
        </Routes>
    );
};
