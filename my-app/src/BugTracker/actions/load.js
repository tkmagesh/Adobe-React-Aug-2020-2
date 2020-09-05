/* import axios from 'axios';

function getLocalBugs(){
    return [
        { id : 1, name : 'Local Bug - 1', isClosed : false, createdAt : new Date()},
        { id: 2, name: 'Local Bug - 2', isClosed: false, createdAt: new Date() },
    ];
} */

/* function getRemoteBugs() {
    var p = axios.get('http://localhost:3030/bugs');
    var p2 = p.then(function (response) {
        return response.data;
    });
    return p2;
} */

/* async function getRemoteBugs() {
    const response = await axios.get('http://localhost:3030/bugs');
    return response.data;
}
 */

/* function load(){
    return function(dispatch){
        const p = getRemoteBugs();
        p.then(function(bugs){
            const action = { type: 'INIT_BUGS', payload: bugs };
            dispatch(action);
        })
    }
} */

import bugApi from '../services/bugApi';

//the below is processed by the thunk middleware
/* const load = () => async (dispatch) => {
    const bugs = await bugApi.getAll();
    const action = { type: 'INIT_BUGS', payload: bugs };
    dispatch(action);
} */

//the below is processed by promiseActionMiddleware
async function load(){
    const bugs = await bugApi.getAll();
    const action = { type: 'INIT_BUGS', payload: bugs };
    return action;
}

export default load;