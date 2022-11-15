import { Meta, Story } from '@storybook/react';

import { UserAvarta, UserAvartaProps } from './UserAvarta';

const meta: Meta = {
  title: 'Users/UserAvarta',
  component: UserAvarta,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<UserAvartaProps> = (props) => <UserAvarta {...props}>UserAvarta</UserAvarta>;

export const Default = Template.bind({});
Default.args = {};
