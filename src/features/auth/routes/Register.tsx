import { useNavigate } from "react-router-dom";
import { AuthLayout, RegisterForm } from "../components";

const Register = () => {
    const navigate = useNavigate();
    const register = () => {
        navigate("/auth/login");
    };

    return (
        <AuthLayout title="Register">
            <RegisterForm onSuccess={register} />
        </AuthLayout>
    );
};

export default Register;
