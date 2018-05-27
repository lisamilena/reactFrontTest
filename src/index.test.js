import React from 'react';
import ReactDOM from 'react-dom';

import Signup from './pages/signup';
import Guest from './pages/guest';
import Agency from './pages/agency';
import Company from './pages/company';
import NoMatch from './pages/noMatch';
import Signin from './pages/signin';

describe('Renders pages', () => {
  it('Signup without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Signup />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('NoMatch without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<NoMatch />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('Signin without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Signin />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
