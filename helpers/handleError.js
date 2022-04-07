const handleError = (res, err) => {
    console.log(err)
    res.redirect(('/error'))
}

module.exports = handleError