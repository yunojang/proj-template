import client from "@/lib/client";

export const getUser = () => {
    return client.get("/api/auth/me").catch(console.log);
};
