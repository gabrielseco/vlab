// @flow strict
export function promiseWithDelay<T>(response: T, duration: number) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(response);
    }, duration);
  });
}
