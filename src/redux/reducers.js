import { OrderedMap } from 'immutable';
import { combineReducers } from 'redux-immutable';

import {
  ADD,
} from './actions.js';

function todo(state = OrderedMap(), action) {
  switch (action.type) {
    case ADD:
      return state.set(action.id, {
        text: action.text,
        completed: false,
      });
    default:
      return state;
  }
}

export default combineReducers({
  todo,
});
