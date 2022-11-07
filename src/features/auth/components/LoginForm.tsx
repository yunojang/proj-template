import { useState, useCallback } from "react";
import { Link } from "react-router-dom";

export interface LoginFormProps {
    onSuccess(): void;
}

export const INVALIDE_MSG = {
    email: "Invalid email, please include '@' sign",
    password: "Invalid password, password is longer than 5 characters",
};

const LoginForm: React.FC<LoginFormProps> = ({ onSuccess }) => {
    // temp validate
    const [email, setEmail] = useState("");
    const validateEmail = useCallback(
        (email: string) => email.includes("@"),
        []
    );

    const [alert, setAlert] = useState<string | null>(null);
    const hideAlert = () => setAlert(null);

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
                <input aria-label="password" />
            </div>
            <button
                className="w-full bg-blue-400 text-white"
                onClick={() => {
                    if (!validateEmail(email)) {
                        setAlert(INVALIDE_MSG.email);
                        return;
                    }
                    onSuccess();
                }}
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
