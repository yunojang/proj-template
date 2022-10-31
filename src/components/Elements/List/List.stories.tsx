import { Meta, Story } from '@storybook/react';

import { List, ListProps } from './List';

const meta: Meta = {
  title: 'Components/List',
  component: List,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<ListProps> = (props) => <List {...props}>List</List>;

export const Default = Template.bind({});
Default.args = {};
