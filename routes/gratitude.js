const express = require('express')
const router = express.Router()
const gratitudeController = require('../controllers/gratitude')

router.get('/show', gratitudeController.requireAuth, gratitudeController.index)
router.get('/new', gratitudeController.requireAuth, gratitudeController.new)
router.post('/show', gratitudeController.requireAuth, gratitudeController.create)
router.put('/:id', gratitudeController.requireAuth, gratitudeController.update)

module.exports = router