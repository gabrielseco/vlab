import { HttpClient } from 'adapters';
import { BASE_URL } from 'config';
import { LocalStorageService } from './../services';

export class AuthService {
  constructor() {
    this.httpClient = new HttpClient(BASE_URL);
    this.localStorage = new LocalStorageService();
  }

  async signIn(form) {
    return this.httpClient.post('/auth/login', form);
  }

  getToken() {
    return this.localStorage.get('token');
  }

  setToken(token) {
    this.localStorage.set('token', token);
  }
}
