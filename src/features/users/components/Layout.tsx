import { ReactNode } from "react";

interface UserLayoutProps {
    children: ReactNode;
}

const UserLayout = ({ children }: UserLayoutProps) => {
    return <div className="h-screen flex flex-col">{children}</div>;
};

export default UserLayout;
