const express = require('express')
const router = express.Router()
const affirmationController = require('../controllers/affirmation')

router.get('/', affirmationController.index)

module.exports = router