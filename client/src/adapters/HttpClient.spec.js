// @flow strict
jest.mock('axios');
import axios from 'axios';
import { HttpClient } from './HttpClient';

describe('HttpClient Adapter', () => {
  const BASE_URL = 'http://example.com';
  const httpClient = new HttpClient(BASE_URL);

  it('should call a get request', () => {
    const URL = '/todos';
    const response = Promise.resolve({ data: { test: '12234' } });
    axios.get.mockImplementation(response);
    httpClient.get(URL);
    expect(axios.get).toHaveBeenCalledWith(BASE_URL + URL);
  });

  it('should called a post request', () => {
    const URL = '/todos';
    const BODY = {};
    const response = Promise.resolve();

    axios.post.mockImplementation(response);

    httpClient.post(URL, BODY);

    expect(axios.post).toHaveBeenCalledWith(BASE_URL + URL, BODY);
  });
});
