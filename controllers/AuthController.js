const { User } = require('../models')
const { HashPassword, ComparePassword, CreateToken } = require('../middleware')

const Login = async (req, res) => {
  try {
    console.log(req.body)
    const user = await User.findOne({
      where: { username: req.body.username },
      raw: true
    })
    if (
      user &&
      (await ComparePassword(req.body.password, user.passwordDigest))
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
    res.status(401).send({ status: 'Error', msg: 'INTRUDER' })
  }
}

const Register = async (req, res) => {
  // console.log(req.body)
  try {
    let { firstName, lastName, username, email } = req.body
    let passwordDigest = await HashPassword(req.body.passwordDigest)
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

const GetAllUsers = async (req, res) => {
  try {
    let users = await User.findAll()
    res.send(users)
  } catch (error) {
    throw error
  }
}

const GetCurrentUser = async (req, res) => {
  try {
    res.send(res.locals.token)
  } catch (error) {
    throw error
  }
}

module.exports = {
  Login,
  Register,
  GetAllUsers,
  GetCurrentUser
}
