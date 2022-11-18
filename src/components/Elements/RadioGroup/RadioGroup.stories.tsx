import { Meta, Story } from '@storybook/react';

import { RadioGroup, RadioGroupProps } from './RadioGroup';

const meta: Meta = {
  title: 'GlobalElement/RadioGroup',
  component: RadioGroup,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<RadioGroupProps> = (props) => <RadioGroup {...props}>RadioGroup</RadioGroup>;

export const Default = Template.bind({});
Default.args = {};
