import { useRoutes } from "react-router-dom";

import { publicRoutes } from "./public";
import { commonRoute, NotFound } from "@/features/common";

interface AppRouteProps {}

const AppRoute: React.FC<AppRouteProps> = () => {
  const auth: any = {};

  const currentRoutes = auth.user ? [] : publicRoutes;

  return useRoutes([
    ...currentRoutes,
    ...commonRoute,
    { path: "*", element: <NotFound /> },
  ]);
};

export default AppRoute;
