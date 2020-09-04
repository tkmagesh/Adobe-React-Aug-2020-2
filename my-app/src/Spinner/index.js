import React, {useState} from 'react';
import { bindActionCreators } from 'redux';
import spinnerActionCreators from './actions';
import { useSelector, useDispatch } from 'react-redux';

const Spinner = () => {
    const value = useSelector(storeState => storeState.spinnerData);
    const dispatch = useDispatch();
    const [delta, setDelta] = useState(0);
    const { up, down } = bindActionCreators(spinnerActionCreators, dispatch);

    return (
        <div>
            <h3>Spinner</h3>
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