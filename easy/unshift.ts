/**
 * Implement the type version of Array.unshift
 */

export type Unshift<T extends any[], K extends unknown> = [K, ...T];

type Result = Unshift<[1, 2], 0>; // [0, 1, 2,]
