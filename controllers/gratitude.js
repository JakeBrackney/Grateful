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
        res.redirect('../../gratitude/show')
      })
    })
  },

  edit: (req, res) => {
    Gratitude.findOne({ _id: req.params.id })
      .then(gratitude=> {
        res.render('gratitude/edit', gratitude)
        console.log(gratitude.text)
      })
  },

  update: (req, res) => {
    Gratitude.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, (err, doc) => {
      console.log(req.body)
    }).then(() => { 
      res.redirect('../../Gratitude/show')
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