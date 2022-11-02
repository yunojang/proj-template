import UserRoute from "@/features/users";
import { lazy } from "react";
import { RouteObject } from "react-router-dom";

const AuthRoute = lazy(() => import("@/features/auth"));

const pahts = {
  auth: "/auth/*",
  user: "/user/*",
};

export const publicRoutes: RouteObject[] = [
  {
    path: pahts.auth,
    element: <AuthRoute />,
  },
  {
    path: pahts.user,
    element: <UserRoute />,
  },
];
