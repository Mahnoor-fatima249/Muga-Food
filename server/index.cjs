require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const foodRoutes = require('./routes/food.routes.cjs')
const userRoutes = require('./routes/UserRoutes.cjs')

const app = express()
const PORT = process.env.PORT || 5000

// Middleware
app.use(express.json())
app.use(cors())

// Routes
app.use('/api/foods', foodRoutes)
app.use('/api', userRoutes)

// ConnectDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('MongoDB connected')
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`)
    })
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err)
  })