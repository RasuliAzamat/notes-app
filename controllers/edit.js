const createPath = require('../helpers/createPath')
const handleError = require('../helpers/handleError')
const Note = require('../models/note')

const getEdit = (req, res) => {
    const id = req.params.id
    const title = `Note ${id}`

    Note.findById(id)
        .then(note => res.render(createPath('edit'), { title, note }))
        .catch(err => handleError(res, err))
}

const postEdit = (req, res) => {
    const { title, text } = req.body
    const id = req.params.id

    Note.findByIdAndUpdate(id, { title, text })
        .then(() => res.redirect(`/notes/${id}`))
        .catch(err => handleError(res, err))
}

module.exports = { getEdit, postEdit }