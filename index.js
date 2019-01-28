const express = require('express')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const hbs = require('hbs')

const app = express()

app.set('view engine', 'hbs')
app.use(methodOverride("_method"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use(methodOverride("_method"));

app.use(require("./routes/index.js"));

app.listen(3000, () => console.log("server is running"));