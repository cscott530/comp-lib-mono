import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Link, LinkProps } from '../src';

const meta: Meta = {
  title: 'Components/Link',
  component: Link,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<LinkProps> = args => <Link {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {
  href:'#',
  text:'Link Text'
};
