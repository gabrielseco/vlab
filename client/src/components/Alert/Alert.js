import React from 'react';
import PropTypes from 'prop-types';
import applyClasses from 'apply-classes';
import styles from './Alert.scss';

const Alert = ({ children, danger }) => {
  const classes = applyClasses({
    [styles.alert]: true,
    [styles.danger]: danger
  });
  return <div className={classes}>{children}</div>;
};

Alert.propTypes = {
  children: PropTypes.any,
  danger: PropTypes.bool
};

export default Alert;
