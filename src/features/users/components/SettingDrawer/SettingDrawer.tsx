import React, { FC, useRef } from "react";

import { StartChatType } from "../../types";
import { useUpdateUser } from "../../api/updateUser";

import {
    Button,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerHeader,
    DrawerOverlay,
    Text,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { RadioGroup } from "@/components/Elements/RadioGroup";
import { useAuth } from "@/features/auth/api";

export interface SettingDrawerProps {
    isOpen: boolean;
    open(): void;
    close(): void;
}

export const SettingDrawer: FC<SettingDrawerProps> = ({
    close,
    isOpen,
    open,
}) => {
    const { user } = useAuth();
    const { mutateAsync } = useUpdateUser();
    const ref = useRef(null);

    return (
        <>
            <Button ref={ref} variant="link" size="lg" onClick={open}>
                <ChevronRightIcon />
            </Button>
            <Drawer
                isOpen={isOpen}
                placement="left"
                onClose={close}
                finalFocusRef={ref}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>설정</DrawerHeader>
                    <DrawerBody>
                        <Text className="mb-4">어떤 채팅부터 시작할까요</Text>
                        <RadioGroup
                            name="start-chattype"
                            options={[
                                { id: StartChatType.Text, text: "텍스트" },
                                { id: StartChatType.Voice, text: "음성" },
                                { id: StartChatType.Video, text: "화상" },
                            ]}
                            defaultValue={
                                user?.startChatType ?? StartChatType.Text
                            }
                            onChange={(key: StartChatType) => {
                                if (!user) {
                                    // error
                                    return;
                                }

                                const newUser = {
                                    ...user,
                                    startChatType: key,
                                };

                                // mutateAsync(newUser);
                            }}
                        />
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    );
};
