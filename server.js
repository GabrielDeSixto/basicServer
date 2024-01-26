const express = require('express')
const dontenv = require('dotenv').config()
const port = 5000

const app = express()


app.use('/api/tareas', require('./routes/routeTasks.js'))

app.listen(port, ()=> console.log(`server listo en el puerto ${port}`))
