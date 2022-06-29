/**
 * Implement the generic version of Array.push
 */

export type Push<T extends readonly any[], K extends unknown> = [...T, K];

type Result = Push<[1, 2], "3">; // [1, 2, '3']
