const createPath = require('../helpers/createPath')
const handleError = require('../helpers/handleError')
const Note = require('../models/note')

const getNotes = (req, res) => {
    const title = 'All notes'

    Note.find()
        .sort({ createdAt: -1 })
        .then(notes => res.render(createPath('notes'), { title, notes }))
        .catch(err => handleError(res, err))
}
const getNote = (req, res) => {
    const id = req.params.id
    const title = `Note ${id}`

    Note.findById(id)
        .then(note => res.render(createPath('note'), { title, note }))
        .catch(err => handleError(res, err))
}

const deleteNote = (req, res) => {
    const id = req.params.id

    Note.findByIdAndDelete(id)
        .then(() => res.redirect('/notes'))
        .catch(err => handleError(res, err))
}

module.exports = { getNotes, getNote, deleteNote }