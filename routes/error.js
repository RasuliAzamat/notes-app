const { Router } = require('express')
const { errorMiddlewear } = require('../controllers/error')
const router = Router()

router.use(errorMiddlewear)

module.exports = router
