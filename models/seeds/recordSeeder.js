const bcrypt = require('bcryptjs')
const db = require('../../config/mongoose')
const Record = require('../record')
const User = require('../user')
const recordData = require('./record.json')
const userList = require('./user.json')

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

db.once('open', () => {
  bcrypt
    .genSalt(10)
    .then(salt => bcrypt.hash(userList[0].password, salt))
    .then(hash => User.create({
      name: userList[0].name,
      email: userList[0].email,
      password: hash
    }))
    .then(user => {
      const array = []
      const userId = { userId: user._id }
      recordData.forEach(data => {
        let obj = Object.assign(data, userId)
        array.push(obj)
      })
      return Promise.all(Array.from({ length: 6 }, (_, i) => Record.create(array[i])))
    })
    .then(() => {
      console.log('recordSeeder done!')
      process.exit()
    })
})

