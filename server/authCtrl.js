const bcrypt = require('bcryptjs');

const users = [];

let id = 1;

module.exports = {
  register: async(req, res) => {
    const {firstName, lastName, password, age, state, email} = req.body;
    const {session} = req;

    let index = users.findIndex(user => user.email === email);

    if (index === -1) {
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(password, salt);
      users.push({
        firstName, lastName, password: hash, age, state, email
      });
      res.status(200).send(users);
      session.user = {firstName, lastName, email}
      console.log('session:', session);
    } else {
      res.statusMessage='A user with that email already exists';
      res.status(400).send();
      return res;
    }
  },
  logout: async(req, res) => {
    console.log('before:', req.session);
    req.session.destroy();
    console.log('after:', req.session);
    res.sendStatus(200);
  }
}
