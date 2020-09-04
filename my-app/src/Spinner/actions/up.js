function up(delta) {
    const action = { type: 'UP', payload: delta };
    return action;
}
export default up;