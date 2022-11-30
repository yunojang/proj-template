import React, { FC, FormEventHandler, useRef, useState } from "react";

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
    onSuccess?(): void;
}

export const SettingDrawer: FC<SettingDrawerProps> = ({
    isOpen,
    open,
    close,
    onSuccess = () => {},
}) => {
    const ref = useRef(null);
    const { user } = useAuth();
    const [startChatType, setChatType] = useState<StartChatType>(
        user?.startChatType ?? StartChatType.Text
    );

    const updateUserMutation = useUpdateUser();

    if (!user) {
        throw new Error("Unauth access");
    }

    const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        updateUserMutation.mutateAsync({ ...user, startChatType });
    };

    return (
        <>
            <Button
                ref={ref}
                variant="ghost"
                size="lg"
                onClick={open}
                colorScheme="green"
            >
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
                        <form
                            className="flex flex-col gap-2 h-full pb-12"
                            onSubmit={onSubmit}
                        >
                            <Text className="my-2">
                                어떤 채팅부터 시작할까요
                            </Text>
                            <RadioGroup
                                name="start-chattype"
                                options={[
                                    { id: StartChatType.Text, text: "텍스트" },
                                    { id: StartChatType.Voice, text: "음성" },
                                    { id: StartChatType.Video, text: "화상" },
                                ]}
                                defaultValue={startChatType}
                                onChange={(type) =>
                                    setChatType(type as StartChatType)
                                }
                            />

                            <div className="mt-auto ml-auto flex gap-2">
                                <Button
                                    colorScheme="green"
                                    size="lg"
                                    type="submit"
                                    isLoading={updateUserMutation.isLoading}
                                >
                                    저장
                                </Button>
                            </div>
                        </form>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    );
};
