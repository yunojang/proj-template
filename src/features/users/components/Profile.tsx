import { useUser } from "../api/getUser";

export const Profile = () => {
    const { user } = useUser();

    return (
        <div>
            <div>{user.email}</div>
        </div>
    );
};
