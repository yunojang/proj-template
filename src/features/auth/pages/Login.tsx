import { AuthLayout } from "../components";
import LoginForm from "../components/LoginForm";

export const Login = () => {
  const login = () => {
    console.log("login");
  };

  return (
    <AuthLayout>
      <LoginForm onSuccess={login} />
    </AuthLayout>
  );
};
