const Gratitude = require('../models/Gratitude')

module.exports = {
  index: (req, res) => {
    Gratitude.find({})
    .then(gratitude => {
      res.render('gratitude/show', { gratitudes : gratitude } )
      console.log("Gratitudes clicked")
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
      req.user.gratitude.push(gratitude._id)
      req.user.save(err => {
        res.render('gratitude/show')
      })
    })
  },

  show: (req, res) => {
    Gratitude.findOne({ _id: req.params.id })
      .then(gratitude => {
        res.render('gratitude/show', gratitude)
      })
      .catch(err => console.log(err))
  },

  edit: (req, res) => {
    Gratitude.findOne({ _id: req.params.id })
      .then(gratitude => {
        res.render('', gratitude)
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

  delete: (req, res) => {
    Gratitude.findByIdAndRemove({ _id: req.params.id })
    .then(() => {
      res.render('affirmation/show')
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