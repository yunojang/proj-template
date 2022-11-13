import { useRoutes } from "react-router-dom";
import { useAuth } from "@/features/auth/api";

import { commonRoute } from "@/features/common";
import { protectedRoutes } from "./protected";
import { publicRoutes } from "./public";

interface AppRouteProps {}

const AppRoute: React.FC<AppRouteProps> = () => {
    const { user } = useAuth();

    // console.log(user);

    // Issue - useAuth의 user가 비동기일 때 적용되지 않음
    const currentRoutes = user ? protectedRoutes : publicRoutes;
    // const currentRoutes = [...protectedRoutes, ...publicRoutes];

    return useRoutes([...currentRoutes, ...commonRoute]);
};

export default AppRoute;
