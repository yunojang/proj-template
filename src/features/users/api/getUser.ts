import { useQuery } from "react-query";

import client from "@/lib/client";
import { User } from "../types";

export const getUsers = (): Promise<User> => {
    return client.get("/users");
};

export const useUser = () => {
    const { data, ...result } = useQuery({
        queryKey: ["user"],
        queryFn: getUsers,
    });

    if (!data) {
        throw getUsers;
    }

    return { data, ...result };
};
