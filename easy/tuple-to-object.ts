/**
 * Give an array, transform into an object type
 * and the key/value must in the given array.
 */

export type TupleToObject<T extends readonly any[]> = {
  [O in T[number]]: O;
};

const tuple = ["tesla", "model 3", "model X", "model Y"] as const;

type result = TupleToObject<typeof tuple>;
