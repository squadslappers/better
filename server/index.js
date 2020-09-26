require('dotenv').config();

const express = require('express'),
      {SERVER_PORT, GOOGLE_PASS, GOOGLE_EMAIL} = process.env,
      app = express(),
      authCtrl = require('./authCtrl'),
      betterCtrl = require('./betterCtrl'),
      session = require('express-session')

app.use(express.json());

app.use(session({
  resave: false,
  saveUninitialized: true,
  secret: 'asdfjkl;',
  cookie: {maxAge: 1000 * 60}
}));

// === === AUTH ENDPOINTS === ===
app.post('/register', authCtrl.register);
app.post('/logout', authCtrl.logout);

// === === BETTER ENDPOINTS === ===
app.post('/api/email', betterCtrl.sendMessage)

app.listen(SERVER_PORT, () => console.log(`running: ${SERVER_PORT}`));
