import bugApi from '../services/bugApi';

const addNew = (newBugName) => async dispatch => {
    const newBugData = {
        id: 0,
        name: newBugName,
        isClosed: false,
        createdAt: new Date()
    };
    const newBug = await bugApi.save(newBugData);
    const action = { type: 'ADD_NEW_BUG', payload: newBug };
    dispatch(action);
}
export default addNew;