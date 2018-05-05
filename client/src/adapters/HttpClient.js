// @flow strict
import axios from 'axios';

export class HttpClient {
  BASE_URL: string;
  constructor(BASE_URL: string) {
    this.BASE_URL = BASE_URL;
  }

  async get(URL: string) {
    return axios.get(this.BASE_URL + URL);
  }

  async post<T>(URL: string, data: T) {
    return axios.post(this.BASE_URL + URL, data);
  }
}
