import { LocalStorageService } from './LocalStorage';

describe('LocalStorage Service', () => {
  const localStorage = new LocalStorageService();
  it('should set an item in the localStorage and get it', () => {
    const key = 'test';
    const value = '1';
    localStorage.set(key, value);
    expect(localStorage.get(key)).toBe(value);
  });

  it('should get an empty string if the value is null', () => {
    const key = 'nullValue';
    expect(localStorage.get(key)).toBe('');
  });
});
