const { Router } = require('express')
const { getHome } = require('../controllers/home')
const router = Router()

router.get(['/', '/index.html'], getHome)

module.exports = router
