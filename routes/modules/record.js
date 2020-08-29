const express = require('express')

const router = express.Router()
const Record = require('../../models/record')
const Category = require('../../models/category')


//new
router.get('/new', (req, res) => {
  const local = new Date()
  const today = local.toISOString().slice(0, 10)

  return Category.find()
    .lean()
    .sort({ _id: '1' })
    .then(categories => res.render('new', { categories, today }))
    .catch(error => console.log(error))
})

router.post('/', (req, res) => {
  const dataArray = []
  const userId = { userId: req.user._id }
  const data = req.body
  let obj = Object.assign(data, userId)
  dataArray.push(obj)

  return Record.create(dataArray)
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

//edit
router.get('/:id/edit', (req, res) => {
  const _id = req.params.id
  const userId = req.user._id
  return Category.find()
    .lean()
    .sort({ _id: '1' })
    .then(categories => {
      Record.findOne({ _id, userId })
        .lean()
        .then((record) =>
          res.render('edit', { record, categories }))
    })
    .catch(error => console.log(error))
})

router.put('/:id/', (req, res) => {
  const newItem = req.body
  const _id = req.params.id
  const userId = req.user._id
  return Record.findOne({ _id, userId })
    .then(record => {
      record = Object.assign(record, newItem)
      record.save()
    })
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

//delete
router.delete('/:id/', (req, res) => {
  const _id = req.params.id
  const userId = req.user._id
  return Record.findOne({ _id, userId })
    .then(record => record.remove())
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

module.exports = router