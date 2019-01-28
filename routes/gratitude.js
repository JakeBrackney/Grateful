const express = require('express')
const router = express.Router()
const gratitudeController = require('../controllers/gratitude')

router.get('/gratitude', gratitudeController.index)
//add routes & controllers for showing list and creating new

module.exports = router