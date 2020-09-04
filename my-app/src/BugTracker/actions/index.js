//TO BE FIXED
let currentBugId = 0;

const bugActions = {
    addNew(newBugName){
        const newBug = {
            id : ++currentBugId,
            name : newBugName,
            isClosed : false,
            createdAt : new Date()
        };

        const action = { type : 'ADD_NEW_BUG', payload : newBug };
        return action;
    }
}

export default bugActions;