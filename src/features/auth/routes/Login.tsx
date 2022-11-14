import { useNavigate } from "react-router-dom";
import { AuthLayout, LoginForm } from "../components";

const Login = () => {
    const navigate = useNavigate();

    const login = () => {
        navigate("/");
    };

    return (
        <AuthLayout title="LOGIN">
            <LoginForm onSuccess={login} />
        </AuthLayout>
    );
};

export default Login;
