// action types

export const ADD = 'ADD';

// action creators

export function addTodo(item) {
  return {
    type: ADD,
    item,
  };
}
