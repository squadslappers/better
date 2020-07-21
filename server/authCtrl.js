const bcrypt = require('bcryptjs');

const users = [];

let id = 1;

module.exports = {
  register: async(req, res) => {
    const {firstName, lastName, username, password, age, state, email} = req.body;
    const {session} = req;

    let index = users.findIndex(user => user.email === email);

    if (index === -1) {
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(password, salt);
      users.push({
        firstName, lastName, username, hash, age, state, email
      });
      res.status(200).send(users);
      console.log('session:', session);
      session.user = {username, email}
      console.log('session user:', session);
    } else {
      return res.status(400).send('A user with that email already exists. Please log in.')
    }

  }
}
