import spinnerReducer from './spinnerReducer';

test('SpinnerReducer should increment the current state by delta', () => {
    const testAction = { type : 'UP', payload : 10 };
    const newState = spinnerReducer(0,testAction );
    expect(newState).toBe(10);
})