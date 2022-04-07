const path = require('path')

const createPath = view => path.resolve(__dirname, '../views', `${view}.ejs`)

module.exports = createPath