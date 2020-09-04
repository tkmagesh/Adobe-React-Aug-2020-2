import remove from './remove';

const removeClosed = () => async (dispatch, getState) => {
    const existingBugs = getState().bugsData;
    existingBugs
        .filter(bug => bug.isClosed)
        .forEach(closedBug => remove(closedBug)(dispatch));
}

export default removeClosed;