/**
 * Implement the built-in Parameters generic without using it.
 */

export type CustomParameters<T extends (...args: any[]) => any> = T extends (
  ...args: infer P
) => unknown
  ? P
  : never;

type Fn = (a: string, b: number, c: object) => string;

type result = CustomParameters<Fn>;
