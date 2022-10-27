import { lazy } from "react";

const AuthRoute = lazy(() => import("@/features/auth"));

export const publicRoutes = [
  {
    path: "/auth/*",
    element: <AuthRoute />,
  },
];
