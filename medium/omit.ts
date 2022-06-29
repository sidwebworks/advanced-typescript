/**
 * Implement the built-in Omit<T, K> generic without using it.
 * Constructs a type by picking all properties from T and then removing K
 */

type MyOmit<T extends unknown, K extends keyof T> = {
  [O in keyof T as O extends K ? never : O]: T[O];
};

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = MyOmit<Todo, "title" | "description">;

const todo: TodoPreview = {
  completed: false,
};
