require('dotenv').config();

const express = require('express'),
      {SERVER_PORT} = process.env,
      app = express(),
      authCtrl = require('./authCtrl'),
      betterCtrl = require('./betterCtrl')

app.use(express.json());

// === === AUTH ENDPOINTS === ===
app.post('/user', authCtrl.register);

// === === BETTER ENDPOINTS === ===
app.post('/names', betterCtrl.sendMessage)

app.listen(SERVER_PORT, () => console.log(`running: ${SERVER_PORT}`));
