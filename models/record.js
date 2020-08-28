const mongoose = require('mongoose')
const Schema = mongoose.Schema

const recordSchema = new Schema({
  name: {
    type: String
  },
  category: {
    type: String
  },
  date: {
    type: String
  },
  amount: {
    type: Number
  },
  chart: {
    type: String
  }
})

module.exports = mongoose.model('Record', recordSchema)