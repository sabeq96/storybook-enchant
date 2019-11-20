import { action } from '@storybook/addon-actions';
import { text } from "@storybook/addon-knobs";

import Component from '.';

const stories = () => ({
  default: {
    label: text('label', 'Simple input'),
    value: text('value', 'Default text input value'),
    click: action('click'),
  },
});

const info = 'This is also my own component story info';

export { stories, Component, info };