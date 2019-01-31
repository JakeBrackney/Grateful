const express = require('express')
const router = express.Router()
const affirmationController = require('../controllers/affirmation')


router.get('/show', affirmationController.requireAuth, affirmationController.index)
router.get('/new', affirmationController.requireAuth, affirmationController.new)
router.post('/show', affirmationController.requireAuth, affirmationController.create)
router.get('/edit/:id', affirmationController.requireAuth, affirmationController.edit)
router.put('/edit/:id', affirmationController.requireAuth, affirmationController.update)
// router.delete('/show/:id', affirmationController.requireAuth, affirmationController.delete)

module.exports = router


