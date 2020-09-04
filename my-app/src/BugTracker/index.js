import React, { useState, useEffect } from 'react';
import './index.css';
import { useSelector, useDispatch } from 'react-redux';
import bugActionCreators from './actions'
import { bindActionCreators } from 'redux';

const BugTracker = () => {
    const bugs = useSelector(storeState => storeState.bugsData);
    const dispatch = useDispatch();

    const { addNew, load, toggle } = bindActionCreators(bugActionCreators, dispatch);
    const [newBugName, setNewBugName] = useState('');

    useEffect(() => {
        load();
    },[]);
    return (
        <div>
            <h3>Bug Tracker</h3>
            <hr />
            <section className="stats">
                <span className="closed">1</span>
                <span> / </span>
                <span>2</span>
            </section>
            <section className="sort">
                <label htmlFor="">Order By :</label>
                <select name="" id="">
                    <option value=""></option>
                    <option value=""></option>
                </select>
                <label htmlFor="">Descending ? :</label>
                <input type="checkbox" name="" id="" />
            </section>
            <section className="edit">
                <label htmlFor="">Bug Name :</label>
                <input type="text" onChange={ evt => setNewBugName(evt.target.value)} />
                <input type="button" value="Add New" onClick={() => addNew(newBugName)}/>
            </section>
            <section className="list">
                <ol>
                    { bugs.map(bug => (
                            <li key={bug.id}>
                                <div 
                                    className={'bugname ' + (bug.isClosed ? 'closed' : '')} 
                                    onClick={() => toggle(bug)}>
                                    {bug.name}
                                </div>
                                <div className="datetime">[{bug.createdAt.toString()}]</div>
                                <a href="#">More...</a>
                                <br/>
                                <input type="button" value="Remove" />
                            </li>
                        ))
                    }
                </ol>
                <input type="button" value="Remove Closed" />
            </section>
        </div>
    );
};

export default BugTracker;