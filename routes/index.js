const express = require('express')
const router = express.Router()

router.use((req, res, next) => {
  res.currentUser = req.user;
  next();
});

router.use('/', require("./app.js"))
router.use('/user', require('./user'))
router.use('/affirmation', require('./affirmation'))
router.use('/gratitude', require('./gratitude'))


// router.all('*', (req, res) => {
//   res.status(400).send();
// });

module.exports = router