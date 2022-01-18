const express = require('express')
const cors = require('cors')
const routes = require('./routes')
const app = express()
require('dotenv').config()
app.use(express.json())
app.use(cors())
app.use(routes)

app.listen(3333, () => console.log('Starting server in the door 3333 🚀'))

