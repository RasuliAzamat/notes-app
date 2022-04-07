const createPath = require('../helpers/createPath')

const errorMiddlewear = (req, res) => {
    const title = 'Error 404'
    
    res.status(404).render(createPath('error'), { title })
}

module.exports = { errorMiddlewear }