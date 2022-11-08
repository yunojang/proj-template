import { useUser } from "../api/getUser";

export const Profile = () => {
    const { data } = useUser();

    return (
        <div>
            <div>{data.email}</div>
        </div>
    );
};
