import { useNavigate } from "react-router-dom";
import { AuthLayout } from "../components";
import LoginForm from "../components/LoginForm";

export const Login = () => {
  const navigate = useNavigate();
  const login = () => {
    navigate("/");
  };

  return (
    <AuthLayout>
      <LoginForm onSuccess={login} />
    </AuthLayout>
  );
};
