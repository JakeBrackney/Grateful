// const { Gratitude, Affirmation } = require('../models/Lists')

module.exports = {
  index: (req, res) => {
    res.render('/views/lists/affirmation')
  }
}

// User.findOne({ _id: req.params.id })
      //   .populate({
      //     path: "lists",
      //     options: { limit: 3, sort: { createdAt: -1 } }
      //   })
      //   .then(user => {