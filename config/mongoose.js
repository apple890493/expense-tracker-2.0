const mongoose = require('mongoose')
const MONGODB_URI = process.env.MONGODB_URI

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}


//MongoDB
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
//mongoose 連線狀況
const db = mongoose.connection

db.on('error', () => {
  console.log('mongodb error!')
})
db.once('open', () => {
  console.log('mongodb ok!')
})

module.exports = db