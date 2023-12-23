const express = require('express')

const router = express.Router()

router.get('/', (req, res, next) => {
    res.json('getting all cars')
})

router.get('/:id', (req, res, next) => {
    res.json(`get car by id ${req.params.id}`)
})

router.post('/', (req, res, next) => {
    res.json('creating new car')
})

module.exports = router;