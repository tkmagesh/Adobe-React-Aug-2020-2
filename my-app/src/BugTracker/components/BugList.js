import React from 'react';
import BugItem from './BugItem';

const BugList = ({ bugs, toggle, remove, removeClosed }) => {
    return (
        <section className="list">
            <ol>
                {bugs.map(bug => (<BugItem key={bug.id} {...{ bug, toggle, remove }} />))}
            </ol>
            <input type="button" value="Remove Closed" onClick={removeClosed} />
        </section>
    )
}

export default BugList;