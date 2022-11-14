import { ReactNode } from "react";

interface UserLayoutProps {
    children: ReactNode;
}

const UserLayout = ({ children }: UserLayoutProps) => {
    return <div className="p-4">{children}</div>;
};

export default UserLayout;
