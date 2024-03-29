require('dotenv').config()
const express = require('express')
const sequelize = require('./config/connection')

const PORT = process.env.PORT || 3001
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

sequelize.sync({ force: false }).then(() => {
  console.log(`Sequelize connected!`)
  
  app.listen(PORT, () => console.log(`Server listening on http://localhost:${PORT}`))
})
