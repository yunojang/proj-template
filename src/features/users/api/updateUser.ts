import { useMutation } from "react-query";
import { User } from "../types";
import client from "@/lib/client";

export const updateUser = (data: User) => {
    return client.put(`/api/user/${data}`, data);
};

export const useUpdateUser = () => {
    return useMutation({ mutationFn: updateUser });
};
