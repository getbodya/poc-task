const express = require('express')
const bodyParser = require('body-parser')
const storageService = require('./service/storage.service')
const cors = require('cors')
const app = express()
const port = 3003
storageService.reset()
app.use(cors())
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));


app.post('/users', (req, res) => {
    console.log(req.body)  
    setTimeout(() => {
        storageService.addUser(req.body)
        res.status(201).end()
    },3000)
})
app.get('/users', (req, res) => {
    setTimeout(() => {
        const users = storageService.getAllUsers()
        res.status(200).send(JSON.stringify(users))
    },3000)
})

app.put('/users/:id', (req, res) => {
    console.log(req.params)
    // setTimeout(() => {
    //     const users = storageService.getAllUsers()
    //     res.status(200).send(JSON.stringify(users))
    // },3000)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})