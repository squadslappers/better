nodemailer = require('nodemailer'),
{GOOGLE_PASS, GOOGLE_EMAIL} = process.env,

module.exports = {
  sendMessage: async(req, res) => {
    const {
      p1FirstName, p1LastName, p1Email,
      p2FirstName, p2LastName, p2Email,
      p3FirstName, p3LastName, p3Email,
      p4FirstName, p4LastName, p4Email,
      p5FirstName, p5LastName, p5Email,
      message
    } = req.body;

    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: GOOGLE_EMAIL,
        pass: GOOGLE_PASS
      }
    });

    if (p1FirstName && p1LastName && p1Email)
    {
      var mailOptions = {
        from: 'Better Inc.',
        to: [p1Email, p2Email, p3Email, p4Email, p5Email],
        subject: `${p1FirstName}, Jake Moreno wants your advice.`,
        text: `Hey, ${p1FirstName}, your friend Jake Moreno used Better to send you the following message: ${message} You can reply to this email and they will receive it.`
      };
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
    }

    // var mailOptions = {
    //   from: 'jacob.w.moreno@gmail.com',
    //   to: [p1Email, p2Email, p3Email, p4Email, p5Email],
    //   subject: 'Jake Wants Your Advice',
    //   text: `Hey! Your friend {Jake} sent you this message: ${message}`
    // };


    res.status(200).send("WIN: axios.post('/names')");
  }
}
