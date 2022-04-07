const { Router } = require('express')
const { getNotes, getNote, deleteNote } = require('../controllers/notes');
const router = Router()

router.get('/notes', getNotes)
router.get('/notes/:id', getNote)
router.delete('/notes/:id', deleteNote);

module.exports = router
