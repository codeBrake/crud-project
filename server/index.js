const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
require('dotenv').config()

const ec = require('./controllers/NewEmployee')
const cs = require('./controllers/CurrentStaff')

const app = express();

app.use( bodyParser.json() );

massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log('db is connected')
}).catch(err => console.log(err))


app.post('/api/employee', ec.addEmployee)
app.get('/api/staff', cs.getStaff)
app.delete('/api/delete', cs.deleteStaff)


app.listen(process.env.SERVER_PORT, () => {
    console.log('Server listening on port', process.env.SERVER_PORT)
})