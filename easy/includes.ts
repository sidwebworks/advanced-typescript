/**
 * Implement the JavaScript Array.includes function in the type system.
 * A type takes the two arguments.
 * The output should be a boolean true or false.
 */

type Equal<A, B> = A extends B ? true : false;

export type Includes<T extends readonly unknown[], K> = T extends [
  infer A,
  ...infer B
]
  ? Equal<A, K> extends true
    ? true
    : Includes<B, K>
  : false;

type isPillarMen = Includes<["Kars", "Esidisi", "Wamuu", "Santana"], "Sid">; // expected to be `false`
