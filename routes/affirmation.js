const express = require('express')
const router = express.Router()
const affirmationController = require('../controllers/affirmation')


router.get('/show', affirmationController.requireAuth, affirmationController.index)
router.get('/new', affirmationController.requireAuth, affirmationController.new)
router.post('/show', affirmationController.requireAuth, affirmationController.create)
router.delete('/affirmation/show', affirmationController.requireAuth, affirmationController.delete)
// router.get('/show/:id', affirmationController.requireAuth, affirmationController.show)

router.get('/edit/:id', affirmationController.requireAuth, affirmationController.edit)
router.put('/:id', affirmationController.requireAuth, affirmationController.update)
module.exports = router


