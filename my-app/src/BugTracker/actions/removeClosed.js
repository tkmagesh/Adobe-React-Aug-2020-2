import bugApi from '../services/bugApi';

//import remove from './remove';

const removeClosed = () => async (dispatch, getState) => {
    const existingBugs = getState().bugsData;
    /* existingBugs
        .filter(bug => bug.isClosed)
        .forEach(closedBug => remove(closedBug)(dispatch)); */
    existingBugs
        .filter(bug => bug.isClosed)
        .forEach(async closedBug => {
            await bugApi.remove(closedBug);
            const action = { type: 'REMOVE_BUG', payload: closedBug };
            dispatch(action);
        });
}

export default removeClosed;