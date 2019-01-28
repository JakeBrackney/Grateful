const express = require('express')
const router = express.Router()
const affirmationController = require('../controllers/affirmation')

router.get('/affirmation', affirmationController.index)
//add routes & controllers for showing list and creating new

module.exports = router