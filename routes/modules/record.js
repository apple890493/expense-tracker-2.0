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
  const item = req.body
  const date = req.body.date
  console.log('date', date.slice(0, 7))

  return Record.create(item)
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

//edit
router.get('/:id/edit', (req, res) => {
  const id = req.params.id
  return Category.find()
    .lean()
    .sort({ _id: '1' })
    .then(categories => {
      Record.findById(id)
        .lean()
        .then((record) =>
          res.render('edit', { record, categories }))
    })
    .catch(error => console.log(error))
})

router.put('/:id/', (req, res) => {
  const newItem = req.body
  const id = req.params.id
  return Record.findById(id)
    .then(record => {
      record = Object.assign(record, newItem)
      record.save()
    })
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

//delete
router.delete('/:id/', (req, res) => {
  const id = req.params.id
  return Record.findById(id)
    .then(record => record.remove())
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

module.exports = router