interface LoginFormProps {
  onSuccess(): void;
}

const LoginForm: React.FC<LoginFormProps> = () => {
  return (
    <div className="flex flex-col gap-2 justify-center">
      <div>
        <span>email</span>
        <input />
      </div>
      <div>
        <span>pwd</span>
        <input />
      </div>
      <button className="w-full">Login</button>
    </div>
  );
};

export default LoginForm;
