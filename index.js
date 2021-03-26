const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser')


const app = express();
app.use(cors())
app.use(bodyParser.json())

const users = ['asfaq', 'siam', 'riad', 'russel', 'kobir', 'meherab']

app.get('/', (req, res) => {
  res.send("i know how to open node")
})

app.get('/fruits/banana', (req, res) => {
  res.send({ fruit: 'banana', price: 100 })
})
//dynamic api
app.get('/user/:id', (req, res) => {
  const id = req.params.id;
  const name = users[id];
  res.send({ id, name })
})

//post
app.post('/addUser', (req, res) => {
  const user = req.body;
  user.id = 55;
  res.send(user)
  console.log(user)
})

app.listen(4000, () => console.log("listening to port 4000"))