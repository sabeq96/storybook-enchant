import { action } from '@storybook/addon-actions';
import { text, object, boolean, number, array } from "@storybook/addon-knobs";

import Component from '.';

const stories = () => ({
  default: {
    text: text('text', 'Random text'),
    number: number('number', 22),
    boolean: boolean('boolean', false),
    array: array('array', ['asd']),
    nested: object('nested', { name: 'Dawid', age: 23 }),
    list: Array(number('listLen', 9)).fill(object('listObject', { fruit: 'Banana', calories: 1 })),
    click: action('click'),
  },
});

const info = 'Random component info';

export { stories, Component, info };