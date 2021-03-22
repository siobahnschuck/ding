const { User } = require('../models')
const { HashPassword, ComparePassword, CreateToken } = require('../middleware')

const Login = async (req, res) => {
  try {
    const user = await User.findOne({
      where: { username: req.body.username },
      raw: true
    })
    if (
      user &&
      (await ComparePassword(user.passwordDigest, req.body.password))
    ) {
      let payload = {
        id: user.id,
        username: user.username
      }
      let token = CreateToken(payload)
      return res.send({ user: payload, token })
    }
    res.status(401).send({ status: 'Error', msg: 'Unauthorized' })
  } catch (error) {
    throw error
  }
}

const Register = async (req, res) => {
  // console.log(req.body)
  try {
    const { firstName, lastName, username, email, password } = req.body
    let passwordDigest = await HashPassword(password)
    console.log('PASSWORD DIGEST', passwordDigest)
    const user = await User.create({
      firstName,
      lastName,
      username,
      email,
      passwordDigest
    })
    // res.status(401).send({ status: 'Error', msg: 'Unauthorized' })
    res.send(user)
  } catch (error) {
    throw error
  }
}

module.exports = {
  Login,
  Register
}
