import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import spinnerReducer from '../reducers/spinnerReducer';
import bugsReducer from '../reducers/bugsReducer';

const rootReducer = combineReducers({
    spinnerData : spinnerReducer,
    bugsData : bugsReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;