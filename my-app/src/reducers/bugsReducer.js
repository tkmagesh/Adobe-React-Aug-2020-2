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
    if (action.type === 'INIT_BUGS'){
        return action.payload;
    }
    if (action.type === 'REPLACE_BUG'){
        const updatedBug = action.payload;
        const newState = currentState.map(bug => bug.id === updatedBug.id ? updatedBug : bug );
        return newState;
    }
    if (action.type === 'REMOVE_BUG'){
        const bugToRemove = action.payload;
        const newState = currentState.filter(bug => bug.id !== bugToRemove.id);
        return newState;
    }
    return currentState;
}

export default bugsReducer;