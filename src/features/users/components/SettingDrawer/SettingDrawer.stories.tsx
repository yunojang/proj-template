import { Meta, Story } from '@storybook/react';

import { SettingDrawer, SettingDrawerProps } from './SettingDrawer';

const meta: Meta = {
  title: 'Users/SettingDrawer',
  component: SettingDrawer,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<SettingDrawerProps> = (props) => <SettingDrawer {...props}>SettingDrawer</SettingDrawer>;

export const Default = Template.bind({});
Default.args = {};
