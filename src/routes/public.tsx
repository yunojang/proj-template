import { lazy } from "react";

const AuthRoute = lazy(() => import("@/features/auth"));

const pahts = {
  auth: "/auth/*",
};

export const publicRoutes = [
  {
    path: pahts.auth,
    element: <AuthRoute />,
  },
];
