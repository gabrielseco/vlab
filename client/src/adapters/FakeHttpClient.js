import { promiseWithDelay } from './../utils';

export class FakeHttpClient {
  constructor(BASE_URL) {
    this.BASE_URL = BASE_URL;
  }

  async get(URL, response, duration = 500) {
    return promiseWithDelay(response, duration);
  }

  async post(URL, data, response, duration = 500) {
    return promiseWithDelay(response, duration);
  }
}