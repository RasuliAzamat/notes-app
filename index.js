const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()

const homeRoutes = require('./routes/home')
const addRoutes = require('./routes/add')
const editRoutes = require('./routes/edit')
const notesRoutes = require('./routes/notes')
const errorRoutes = require('./routes/error')

const PORT = process.env.PORT
const DB = process.env.DB

const app = express()

app.listen(PORT, err =>
    err ? console.log(err) : console.log(`Running on ${PORT}`)
)

mongoose
    .connect(DB)
    .then(() => console.log('Connected to DB'))
    .catch(err => console.log(err))

app.use(express.urlencoded({ extended: false }))

app.set('view engine', 'ejs')

app.use(express.static('static'))

app.use(homeRoutes)
app.use(addRoutes)
app.use(editRoutes)
app.use(notesRoutes)
app.use(errorRoutes)
