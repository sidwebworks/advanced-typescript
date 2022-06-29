/**
 * Implement the built-in Exclude<T, U>
 */

export type CustomExclude<T, K> = T extends K ? never : T;

type All = "a" | "b" | "c";

type result = CustomExclude<All, "a">;
