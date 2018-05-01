import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Login.scss';

import { AuthService } from 'services';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: '',
      password: ''
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.authService = new AuthService();
  }

  async onSubmit(evt) {
    evt.preventDefault();
    // TODO TRY CATCH
    const { token } = await this.authService.signIn(this.state)

    this.authService.setToken(token);

    /* this.router.navigateTo('/home'); */
  }

  onChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  render() {
    return (
      <div className={styles.loginContainer}>
        <div className={styles.loginHeader}>
          <h1>Login</h1>
        </div>
        <form className={styles.loginForm} onSubmit={this.onSubmit}>
          <label htmlFor="login">
            Usuario
          </label>
          <input type="text" name="login" value={this.state.login} onChange={this.onChange} />
          <label htmlFor="password">
            Contraseña
          </label>
          <input type="password" name="password" value={this.state.password} onChange={this.onChange}/>
          <button type="submit">Log In</button>
        </form>
      </div>
    );
  }
}

Login.propTypes = {};

export default Login;
