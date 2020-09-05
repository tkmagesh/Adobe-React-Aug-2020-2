import React from 'react';

const BugItem = ({ bug, toggle, remove }) => (
    <li>
        <div
            className={'bugname ' + (bug.isClosed ? 'closed' : '')}
            onClick={() => toggle(bug)}>
            {bug.name}
        </div>
        <div className="datetime">[{bug.createdAt.toString()}]</div>
        <a>More...</a>
        <br />
        <input type="button" value="Remove" onClick={() => remove(bug)} />
    </li>
)

export default BugItem;