const express = require('express')
const router = express.Router()
const gratitudeController = require('../controllers/gratitude')

router.get('/gratitude', gratitudeController.index)

module.exports = router