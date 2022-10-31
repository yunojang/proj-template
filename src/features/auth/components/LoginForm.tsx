interface LoginFormProps {
  onSuccess(): void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onSuccess }) => {
  return (
    <div className="flex flex-col gap-2 justify-center">
      <div>
        <span>email</span>
        <input aria-label="email" />
      </div>
      <div>
        <span>pwd</span>
        <input aria-label="password" />
      </div>
      <button className="w-full" onClick={onSuccess}>
        Login
      </button>
    </div>
  );
};

export default LoginForm;
