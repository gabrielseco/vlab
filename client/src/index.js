import React from 'react';
import { render } from 'react-dom';

import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { Login, Home } from './containers';
import { PrivateRoute } from './utils/react-router';

require('./styles/main.scss');

const app = (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Login} />
        <PrivateRoute path="/home" component={Home} />
      </Switch>
    </div>
  </Router>
);

render(app, document.getElementById('root'));
