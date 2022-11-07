import { useNavigate } from "react-router-dom";
import { AuthLayout, RegisterForm } from "../components";

const Register = () => {
  const navigate = useNavigate();
  const register = () => {
    navigate("/login");
  };

  return (
    <AuthLayout>
      <RegisterForm onSuccess={register} />
    </AuthLayout>
  );
};

export default Register;
