const express = require('express')
const router = express.Router()
const gratitudeController = require('../controllers/gratitude')

router.get('/gratitude', gratitudeController.index)
//add routes & controllers for showing list and creating new
// router.post('/', gratitudeController.requireAuth, gratitudeController.create)
// router.get('/new', gratitudeController.requireAuth, gratitudeController.new)
// router.get('/:id', gratitudeController.show)
// router.put('/:id', gratitudeController.requireAuth, gratitudeController.update)
// router.delete("/:id", gratitudeController.requireAuth, gratitudeController.destroy)

module.exports = router