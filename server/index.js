require('dotenv').config();

const express = require('express'),
      {SERVER_PORT} = process.env,
      app = express();

app.use(express.json());

app.get('/ping', (req, res) => {
  console.log('running');
  req.body={ping: 'pong'};
  const result = req.body
  res.status(200).send(result);
})
app.post('/user', (req, res) => {
  const {firstName, lastName, username, password, age, state, email} = req.body;
    console.log('firstName:', firstName);
    console.log('lastName:', lastName);
    console.log('username:', username);
    console.log('password:', password);
    console.log('age:', age);
    console.log('state:', state);
    console.log('email:', email);
  res.status(200).send('post successful');
})

app.listen(SERVER_PORT, () => console.log(`running: ${SERVER_PORT}`));
