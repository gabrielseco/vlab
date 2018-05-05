// @flow strict
export class LocalStorageService {
  set(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  get(name: string): ?string {
    const temporalValue = localStorage.getItem(name);
    return temporalValue !== null && temporalValue !== 'undefined'
      ? temporalValue
      : '';
  }
}
