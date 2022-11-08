import { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../api";

export interface LoginFormProps {
    onSuccess(): void;
}

export const INVALIDE_MSG = {
    email: "Invalid email, please include '@' sign",
    password: "Invalid password, password is longer than 5 characters",
};

const LoginForm: React.FC<LoginFormProps> = ({ onSuccess }) => {
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
        <div
            className="flex flex-col gap-2 justify-center"
            onChange={() => hideAlert()}
        >
            <div>
                <span>email</span>
                <input
                    aria-label="email"
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div>
                <span>pwd</span>
                <input
                    aria-label="password"
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <button
                className="w-full bg-blue-400 text-white"
                onClick={onSubmit}
            >
                Login
            </button>
            {alert && <div role="alert">{alert}</div>}
            <Link to="/auth/register" className="text-right">
                Register
            </Link>
        </div>
    );
};

export default LoginForm;
