
const User = require("../models/User")
const Lists = require('../models/Lists')
const passport = require("passport");

module.exports = {
    show: (req, res) => {
          res.render("user/show", { Lists });
    },

    login: (req, res) => {
      res.render("user/login", { message: req.flash("loginMessage") });
    },

    createLogin: (req, res) => {
      const login = passport.authenticate("local-login", {
        successRedirect: "/user/show",
        failureRedirect: "/user/login",
        failureFlash: true
      });
  
      return login(req, res);
    },

    signUp: (req, res) => {
      res.render("user/signup", { message: req.flash("signupMessage") });
    },

    createSignUp: (req, res, next) => {
      const signupStrategy = passport.authenticate("local-signup", {
        successRedirect: "/user/show",
        failureRedirect: "/user/signup",
        failureFlash: true
      });
  
      return signupStrategy(req, res, next);
    },

    logout: (req, res) => {
      req.logout();
      res.redirect("/");
    }
  };
