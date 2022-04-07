const { Router } = require('express')
const { getAdd, postAdd } = require('../controllers/add')
const router = Router()

router.get('/add', getAdd);
router.post('/add', postAdd);

module.exports = router