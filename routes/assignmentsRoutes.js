const express = require('express');
const router = express.Router();
const assignments = require('../data/assignments');

//assingments routes!
router.use(express.json())

// router.get('/', (req,res) => {
//     res.json(assignments)
// })
//Read

router.get('/', (req, res) => {
    res.json(assignments)
})

router.get('/:id', (req, res, next) => {
    const assignment = assignments.find((u)=> u.id == req.params.id);
    if(assignments)  {
        res.json(assignments);
    }
    else {
        next();
    }
});
//Put
router.post('/', (req, res) => {
    
});
//Update

//Delete


module.exports = router;