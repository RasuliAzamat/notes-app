const createPath = require('../helpers/createPath')

const getHome = (req, res) => {
    const title = 'Home page'
    
    res.render(createPath('index'), { title })
}

module.exports = { getHome }