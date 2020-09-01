const express = require('express'),
    router = express.Router();

let bugsList = [
    { id : 1, name : 'Server communication failure', isClosed : false, createdAt : new Date()},
    { id: 2, name: 'Data integrity checks failed', isClosed: false, createdAt: new Date() },
    { id: 3, name: 'User actions not recognized', isClosed: false, createdAt: new Date() }
];

router.get('/', (req, res, next) => {
    res.json(bugsList);
});

router.get('/:id', (req, res, next) => {
    const requestedBugId = parseInt(req.params.id);
    const bug = bugsList.find(bug => bug.id === requestedBugId);
    if (bug){
        res.json(bug);
    } else {
        next()
    }
});

module.exports = router;