const express = require('express')
const cors = require('cors')
const port = 3002
const app = express()

const users = [
  { id: 1, name: 'Faham', email: 'faham@mail.com' },
  { id: 2, name: 'Juwel', email: 'juwel@mail.com' },
  { id: 3, name: 'Shovi', email: 'shovi@mail.com' },
  { id: 4, name: 'Mushfiq', email: 'mushfiq@mail.com' },
  { id: 5, name: 'Shakil', email: 'shakil@mail.com' },
]

const searchUser = (searchTerm) => {
  return users.filter(user => user.name.toLowerCase().includes(searchTerm.toLowerCase()))
}

app.use(cors())

app.get('/users', (req, res) => {
  if (req.query.searchTerm) {
    console.log('found searchTerm : ', req.query.searchTerm)
    let searchedUsers = searchUser(req.query.searchTerm)
    return res.send(searchedUsers)
  }
  res.send(users)
})

app.listen(port)
