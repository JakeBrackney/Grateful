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
    Affirmation.create({
      text: req.body.affirmation.text,
      author: req.user._id
    }).then(affirmation => {
      req.user.affirmation.push(affirmation)
      req.user.save(err => {
        res.redirect(`/gratitude/show/${affirmation._id}`)
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
        res.redirect(`/gratitude/show/${affirmation._id}`)
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