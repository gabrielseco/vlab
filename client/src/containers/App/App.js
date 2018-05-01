import React, { StrictMode } from 'react';
/* import PropTypes from 'prop-types';
import styles from './App.scss'; */

const App = (props) => (
  <StrictMode>
    {props.children}      
  </StrictMode>
);

App.propTypes = {};

export default App;
