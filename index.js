const express = require('express')
const cors = require('cors')

const app = express()
app.use(express.json())

app.use(cors())

app.use(express.urlencoded({ extended: true }));

const chargesRoute = require('./routers/ChargesRoute')
const usersRoute = require('./routers/UsersRoute')

const URL = '/api/v1/'

app.use(URL+'charges', chargesRoute)
app.use(URL+'users', usersRoute)

app.listen(4000, () => {
    console.log("API Hotel - 'Posada Real' - En Servicio")
})