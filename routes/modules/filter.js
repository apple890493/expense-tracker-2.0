const express = require('express')

const router = express.Router()
const Record = require('../../models/record')
const Category = require('../../models/category')

router.get('/', (req, res) => {
  const userId = req.user._id
  let totalAmount = 0
  const title = req.query.sort
  const month = req.query.month
  const months = []
  let dataList = {}

  if (title === 'all') {
    dataList = { date: { $regex: month } }
  } else if (title === 'all') {
    dataList = { category: title }
  } else {
    dataList = { $and: [{ category: title }, { date: { $regex: month } }] }
  }

  Record.find({ userId })
    .lean()
    .then(records => {
      records.forEach(record => {
        const date = record.date.slice(0, 7)
        if (!months.includes(date)) {
          months.push(date)
        }
      })
      Record.find(dataList)
        .lean()
        .sort({ date: '1' })
        .then(records => {
          totalAmount += records.map(record => record.amount).reduce((a, b) => { return a + b }, 0)

          Category.find()
            .lean()
            .sort({ _id: '1' })
            .then(categories => res.render('index', { records, categories, month, months, totalAmount }))
            .catch(error => console.log(error))
        })
    })
})

module.exports = router