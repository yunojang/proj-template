import { Meta, Story } from "@storybook/react";

import { UserPopover, UserPopoverProps } from "./UserPopover";

const meta: Meta = {
    title: "Users/UserAvarta",
    component: UserPopover,
    parameters: {
        controls: { expanded: true },
    },
};

export default meta;

const Template: Story<UserPopoverProps> = (props) => (
    <UserPopover {...props}>UserAvarta</UserPopover>
);

export const Default = Template.bind({});
Default.args = {};
