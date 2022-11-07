import { useState, useCallback } from "react";
import { useAuth } from "../../api";

export interface RegisterFormProps {
    onSuccess(): void;
}

export const REGISTER_INVALIDE_MSG = {
    email: "Invalid email, please include '@' sign",
    password: "Invalid password, password is longer than 5 characters",
};

export const RegisterForm: React.FC<RegisterFormProps> = ({ onSuccess }) => {
    const { register } = useAuth();

    // email temp validate
    const [email, setEmail] = useState("");
    const validateEmail = useCallback(
        (email: string) => email.includes("@"),
        []
    );

    const [password, setPassword] = useState("");
    // const validateEmail = useCallback((email: string) => email.includes("@"), []);

    const [alert, setAlert] = useState<string | null>(null);
    const hideAlert = () => setAlert(null);

    const onSubmit = () => {
        if (!validateEmail(email)) {
            setAlert(REGISTER_INVALIDE_MSG.email);
            return;
        }

        register({ email, password });

        onSuccess();
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
                Register
            </button>
            {alert && <div role="alert">{alert}</div>}
        </div>
    );
};
