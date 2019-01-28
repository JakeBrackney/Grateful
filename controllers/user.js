
const User = require("../models/User")
const Lists = require('../models/Lists')
const passport = require("passport");

module.exports = {
    show: (req, res) => {
      // User.findOne({ _id: req.params.id })
      //   .populate({
      //     path: "lists",
      //     options: { limit: 3, sort: { createdAt: -1 } }
      //   })
      //   .then(user => {
          res.render("user/show", { ists });
        // });
    },

    login: (req, res) => {
      res.render("user/login", { message: req.flash("loginMessage") });
    },

    createLogin: (req, res) => {
      const login = passport.authenticate("local-login", {
        successRedirect: "/user/show",
        failureRedirect: "user/login",
        failureFlash: true
      });
  
      return login(req, res);
    },

    signUp: (req, res) => {
      res.render("user/signup", { message: req.flash("signupMessage") });
    },

    createSignUp: (req, res, next) => {
      const signupStrategy = passport.authenticate("local-signup", {
        successRedirect: "/",
        failureRedirect: "user/signup",
        failureFlash: true
      });
  
      return signupStrategy(req, res, next);
    },

    logout: (req, res) => {
      req.logout();
      res.redirect("/");
    }
  };
