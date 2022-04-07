const { Router } = require('express')
const { getEdit, postEdit } = require('../controllers/edit')
const router = Router()

router.get('/edit/:id', getEdit)
router.post('/edit/:id', postEdit)

module.exports = router