import React, { useState } from 'react';

const BugEdit = ({ addNew }) => {
    const [newBugName, setNewBugName] = useState('');
    return (
        <section className="edit">
            <label htmlFor="">Bug Name :</label>
            <input type="text" onChange={evt => setNewBugName(evt.target.value)} />
            <label>Project :</label>
            <select>
                <option>Project - 1</option>
                <option>Project - 2</option>
            </select>
            <input type="button" value="Add New" onClick={() => addNew(newBugName)} />
        </section>
    )
}

export default BugEdit;