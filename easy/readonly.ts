/**
 * Implement the built-in Readonly<T> generic without using it.
 * Constructs a type with all properties of T set to readonly,
 * meaning the properties of the constructed type cannot be reassigned.
 */

export type CustomReadOnly<T> = {
  readonly [K in keyof T]: T[K];
};

interface Todo {
  title: string;
  description: string;
}

const todo: CustomReadOnly<Todo> = {
  title: "Hey",
  description: "foobar",
};

todo.title = "Hello"; // Error: cannot reassign a readonly property
todo.description = "barFoo"; // Error: cannot reassign a readonly property
