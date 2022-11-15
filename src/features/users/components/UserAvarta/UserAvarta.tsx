import React, { FC } from "react";

import { Avatar } from "@chakra-ui/react";

export interface UserAvartaProps {}

export const UserAvarta: FC<UserAvartaProps> = () => {
    return <Avatar size="md" className="cursor-pointer" />;
};
