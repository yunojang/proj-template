import { useRoutes } from "react-router-dom";

import { publicRoutes } from "./public";
import { commonRoute, NotFound } from "@/features/common";

interface AppRouteProps {}

const AppRoute: React.FC<AppRouteProps> = () => {
  const auth: any = {};

  // auth 확인 후 아예 라우터 결정
  const currentRoutes = auth.user ? [] : publicRoutes;

  return useRoutes([
    ...currentRoutes,
    ...commonRoute,
    { path: "*", element: <NotFound /> },
  ]);
};

export default AppRoute;
