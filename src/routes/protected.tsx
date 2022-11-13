import { lazy } from "react";
import { Navigate, RouteObject } from "react-router-dom";

const UserRoute = lazy(() => import("@/features/users"));
// const Dashboard = lazy(() => import("@/features/users"));

const pahts = {
    user: "/user/*",
};

export const protectedRoutes: RouteObject[] = [
    { path: pahts.user, element: <UserRoute /> },
    { path: "*", element: <Navigate to="." /> },
];
