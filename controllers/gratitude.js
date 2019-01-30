const Gratitude = require('../models/Gratitude')

module.exports = {
  index: (req, res) => {
    Gratitude.find({})
    .populate("author")
    .exec(function(err, gratitude) {
      res.render('gratitude/show', gratitude)
      console.log('Show Clicked')
    })
  },
  new: (req, res) => {
    res.render("gratitude/new")
  },
  create: (req, res) => {
    Gratitude.create({
      text: req.body.text,
      author: req.user._id
    }).then(gratitude => {
      req.user.gratitude.push(gratitude)
      req.user.save(err => {
        res.render('gratitude/show')
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
        res.render('gratitude/show')
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