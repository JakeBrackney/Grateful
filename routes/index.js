const express = require('express')
const router = express.Router()

router.use((req, res, next) => {
  res.locals.currentUser = req.user;
  next();
});

router.use('/', require("./app.js"))
router.use('/user', require('./user'))
router.use('/affirmation', require('./affirmation'))
router.use('/gratitude', require('./gratitude'))

module.exports = router