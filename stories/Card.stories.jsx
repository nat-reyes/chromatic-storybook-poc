import React from 'react';
import { Card } from './Card';

export default {
  title: 'Example/Card',
  component: Card,
  parameters: {
    chromatic: {
      modes: {
        mobile: { viewport: 'small' },
        tablet: { viewport: 'medium' },
        desktop: { viewport: 'large' },
      },
    },
  },
};

const Template = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Card Title',
  description: 'This is a sample card description that will show how the text flows in different viewports.',
  imageUrl: 'https://picsum.photos/800/400',
  category: 'Category',
};

export const WithoutImage = Template.bind({});
WithoutImage.args = {
  title: 'Card Without Image',
  description: 'This card demonstrates how the layout works without an image. The content should still be properly styled across all viewports.',
  category: 'Category',
};

export const LongContent = Template.bind({});
LongContent.args = {
  title: 'Card with Long Content',
  description: 'This card has a longer description to test how text wrapping works in different viewports. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  imageUrl: 'https://picsum.photos/800/400',
  category: 'Category',
}; 