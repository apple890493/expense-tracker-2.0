const express = require('express')
const router = express.Router()
const Record = require('../../models/record')
const Category = require('../../models/category')
const record = require('../../models/record')

//all view
router.get('/', (req, res) => {
  const userId = req.user._id
  let totalAmount = 0
  const months = []

  Record.find({ userId })
    .lean()
    .sort({ date: '1' })
    .then(records => {
      totalAmount += records.map(record => record.amount).reduce((a, b) => { return a + b }, 0)

      records.forEach(record => {
        const date = record.date.slice(0, 7)
        if (!months.includes(date)) {
          months.push(date)
        }
      });
      Category.find()
        .lean()
        .sort({ _id: '1' })
        .then(categories => res.render('index', { records, totalAmount, months, categories }))
    })
    .catch(error => console.log(error))
})

module.exports = router