import { Suspense } from "react";
import useDisclosure from "@/hooks/useDisclosure";

import UserLayout from "../components/Layout";
import { Greeting } from "../components/Greeting";
import { UserPopover } from "../components/UserPopover";
import { ChatStart } from "../components/ChatStart";
import { SettingDrawer } from "../components/SettingDrawer";
import { Spinner } from "@chakra-ui/react";

const Dashboard = () => {
    const { close, isOpen, open } = useDisclosure(false);

    return (
        <Suspense>
            <UserLayout>
                <header className="flex justify-between p-8">
                    <Greeting />
                    <UserPopover onSetting={open} />
                </header>

                <main className="flex-1 bg-gray-100 rounded-md m-4 flex flex-col p-8">
                    <div className="absolute top-1/2 left-2">
                        <Suspense fallback={<Spinner colorScheme="gray" />}>
                            <SettingDrawer
                                isOpen={isOpen}
                                open={open}
                                close={close}
                            />
                        </Suspense>
                    </div>
                    <div className="flex-1 flex justify-end items-end">
                        <ChatStart />
                    </div>
                </main>
            </UserLayout>
        </Suspense>
    );
};

export default Dashboard;
