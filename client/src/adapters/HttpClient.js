import axios from 'axios';

export class HttpClient {
  constructor(BASE_URL) {
    this.BASE_URL = BASE_URL;
  }

  async get(URL) {
    return axios.get(this.BASE_URL + URL);
  }

  async post(URL, data) {
    return axios.post(this.BASE_URL + URL, data);
  }
}