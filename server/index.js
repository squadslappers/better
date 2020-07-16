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
  res.status(200).send("WIN: axios.post('/user') successful");
})
app.post('/names', (req, res) => {
  const {
    p1FirstName, p1LastName, p1Email,
    p2FirstName, p2LastName, p2Email,
    p3FirstName, p3LastName, p3Email,
    p4FirstName, p4LastName, p4Email,
    p5FirstName, p5LastName, p5Email
  } = req.body;

  console.log('p1:', p1FirstName, p1LastName, p1Email)
  console.log('p2:', p2FirstName, p2LastName, p2Email)
  console.log('p3:', p3FirstName, p3LastName, p3Email)
  console.log('p4:', p4FirstName, p4LastName, p4Email)
  console.log('p5:', p5FirstName, p5LastName, p5Email)

  res.status(200).send("WIN: axios.post('/names')");
})

app.listen(SERVER_PORT, () => console.log(`running: ${SERVER_PORT}`));
