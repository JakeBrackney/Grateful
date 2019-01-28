const express = require('express')
const router = express.Router()
const affirmationController = require('../controllers/affirmation')

router.get('/affirmation', affirmationController.index)

module.exports = router