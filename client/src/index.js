import React from 'react';
import { render } from 'react-dom';

import { BrowserRouter as Router } from 'react-router-dom';
import { App, Login } from './containers';

require('./styles/main.scss');

const app = (
  <Router>
    <div>
      <App />
      <Login/>
    </div>
  </Router>
);

render(app, document.getElementById('root'));
