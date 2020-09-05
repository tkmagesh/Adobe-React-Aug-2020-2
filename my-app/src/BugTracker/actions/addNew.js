import bugApi from '../services/bugApi';

/* const addNew = (newBugName) => async dispatch => {
    const newBugData = {
        id: 0,
        name: newBugName,
        isClosed: false,
        createdAt: new Date()
    };
    const newBug = await bugApi.save(newBugData);
    const action = { type: 'ADD_NEW_BUG', payload: newBug };
    dispatch(action);
} */

/* const addNew = async (newBugName) => {
    const newBugData = {
        id: 0,
        name: newBugName,
        isClosed: false,
        createdAt: new Date()
    };
    const newBug = await bugApi.save(newBugData);
    const action = { type: 'ADD_NEW_BUG', payload: newBug };
    return action;
} */

const addNew = (newBugName) => {
    const newBugData = {
        id: 0,
        name: newBugName,
        isClosed: false,
        createdAt: new Date()
    };
    return bugApi
        .save(newBugData)
        .then(newBug => {
            const action = { type: 'ADD_NEW_BUG', payload: newBug };
            return action;
        });
};

export default addNew;