import { AuthService } from './Auth';

describe('Auth', () => {
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
    const login = {
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
