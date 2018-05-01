export class LocalStorageService {
  set(key, value) {
    localStorage.setItem(key, value);
  }

  get(name) {
    return localStorage.get(name);
  }
}