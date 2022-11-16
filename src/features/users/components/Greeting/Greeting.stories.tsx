import { Meta, Story } from "@storybook/react";

import { Greeting, GreetingProps } from "./Greeting";

const meta: Meta = {
    title: "Users/Profile",
    component: Greeting,
    parameters: {
        controls: { expanded: true },
    },
};

export default meta;

const Template: Story<GreetingProps> = (props) => (
    <Greeting {...props}>Profile</Greeting>
);

export const Default = Template.bind({});
Default.args = {};
