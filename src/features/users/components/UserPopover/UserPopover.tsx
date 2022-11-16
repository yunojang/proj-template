import React, { FC } from "react";
import { useAuth } from "@/features/auth/api";

import {
    Avatar,
    Popover,
    PopoverBody,
    PopoverCloseButton,
    PopoverContent,
    PopoverHeader,
    PopoverTrigger,
} from "@chakra-ui/react";
import { SettingsIcon } from "@chakra-ui/icons";
import { Menu } from "@/components/Elements/Menu";

export interface UserPopoverProps {}

export const UserPopover: FC<UserPopoverProps> = () => {
    const { logout, user } = useAuth();

    return (
        <>
            <Popover>
                <PopoverTrigger>
                    <Avatar size="md" className="cursor-pointer" />
                </PopoverTrigger>
                <PopoverContent className="w-20">
                    <PopoverCloseButton></PopoverCloseButton>
                    {user ? (
                        <PopoverHeader>{user.email}님</PopoverHeader>
                    ) : null}
                    <PopoverBody>
                        <Menu
                            menu={[
                                {
                                    id: "setting",
                                    label: "설정",
                                    icon: <SettingsIcon />,
                                },
                                {
                                    id: "logout",
                                    label: "로그아웃",
                                    onSelect: () => logout(),
                                },
                            ]}
                        />
                    </PopoverBody>
                </PopoverContent>
            </Popover>
        </>
    );
};
