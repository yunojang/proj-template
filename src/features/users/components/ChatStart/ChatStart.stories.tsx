import { Meta, Story } from '@storybook/react';

import { ChatStart, ChatStartProps } from './ChatStart';

const meta: Meta = {
  title: 'Users/ChatStart',
  component: ChatStart,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<ChatStartProps> = (props) => <ChatStart {...props}>ChatStart</ChatStart>;

export const Default = Template.bind({});
Default.args = {};
