require('dotenv').config();

const express = require('express'),
      {SERVER_PORT, GOOGLE_PASS, GOOGLE_EMAIL} = process.env,
      app = express(),
      authCtrl = require('./authCtrl'),
      betterCtrl = require('./betterCtrl'),
      nodemailer = require('nodemailer'),
      session = require('express-session')

app.use(express.json());
app.use(session({
  resave: false,
  saveUninitialized: true,
  secret: 'asdfjkl;',
  cookie: {maxAge: 1000 * 60}
}));

// === === AUTH ENDPOINTS === ===
app.post('/user', authCtrl.register);

// === === BETTER ENDPOINTS === ===
app.post('/names', betterCtrl.sendMessage)

app.listen(SERVER_PORT, () => console.log(`running: ${SERVER_PORT}`));





var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: GOOGLE_EMAIL,
    pass: GOOGLE_PASS
  }
});

var mailOptions = {
  from: 'jacob.w.moreno@gmail.com',
  // to: 'thetetons@gmail.com',
  subject: 'Sending Email using Node.js',
  text: `If you're reading this, nodemailer works `
};

// transporter.sendMail(mailOptions, function(error, info){
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('Email sent: ' + info.response);
//   }
// });
