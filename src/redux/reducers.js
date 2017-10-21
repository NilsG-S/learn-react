import {
  ADD,
} from './actions.js';

function todo(state = [], action) {
  switch (action.type) {
    case ADD:
      return [...state, action.item];
    default:
      return state;
  }
}

function learnReact(state = {}, action) {
  return {
    todo: todo(state.todo, action),
  };
}

export default learnReact;
