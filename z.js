login: async(req, res) => {
  const {email, password} = req.body;
  const {session} = req;
  const db = req.app.get('db');

  let user = await db.user_get(email);
  user = user[0];
  if(!user){
      return res.status(400).send('Email not found');
  }
  const authenticated = bcrypt.compareSync(password, user.passwords_password);
  if(authenticated){
      delete user.passwords_password;
      delete user.passwords_id;
      session.user = user;
      console.log('session user:', session.user)
      res.status(202).send(session.user)
  } else {
      res.status(400).send('Incorrect password')
      console.log('you suck')
  }
},
