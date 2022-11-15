import React, { FC } from "react";

import { Button } from "@chakra-ui/react";

export interface ChatStartProps {}

export const ChatStart: FC<ChatStartProps> = () => {
    return (
        <Button size="lg" colorScheme="green">
            채팅 시작
        </Button>
    );
};
