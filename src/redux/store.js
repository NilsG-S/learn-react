import { createStore } from 'redux';

import learnReact from 'redux/reducers.js';

// store holds the redux store that allows app-wide state to be shared
const store = createStore(learnReact);

export default store;
