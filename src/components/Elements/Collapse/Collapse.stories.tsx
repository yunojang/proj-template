import { Meta, Story } from '@storybook/react';

import { Collapse, CollapseProps } from './Collapse';

const meta: Meta = {
  title: 'Components/Collapse',
  component: Collapse,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<CollapseProps> = (props) => <Collapse {...props}>Collapse</Collapse>;

export const Default = Template.bind({});
Default.args = {};
