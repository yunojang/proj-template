import { useQuery } from "react-query";

import client from "@/lib/client";
import { User } from "../types";

interface GetUserDTO {
    user: User;
}

export const getUser = (): Promise<GetUserDTO> => {
    return client.get("/api/auth/me");
};

export const useUser = () => {
    const { data, ...result } = useQuery({
        queryKey: ["user"],
        queryFn: getUser,
    });

    if (!data) {
        throw getUser;
    }

    return { user: data.user, ...result };
};
