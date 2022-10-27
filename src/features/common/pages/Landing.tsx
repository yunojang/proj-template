import { useNavigate } from "react-router-dom";

export const Landing = () => {
  const user = null;

  const navigate = useNavigate();
  const handleStart = () => {
    if (user) {
      navigate("/app");
    } else {
      navigate("/auth/login");
    }
  };

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <div>Landing page</div>
      <button onClick={handleStart}>start</button>
    </div>
  );
};
