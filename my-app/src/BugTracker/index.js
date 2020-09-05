import React from 'react';
import './index.css';
import { useSelector, useDispatch } from 'react-redux';
import bugActionCreators from './actions'
import { bindActionCreators } from 'redux';
import BugStats from './components/BugStats';
import BugSort from './components/BugSort';
import BugEdit from './components/BugEdit';
import BugList from './components/BugList';

//Container Component (OR) Smart Component
const BugTracker = () => {
    const bugs = useSelector(storeState => storeState.bugsData);
    const dispatch = useDispatch();
    const { addNew, toggle, remove, removeClosed } = bindActionCreators(bugActionCreators, dispatch);
    return (
        <div>
            <h3>Bug Tracker</h3>
            <hr />
            <BugStats bugs={bugs} />
            <BugSort />
            <BugEdit addNew={addNew}/>
            <BugList {...{bugs, toggle, remove, removeClosed}} />
        </div>
    );
};

export default BugTracker;