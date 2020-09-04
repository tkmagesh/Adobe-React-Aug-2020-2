import React, {useState} from 'react';
import { bindActionCreators } from 'redux';
import spinnerActionCreators from './actions';

const Spinner = (props) => {
    const { value, dispatch } = props;
    const [delta, setDelta] = useState(0);
    const { up, down } = bindActionCreators(spinnerActionCreators, dispatch);

    return (
        <div>
            <h1>Spinner</h1>
            <hr />
            <label>Delta : </label>
            <input type="number" value={delta} onChange={evt => setDelta(evt.target.valueAsNumber || 0)} />
            <br />
            <input type="button" value="DOWN" onClick={() => down(delta)} />
            <span> [ {value} ] </span>
            <input type="button" value="UP" onClick={() => up(delta)} />
        </div>
    )
}

export default Spinner;