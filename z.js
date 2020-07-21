register: async(req, res) => {
  const {email, firstName, lastName, password} = req.body;
  const {session} = req;
  const db = req.app.get('db');

  let user = await db.user_get(email);
  user = user[0];
console.log('user:', user);
  if(user){
      return res.status(400).send('A user with that email already exists. Please log in.')
  }
console.log('email:', email, 'first:', firstName, 'last:', lastName);
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);
  let newUser = await db.user_register({email, firstName, lastName});
  newUser = newUser[0];
  const userId = newUser.users_id;
  await db.user_password({hash, userId});
  session.user = newUser;
  console.log('r session user:', session.user);
  // await db.cat_post_overflow({userId})
  res.status(200).send(session.user);
},


edit: (req, res) => {
  let {id} = req.params;
  const {newDate} = req.body;
  const index = progressions.findIndex(goal => goal.id === +id);

  console.log(newDate)
  if (index === -1) res.status(404).send('you suck!')
  progressions[index].date = newDate;
  res.status(200).send(progressions)
},

delete: (req, res) => {
  const {id} = req.params;
  const index = progressions.findIndex(goal => goal.id === +id);
      if (index === -1) res.status(404).send('item not found')

  console.log('deleted')
  progressions.splice(index, 1);
  res.status(200).send(progressions);
}
