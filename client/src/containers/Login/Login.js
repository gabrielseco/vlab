import React, { Component } from 'react';
import styles from './Login.scss';

import { AuthService } from 'services';

class Login extends Component {
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
    const { token } = await this.authService.signIn(this.state);

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
      <div className={styles.container}>
        <div className={styles.subContainer}>
          <div className={styles.loginHeader}>
            <h1>Login</h1>
          </div>
          <form className={styles.loginForm} onSubmit={this.onSubmit}>
            <input
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.onChange}
              placeholder="Usuario"
            />
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.onChange}
              placeholder="Contraseña"
            />
            <button type="submit">Log In</button>
          </form>
        </div>
      </div>
    );
  }
}

Login.propTypes = {};

export default Login;
