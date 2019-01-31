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
        console.log(affirmation.text)
      })
  },

  update: (req, res) => {
    Affirmation.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, (err, doc) => {
      console.log(req.body)
    }).then(() => { 
      res.redirect('../../affirmation/show')
    }) 
  },

  delete: (req, res) => {
    console.log("delete clicked")
    Affirmation.findOneAndRemove({ _id: req.params.id })
    .then(() => {
      res.redirect('../../affirmation/show')
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