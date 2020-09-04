import axios from 'axios';

function getLocalBugs(){
    return [
        { id : 1, name : 'Local Bug - 1', isClosed : false, createdAt : new Date()},
        { id: 2, name: 'Local Bug - 2', isClosed: false, createdAt: new Date() },
    ];
}

function load(){
    const bugs = getLocalBugs();
    const action = { type : 'INIT_BUGS', payload : bugs };
    return action;
}

export default load;