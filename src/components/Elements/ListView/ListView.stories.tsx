import { Meta, Story } from '@storybook/react';

import { ListView, ListViewProps } from './ListView';

const meta: Meta = {
  title: 'Components/ListView',
  component: ListView,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<ListViewProps> = (props) => <ListView {...props}>ListView</ListView>;

export const Default = Template.bind({});
Default.args = {};
