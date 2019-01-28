const express = require("express");
const hbs = require("hbs");
const flash = require("connect-flash");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const session = require("express-session");
const passport = require("passport");
const methodOverride = require("method-override");

const app = express()

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  session({
    secret: "EXPRESS-IS-AWESOME",
    saveUninitialized: true,
    resave: false
  })
  );
  app.use(flash());

require("./config/passport")(passport);
app.use(passport.initialize());
app.use(passport.session());

app.set('view engine', 'hbs')
app.use(methodOverride("_method"));

app.use(require("./routes/index.js"));

app.listen(3000, () => console.log("server is running"));