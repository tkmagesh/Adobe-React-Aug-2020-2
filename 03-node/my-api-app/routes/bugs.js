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

router.post('/', (req, res, next) => {
    const newBugData = req.body,
        newBugId = bugsList.reduce((result, bug) => result > bug.id ? result : bug.id, 0) + 1,
        newBug = { ...newBugData, id : newBugId };
    bugsList.push(newBug);
    res.status(201).json(newBug);
});

router.put('/:id', (req, res, next) => {
    const requestedBugId = parseInt(req.params.id);
    const updatedBug = req.body;
    const bug = bugsList.find(bug => bug.id === requestedBugId);
    if (bug) {
        bugsList = bugsList.map(b => b.id === requestedBugId ? updatedBug : b);
        res.json(updatedBug);
    } else {
        next()
    }
});

router.delete('/:id', (req, res, next) => {
    const requestedBugId = parseInt(req.params.id);
    const bug = bugsList.find(bug => bug.id === requestedBugId);
    if (bug) {
        bugsList = bugsList.filter(b => b.id !== requestedBugId );
        res.json({});
    } else {
        next()
    }
});

module.exports = router;