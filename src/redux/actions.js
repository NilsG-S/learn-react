// action types

export const ADD = 'ADD';

// action creators

let nextTodoId = -1;
export function addTodo(text) {
  nextTodoId += 1;
  return {
    type: ADD,
    id: nextTodoId,
    text,
  };
}
