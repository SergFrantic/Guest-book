require('dotenv').config()
const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')
const messageRouter = require('./routes/messageRouter')
const PORT = process.env.PORT || 3006

app.use(cors());
app.use(express.json());
app.use(morgan('dev'))

app.use('/messages', messageRouter)

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
