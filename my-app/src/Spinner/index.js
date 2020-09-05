import React, {useState} from 'react';
import { bindActionCreators } from 'redux';
import spinnerActionCreators from './actions';
import { useSelector, useDispatch } from 'react-redux';

/* const Spinner = () => {
    const value = useSelector(storeState => storeState.spinnerData);
    const dispatch = useDispatch();
    const [delta, setDelta] = useState(0);
    const { up, down } = bindActionCreators(spinnerActionCreators, dispatch);

    return (
        <div>
            <h3>Spinner</h3>
            <hr />
            <label>Delta : </label>
            <input data-testid="txtDelta" type="number" value="1" onChange={evt => setDelta(evt.target.valueAsNumber || 0)} />
            <br />
            <input type="button" value="DOWN" onClick={() => down(delta)} />
            <span data-testid="spinnerResult"> [ {value} ] </span>
            <input type="button" value="UP" onClick={() => up(delta)} />
        </div>
    )
} */

const Spinner = () => {
    const [delta, setDelta] = useState(0);
    const [value, setValue] = useState(0);

    const onDeltaChange = (evt) => {
        console.log(evt.target.value);
        setDelta(evt.target.valueAsNumber);
    };

    return (
        <div>
            <h3>Spinner</h3>
            <hr />
            <label>Delta : </label>
           {/*  <input type="text" data-testid="txtName" /> */}
            <input data-testid="txtDelta" type="number"  onChange={onDeltaChange} />
            <div>{delta}</div>
            <br />
            <input type="button" value="DOWN" onClick={() => setValue(value - delta)} />
            <span data-testid="spinnerResult"> [ {value} ] </span>
            <input type="button" value="UP" onClick={() => setValue(value + delta)} />
        </div>
    )
}

export default Spinner;