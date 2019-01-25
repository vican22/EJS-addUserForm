const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.set('view engine', 'ejs')

//set parser
app.use(bodyParser.urlencoded({ extended: false }))

//Routes
app.use('/', require('./routes/index'))
app.use('/', require('./routes/users'))

const PORT = process.env.PORT || 3000
app.listen(PORT)