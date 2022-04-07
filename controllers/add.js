const createPath = require('../helpers/createPath')
const handleError = require('../helpers/handleError')
const Note = require('../models/note')

const getAdd = (req, res) => {
    const title = 'Add note'

    res.render(createPath('add'), { title })
}

const postAdd =  (req, res) => {
    const { title, text } = req.body
    const note = new Note({ title, text })

    note.save()
        .then(() => res.redirect('/notes'))
        .catch(err => handleError(res, err))
}

module.exports = { getAdd, postAdd }