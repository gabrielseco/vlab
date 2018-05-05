// @flow
import { promiseWithDelay } from './../utils';

export class FakeHttpClient {
  BASE_URL: string;
  constructor(BASE_URL: string) {
    this.BASE_URL = BASE_URL;
  }

  async get<T>(URL: string, response: T, duration: number = 500) {
    return promiseWithDelay(response, duration);
  }

  async post<T, U>(URL: string, data: T, response: U, duration: number = 500) {
    return promiseWithDelay(response, duration);
  }
}
