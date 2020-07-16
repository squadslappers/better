const bcrypt = require('bcryptjs');

const users = [
  {
    id: 0,
    firstName: 'Jake',
    lastName: 'Moreno',
    username: 'squidslippers',
    password: 'asdf',
    age: 25,
    state: 'UT',
    email: 'jacob.w.moreno@gmail.com'
  }
]

let id = 1;

module.exports = {
  register: async(req, res) => {
    const {firstName, lastName, username, password, age, state, email} = req.body;

    console.log('firstName:', firstName);
    console.log('lastName:', lastName);
    console.log('username:', username);
    console.log('password:', password);
    console.log('age:', age);
    console.log('state:', state);
    console.log('email:', email);

    const salt = bcrypt.genSaltSync(10);
    console.log('salt:', salt);
    res.status(200).send("WIN: axios.post('/user') successful");
  }
}
