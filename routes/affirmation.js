const express = require('express')
const router = express.Router()
const affirmationController = require('../controllers/affirmation')


router.get('/show', affirmationController.requireAuth, affirmationController.index)
router.get('/new', affirmationController.requireAuth, affirmationController.new)
router.post('/show', affirmationController.requireAuth, affirmationController.create)
router.put('/:id', affirmationController.requireAuth, affirmationController.update)
// router.delete("/:id", affirmationController.requireAuth, affirmationController.destroy)

module.exports = router


