import { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../api";

import { Button, Input, Text } from "@chakra-ui/react";

export interface LoginFormProps {
    onSuccess(): void;
}

export const INVALIDE_MSG = {
    email: "Invalid email, please include '@' sign",
    password: "Invalid password, password is longer than 5 characters",
};

export const LoginForm: React.FC<LoginFormProps> = ({ onSuccess }) => {
    const { login } = useAuth();

    // temp validate
    const [email, setEmail] = useState("");
    const validateEmail = useCallback(
        (email: string) => email.includes("@"),
        []
    );
    const [password, setPassword] = useState("");

    const [alert, setAlert] = useState<string | null>(null);
    const hideAlert = () => setAlert(null);

    const onSubmit = async () => {
        if (!validateEmail(email)) {
            setAlert(INVALIDE_MSG.email);
            return;
        }

        const user = await login({ email, password });

        if (user) {
            onSuccess();
        }
    };

    return (
        <>
            <div
                className="flex flex-col gap-2 justify-center"
                onChange={() => hideAlert()}
            >
                <div>
                    <Text>Email</Text>
                    <Input
                        aria-label="email"
                        onChange={(e) => setEmail(e.target.value)}
                        size="sm"
                        width={280}
                    />
                </div>
                <div>
                    <Text>Password</Text>
                    <Input
                        aria-label="password"
                        size="sm"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <Button
                    className="w-full"
                    colorScheme="blue"
                    onClick={onSubmit}
                >
                    Login
                </Button>
            </div>
            {alert && <div role="alert">{alert}</div>}
            <Link to="/auth/register" className="underline">
                Register
            </Link>
        </>
    );
};
