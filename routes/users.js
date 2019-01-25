const express = require('express')

const router = express.Router()

router.get('/users', (req, res, next) => {
    res.render('users', { pageTitle: 'Users', users })
})

const users = []

router.post('/add-user', (req, res, next) => {
    users.push({ name: req.body.username })
    res.redirect('/users')

})

module.exports = router