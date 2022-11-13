interface AuthLayoutProps {
    children: React.ReactNode;
    title: string;
}

export const AuthLayout: React.FC<AuthLayoutProps> = ({ children, title }) => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center">
            <h2 className="my-5 text-xl">{title}</h2>
            <div>{children}</div>
        </div>
    );
};
