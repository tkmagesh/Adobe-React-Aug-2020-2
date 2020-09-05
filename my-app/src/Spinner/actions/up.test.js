import up from './up';

test('Should create the action type "UP"', () => {
    const actionObj = up();
    expect(actionObj.type).toBe('UP');
})

test('Should create the action type "UP" with the given payload', () => {
    const testDelta = 100;
    const actionObj = up(testDelta);
    expect(actionObj.payload).toBe(testDelta);
})