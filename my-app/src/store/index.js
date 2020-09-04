import { createStore } from 'redux';

import spinnerReducer from '../reducers/spinnerReducer';

var store = createStore(spinnerReducer);

export default store;