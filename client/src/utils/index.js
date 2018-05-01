export function promiseWithDelay(response, duration) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(response);
    }, duration)
  });
}