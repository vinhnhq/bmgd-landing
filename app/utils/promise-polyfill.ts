interface PromiseWithResolvers<T> {
  promise: Promise<T>;
  resolve: (value: T | PromiseLike<T>) => void;
  reject: (reason?: Error | unknown) => void;
}

if (!Promise.withResolvers) {
  Promise.withResolvers = <T>(): PromiseWithResolvers<T> => {
    let resolve!: (value: T | PromiseLike<T>) => void;
    let reject!: (reason?: Error | unknown) => void;
    const promise = new Promise<T>((res, rej) => {
      resolve = res;
      reject = rej;
    });
    return { promise, resolve, reject };
  };
}

export {};
