const express = require('express')
const Food = require('../models/Food.cjs')

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const foods = await Food.find()
    res.json(foods)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

router.get('/:id', async (req, res) => {
  try {
    const food = await Food.findById(req.params.id)
    if (food) {
      res.json(food)
    } else {
      res.status(404).json({ message: 'Food not found' })
    }
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

router.post('/', async (req, res) => {
  try {
    const food = new Food(req.body)
    const createdFood = await food.save()
    res.status(201).json(createdFood)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

router.put('/:id', async (req, res) => {
  try {
    const food = await Food.findByIdAndUpdate(req.params.id, req.body, { new: true })
    if (food) {
      res.json(food)
    } else {
      res.status(404).json({ message: 'Food not found' })
    }
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const food = await Food.findByIdAndDelete(req.params.id)
    if (food) {
      res.json({ message: 'Food removed' })
    } else {
      res.status(404).json({ message: 'Food not found' })
    }
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

module.exports = router