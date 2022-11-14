import { Meta, Story } from "@storybook/react";

import { LoginForm, LoginFormProps } from "./LoginForm";

const meta: Meta = {
    title: "Auth/LoginForm",
    component: LoginForm,
    parameters: {
        controls: { expanded: true },
    },
};

export default meta;

const Template: Story<LoginFormProps> = (props) => <LoginForm {...props} />;

export const Default = Template.bind({});
Default.args = {};
