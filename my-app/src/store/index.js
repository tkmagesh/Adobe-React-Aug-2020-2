import { createStore, combineReducers } from 'redux';

import spinnerReducer from '../reducers/spinnerReducer';
import bugsReducer from '../reducers/bugsReducer';

const rootReducer = combineReducers({
    spinnerData : spinnerReducer,
    bugsData : bugsReducer
});

const store = createStore(rootReducer);

console.log(store.getState());
export default store;