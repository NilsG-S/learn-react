import { OrderedMap } from 'immutable';
import { combineReducers } from 'redux-immutable';

import {
  ADD,
  DELETE,
  TOGGLE,
} from './actions.js';

function todo(state = OrderedMap(), action) {
  switch (action.type) {
    case ADD:
      return state.set(action.id, {
        text: action.text,
        completed: false,
      });
    case DELETE:
      return state.delete(action.id);
    case TOGGLE: {
      const current = state.get(action.id);

      return state.set(action.id, {
        text: current.text,
        completed: !current.completed,
      });
    }
    default:
      return state;
  }
}

export default combineReducers({
  todo,
});
