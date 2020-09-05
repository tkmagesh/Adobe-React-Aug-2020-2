import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import spinnerReducer from '../reducers/spinnerReducer';
import bugsReducer from '../reducers/bugsReducer';

const rootReducer = combineReducers({
    spinnerData : spinnerReducer,
    bugsData : bugsReducer
});

function loggerMiddleware(store){
    return function(next){
        return function(action){
            console.group(action.type);
            console.group('Before..');
            console.log(store.getState());
            console.groupEnd();
            console.log(action);
            next(action);
            console.group('After..');
            console.log(store.getState());
            console.groupEnd();
            console.groupEnd();
        }
    }
}

/* function asyncMiddleware(store){
    return function(next){
        return function(action){
            if (typeof action === 'function'){
                action(store.dispatch, store.getState);
            } else {
                next(action);
            }
        }
    }
} */

const asyncMiddleware = ({dispatch, getState}) => next => {
    console.log(next);
    return action => {
        if (typeof action === 'function'){
            return action(dispatch, getState);
        }
        return next(action);
    }
}

const store = createStore(rootReducer, applyMiddleware(logger, asyncMiddleware));

export default store;