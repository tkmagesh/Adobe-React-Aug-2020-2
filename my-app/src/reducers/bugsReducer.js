const initialState = [
    /* { id : 1, name : 'Server communication failure', isClosed : false, createdAt : new Date() },
    { id: 2, name: 'Data integrity failure', isClosed: true, createdAt: new Date() },
    { id: 3, name: 'Application not responding', isClosed: false, createdAt: new Date() }, */
];
function bugsReducer(currentState = initialState, action){
    if (action.type === 'ADD_NEW_BUG'){
        const newState = [...currentState, action.payload];
        return newState;
    }
    return currentState;
}

export default bugsReducer;