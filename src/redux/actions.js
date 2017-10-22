// action types

export const ADD = 'ADD';
export const DELETE = 'DELETE';
export const TOGGLE = 'TOGGLE';

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

export function deleteTodo(id) {
  return {
    type: DELETE,
    id,
  };
}

export function toggleTodo(id) {
  return {
    type: TOGGLE,
    id,
  };
}
