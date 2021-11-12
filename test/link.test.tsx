import React from 'react';
import * as ReactDOM from 'react-dom';
import { Default as Link } from '../stories/Link.stories';

describe('Link Tests', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Link />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
