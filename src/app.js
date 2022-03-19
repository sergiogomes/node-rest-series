const express = require( 'express')
const app = express()
const port = 3000

const series = require('./api/series')

app.use('/series', series)

app.listen(port, () => console.log('Listeing on port ' + port))
