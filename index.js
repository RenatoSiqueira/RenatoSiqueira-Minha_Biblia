const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const path = require('path')

// MYSQL
const mysql = require('mysql')
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'minha-biblia'
})

// View Engine
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
// Assets
app.use(express.static('public'))

const dependencies = {
    connection
}

// Import Routes
const indexRouter = require('./routes/index')

// Routes
app.use('/', indexRouter(dependencies))

// Start Server
connection.connect(()=> {
    app.listen(port, () => console.log('Listening on '+port))   
})

