import React from 'react';
import { configure } from '@storybook/react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text, number, boolean } from "@storybook/addon-knobs";
import { withA11y } from '@storybook/addon-a11y';

import mapObject from 'map-obj';
import _forEach from 'lodash/forEach';
import _isNumber from 'lodash/isNumber';
import _isBoolean from 'lodash/isBoolean';
import _isString from 'lodash/isString';

import { viewports, backgrounds } from './defaults';

function loadStories () {
  const context = require.context('../src', true, /\.stories\.js$/);

  context.keys().forEach(key => {
    const { Component, stories, info } = context(key);
    const storyModuleName = key.replace('.stories.js', '').replace('./', '');

    const storybookStory = storiesOf(storyModuleName, module)
    .addParameters({
      backgrounds,
      viewport: {
        viewports: viewports,
        defaultViewport: 'full',
      },
    });
    storybookStory.addDecorator(withInfo);
    storybookStory.addDecorator(withA11y);
    storybookStory.addDecorator(withKnobs);

    const defaultStories = stories().default; 
    if (defaultStories) {
      storybookStory.add('weakStory', () => {
        const fakeStories = makeFakeStories(defaultStories, true);

        return <Component {...fakeStories} />
      })

      storybookStory.add('strongStory', () => {
        const fakeStories = makeFakeStories(defaultStories, false);

        return <Component {...fakeStories} />
      })
    }

    _forEach(stories(), (_, storyCaseName) => {
      storybookStory.add(storyCaseName, () => {
        // knobs functions need to be called in "add story" callback scope -> stories()[name]
        const props = stories()[storyCaseName];
        
        return <Component {...props} />
      }, {
        info: { text: info }
      })
    })    
  });
}

function makeFakeStories(baseStory, weak) {
  return mapObject(baseStory, (key, value, source) => {
    const tempStr = weak ? '': 'totaly random text'.repeat(10);
    const tempNum = weak ? ~~(Math.random()*3) : ~~(Math.random()*30);
    const tempBool = weak ? false : true;

    console.log(key)

    if (_isString(value)) {
      return [key, tempStr];
    } else if(_isNumber(value)) {
      return [key, tempNum];
    } else if (_isBoolean(value)) {
      return [key, tempBool];
    }

    return [key, value]
  }, { deep: true });
}

configure(loadStories, module);
