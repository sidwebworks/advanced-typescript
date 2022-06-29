/**
 * If we have a type which is wrapped type like Promise.
 * How we can get a type which is inside the wrapped type?
 * For example if we have Promise<ExampleType> how to get ExampleType?
 */

export type CustomAwaited<T> = T extends Promise<infer K>
  ? K extends Promise<any>
    ? CustomAwaited<K>
    : K
  : never;

type promise = Promise<string>;

type result = CustomAwaited<promise>;
