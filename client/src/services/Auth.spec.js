// @flow strict
import { AuthService } from './Auth';
import type { LoginForm } from 'flow/login';

describe('Auth Service', () => {
  const authService = new AuthService();
  const token = 'SECRET';

  it('should set the token and retrieve it', () => {
    authService.setToken(token);
    expect(authService.getToken()).toBe(token);
  });

  it("should know if it's the user authenticated", () => {
    const isAuthenticated = authService.isAuthenticated();
    expect(isAuthenticated).toBeTruthy();
  });

  it('should post the login form', () => {
    const login: LoginForm = {
      username: 'ggarciaseco',
      password: '1234'
    };
    jest.spyOn(authService.httpClient, 'post');

    authService.signIn(login);

    expect(authService.httpClient.post).toHaveBeenCalledWith(
      '/auth/login',
      login
    );
  });
});
