import { useMutation } from "react-query";
import { User } from "../types";
import client from "@/lib/client";
import { useToast } from "@chakra-ui/react";

export const updateUser = (data: User) => {
    return client.put(`/api/user/${data.id}`, data);
};

export const useUpdateUser = () => {
    const toast = useToast();

    return useMutation({
        mutationFn: updateUser,
        onSuccess() {
            toast({
                status: "success",
                title: "유저 업데이트 완료",
                duration: 1000,
            });
        },
        onError() {
            toast({
                status: "error",
                title: "네트워크 에러",
                duration: 1000,
            });
        },
    });
};
