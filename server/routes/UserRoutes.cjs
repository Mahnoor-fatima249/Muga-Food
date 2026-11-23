const express = require('express')
const router = express.Router()
const User = require('../models/User.cjs')
const Order = require('../models/Order.cjs')

router.get('/', async (req, res) => {
  try {
    const users = await User.find().select('-password')
    res.json(users)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

router.post('/signup', async (req, res) => {
  try {
    const { name, email, password } = req.body
    const existingUser = await User.findOne({ email })
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' })
    }
    const user = new User({ name, email, password })
    const createdUser = await user.save()
    res.status(201).json({ message: 'User created successfully', user: createdUser.getPublicProfile() })
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body
    const user = await User.findOne({ email })
    if (!user) {
      return res.status(404).json({ message: 'User not found' })
    }
    const isMatch = await user.comparePassword(password)
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' })
    }
    res.json({ message: 'Login successful', user: user.getPublicProfile() })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

// Order routes
router.post('/orders', async (req, res) => {
  try {
    const { items, totalAmount, paymentMethod, deliveryAddress } = req.body
    const order = new Order({
      items,
      totalAmount,
      paymentMethod,
      deliveryAddress,
    })
    const createdOrder = await order.save()
    res.status(201).json({ message: 'Order created', order: createdOrder })
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

router.get('/orders', async (req, res) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 })
    res.json(orders)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

router.get('/orders/:id', async (req, res) => {
  try {
    const order = await Order.findById(req.params.id)
    if (order) {
      res.json(order)
    } else {
      res.status(404).json({ message: 'Order not found' })
    }
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

router.put('/orders/:id/status', async (req, res) => {
  try {
    const { status } = req.body
    const order = await Order.findByIdAndUpdate(
      req.params.id,
      { status, updatedAt: Date.now() },
      { new: true }
    )
    if (order) {
      res.json({ message: 'Order status updated', order })
    } else {
      res.status(404).json({ message: 'Order not found' })
    }
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

module.exports = router