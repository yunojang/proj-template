import { Meta, Story } from '@storybook/react';

import { RegisterForm, RegisterFormProps } from './RegisterForm';

const meta: Meta = {
  title: 'Components/RegisterForm',
  component: RegisterForm,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<RegisterFormProps> = (props) => <RegisterForm {...props}>RegisterForm</RegisterForm>;

export const Default = Template.bind({});
Default.args = {};
