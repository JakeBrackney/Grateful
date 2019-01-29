const express = require('express')
const router = express.Router()
const affirmationController = require('../controllers/affirmation')


router.get('/affirmation', affirmationController.index)
//add routes & controllers for showing list and creating new
router.get('/lists', affirmationController.requireAuth, affirmationController.new)
router.post('/', affirmationController.requireAuth, affirmationController.create)
// router.get('/:id', affirmationController.show)
router.put('/:id', affirmationController.requireAuth, affirmationController.update)
// router.delete("/:id", affirmationController.requireAuth, affirmationController.destroy)

module.exports = router


