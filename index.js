const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send("i know how to open node")
})


app.listen(3000, () => console.log("listening to port 3000"))