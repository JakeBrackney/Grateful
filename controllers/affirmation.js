const Affirmation = require('../models/Affirmation')

module.exports = {
  index: (req, res) => {
    Affirmation.find({})
    .sort({ createdAt: -1 })
    .limit(10)
    .populate("author")
    .exec(function(err, affirmation) {
      res.render('affirmation/show', affirmation)
      console.log('Show Clicked')
    })
  },
  new: (req, res) => {
    res.render("affirmation/new")
  },
  create: (req, res) => {
    Affirmation.create({
      text: req.body.text,
      author: req.user._id
    }).then(affirmation => {
      req.user.affirmation.push(affirmation)
      req.user.save(err => {
        res.render('affirmation/show')
      })
    })
  },
  update: (req, res) => {
    let { text } = req.body
    Affirmation.findOne({ _id: req.params.id }).then(affirmation => {
      affirmation.text.push({
        text,
        author: req.user._id
      })
      affirmation.save(err => {
        res.render('affirmation/show')
      })
    })
  },
  requireAuth: function(req, res, next) {
    if (req.isAuthenticated()) {
      next()
    } else {
      res.redirect('/')
    }
  }
}
 
