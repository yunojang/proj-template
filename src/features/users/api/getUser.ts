import { useQuery } from "react-query";

import client from "@/lib/client";
import { User } from "../types";

export const getuser = (): Promise<User> => {
    return client.get("/api/auth/me");
};

export const useUser = () => {
    const { data, ...result } = useQuery({
        queryKey: ["user"],
        queryFn: getuser,
    });

    if (!data) {
        throw getuser;
    }

    return { data, ...result };
};
