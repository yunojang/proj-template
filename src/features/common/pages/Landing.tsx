import { useAuth } from "@/features/auth/api";
import { useNavigate } from "react-router-dom";

export const Landing = () => {
    const { user } = useAuth();

    const navigate = useNavigate();
    const handleStart = () => {
        if (user) {
            navigate("/user");
        } else {
            navigate("/auth/login");
        }
    };

    return (
        <div className="w-screen h-screen flex flex-col items-center justify-center">
            <div>Landing page</div>
            <button onClick={handleStart}>start</button>
        </div>
    );
};
