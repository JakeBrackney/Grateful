const express = require('express')
const router = express.Router()
const gratitudeController = require('../controllers/gratitude')

router.get('/show', gratitudeController.requireAuth, gratitudeController.index)
router.get('/new', gratitudeController.requireAuth, gratitudeController.new)
router.post('/show', gratitudeController.requireAuth, gratitudeController.create)
router.get('/:id', gratitudeController.requireAuth, gratitudeController.show)
router.get('/edit/:id', gratitudeController.requireAuth, gratitudeController.edit)
router.put('/:id', gratitudeController.requireAuth, gratitudeController.update)
router.delete("/:id", gratitudeController.requireAuth, gratitudeController.delete)

module.exports = router