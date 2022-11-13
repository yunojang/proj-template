import { useAuth } from "@/features/auth/api";
import { useNavigate } from "react-router-dom";
import { Button } from "@chakra-ui/react";

export const Landing = () => {
    const { user, logout } = useAuth();

    const navigate = useNavigate();
    const handleStart = () => {
        if (user) {
            navigate("/user");
        } else {
            navigate("/auth/login");
        }
    };

    return (
        <div className="w-screen h-screen flex flex-col items-center justify-center gap-4">
            <h3 className="text-2xl">Welcome, to Landing</h3>

            <div className="flex gap-2">
                <Button
                    onClick={handleStart}
                    colorScheme="blue"
                    variant="outline"
                    size="md"
                >
                    START
                </Button>
                {user ? (
                    <Button onClick={logout} size="md" colorScheme="blackAlpha">
                        Logout
                    </Button>
                ) : null}
            </div>
        </div>
    );
};
