// @flow strict
import type { AxiosPromise } from 'axios';
import type { LoginForm } from '../flow/login';
import { HttpClient } from 'adapters/HttpClient';
import { BASE_URL } from 'config';
import { LocalStorageService } from 'services/LocalStorage';

export class AuthService {
  httpClient: HttpClient;
  localStorage: LocalStorageService;
  constructor() {
    this.httpClient = new HttpClient(BASE_URL);
    this.localStorage = new LocalStorageService();
  }

  async signIn(
    form: LoginForm
  ): AxiosPromise<{ token: string, expiresIn: number }> {
    return this.httpClient.post('/auth/login', form);
  }

  isAuthenticated(): boolean {
    const token = this.getToken();
    return Boolean(token);
  }

  getToken(): ?string {
    return this.localStorage.get('token');
  }

  setToken(token: string) {
    this.localStorage.set('token', token);
  }
}
