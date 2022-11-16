import { Meta, Story } from "@storybook/react";

import { Menu, MenuProps } from "./Menu";

const meta: Meta = {
    title: "GlobalElement/Menu",
    component: Menu,
    parameters: {
        controls: { expanded: true },
    },
};

export default meta;

const Template: Story<MenuProps> = (props) => <Menu {...props}>Menu</Menu>;

export const Default = Template.bind({});
Default.args = {};
