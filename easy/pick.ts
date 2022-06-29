/**
 * Implement the built-in Pick<T, K> generic without using it.
 * Constructs a type by picking the set of properties K from T
 */

export type CustomPick<T, R extends keyof T> = { [key in R]: T[R] };

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = CustomPick<Todo, "title" | "completed">;

const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
};
