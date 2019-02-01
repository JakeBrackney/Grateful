const Affirmation = require('../models/Affirmation')

module.exports = {
  index: (req, res) => {
    Affirmation.find({})
    .then(affirmation => {
      res.render('affirmation/show', { affirmations : affirmation } )
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
      req.user.affirmation.push(affirmation._id)
      req.user.save(err => {
        res.redirect('../../affirmation/show')
      })
    })
  },

  edit: (req, res) => {
    Affirmation.findOne({ _id: req.params.id })
      .then(affirmation=> {
        res.render('affirmation/edit', affirmation)
      })
  },

  update: (req, res) => {
    Affirmation.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, (err, doc) => {
    }).then(() => { 
      res.redirect('../../affirmation/show')
    }) 
  },

  delete: (req, res) => {
    Affirmation.findOneAndRemove({ _id: req.params.id })
    .then(() => {
      res.redirect('../../affirmation/show')
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