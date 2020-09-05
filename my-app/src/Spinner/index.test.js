import React from 'react';
import { Provider } from 'react-redux';
import store from '../store'
import { render, screen, fireEvent, act } from '@testing-library/react';
import { getNodeText, getNodeValue} from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import Spinner from './index'

test('Initial Spinner value must be 0', () => {
    render(
        <Provider store={store}>
            <Spinner/>
        </Provider>
    );
    const spinnerValue = getNodeText(screen.getByTestId('spinnerResult'));
    expect(spinnerValue).toBe(' [ 0 ] ');
});

test('Increment the spinner value by 1', async () => {
    render(
        <Provider store={store}>
            <Spinner />
        </Provider>
    );

    /* const txtName = screen.getByTestId('txtName');
    userEvent.type(txtName, 'Magesh');
    expect(screen.queryByDisplayValue('Magesh')).toBeInTheDocument();
    screen.debug(); */

    const txtDelta = screen.getByTestId('txtDelta');
    userEvent.type(txtDelta, 1);
    //expect(screen.queryByDisplayValue('1')).toBeInTheDocument();
    
    userEvent.click(screen.getByText('UP'));

    screen.debug();
    

    
    const spinnerValue = getNodeText(screen.getByTestId('spinnerResult'));
    expect(spinnerValue).toBe(' [ 1 ] ');
});

