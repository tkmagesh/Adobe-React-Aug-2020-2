import React from 'react';
import './index.css';


const BugTracker = () => (
    <div>
        <h1>Bug Tracker</h1>
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
            <input type="text" name="" id="" />
            <input type="button" value="Add New" />
        </section>
        <section className="list">
            <ol>
                <li>
                    <div className="bugname">[This is bug - 1]</div>
                    <div className="datetime">[CreatedAt]</div>
                    <a href="#">More...</a>
                    <br/>
                    <input type="button" value="Remove" />
                </li>
                <li>
                    <div className="bugname closed">[This is bug - 2]</div>
                    <div className="datetime">[CreatedAt]</div>
                    <a href="#">More...</a>
                    <br />
                    <input type="button" value="Remove" />
                </li>
            </ol>
            <input type="button" value="Remove Closed" />
        </section>
    </div>
)

export default BugTracker;