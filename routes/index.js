const express = require('express')

const router = express.Router()

router.get('/', (req, res, next) => {
    res.render('index', { pageTitle: 'HomePage' })
})

module.exports = router