const Users = require('../models/usersModel')

const userCrtl = {
  register: async (req, res) => {
    try {
      const { name, lastname, email } = req.body

      const user = await new Users({ name, lastname, email })
      await user.save()

      res.status(200).json({ msg: 'Register sucess!' })
    } catch (err) {
      return res.status(505).json({ msg: err })
    }
  }
}

module.exports = userCrtl
