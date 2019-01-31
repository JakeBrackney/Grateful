const Affirmation = require('../models/Affirmation')

module.exports = {
  index: (req, res) => {
    Affirmation.find({})
    .then(affirmation => {
      // console.log(affirmation)
      res.render('affirmation/show', { affirmations : affirmation } )
      console.log("Affirmations clicked")
    })
  },

  new: (req, res) => {
    res.render("affirmation/new")
  },

  create: (req, res) => {
    console.log(req.body)
    Affirmation.create({
      text: req.body.text,
      author: req.user._id
    }).then(affirmation => {
      req.user.affirmation.push(affirmation._id)
      req.user.save(err => {
        res.render('affirmation/show')
      })
    })
  },

  show: (req, res) => {
    Affirmation.findOne({ _id: req.params.id })
      .then(affirmation=> {
        res.redirect('affirmation/edit', affirmation)
      })
  },

  update: (req, res) => {
    let { text } = req.body
    Affirmation.findOneAndUpdate({ _id: req.params.id })
      .then(affirmation => {
        affirmation.text.push({
          text,
          author: req.user._id
      })
      affirmation.save(err => {
        res.render('affirmation/show')
      })
    })
  },

  delete: (req, res) => {
    console.log("delete clicked")
    Affirmation.findOneAndRemove({ _id: req.params.id })
    .then(() => {
      res.redirect('/')
      console.log("delete clicked")
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