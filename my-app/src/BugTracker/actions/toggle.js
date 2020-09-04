import bugApi from '../services/bugApi'

const toggle = (bugToToggle) => async dispatch => {
    const toggledBugData = { ...bugToToggle, isClosed : !bugToToggle.isClosed };
    const toggledBug = await bugApi.save(toggledBugData);
    const action = { type : 'REPLACE_BUG', payload : toggledBug };
    dispatch(action);
}

export default toggle;