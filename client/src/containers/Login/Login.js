import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './Login.scss';
import type { LoginForm } from './../../flow/login';

import { AuthService } from 'services/Auth';

class Login extends Component<{}, LoginForm> {
  authService: AuthService;
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.authService = new AuthService();
  }

  async onSubmit(evt) {
    evt.preventDefault();

    // TODO TRY CATCH
    const response = await this.authService.signIn(this.state);

    this.authService.setToken(response.data.token);

    this.props.history.push('/home');
  }

  onChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.subContainer}>
          <div className={styles.loginHeader}>
            <h1>Login</h1>
          </div>
          <form className={styles.loginForm} onSubmit={this.onSubmit}>
            <input
              type="text"
              name="username"
              placeholder="Usuario"
              value={this.state.username}
              onChange={this.onChange}
              className="input__username_js"
            />
            <input
              type="password"
              name="password"
              placeholder="Contraseña"
              value={this.state.password}
              onChange={this.onChange}
            />
            <button type="submit">Log In</button>
          </form>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.object
};

export { Login };

export default withRouter(Login);
