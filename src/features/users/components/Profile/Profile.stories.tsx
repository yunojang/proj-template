import { Meta, Story } from '@storybook/react';

import { Profile, ProfileProps } from './Profile';

const meta: Meta = {
  title: 'Users/Profile',
  component: Profile,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<ProfileProps> = (props) => <Profile {...props}>Profile</Profile>;

export const Default = Template.bind({});
Default.args = {};
