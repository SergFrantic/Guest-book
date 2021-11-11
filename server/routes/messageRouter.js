const express = require('express')
const { Message } = require('../db/models')
const router = express.Router()


//add message
router.post('/add', async (req, res) => {
  const dataForm = req.body
  try {

    if (dataForm.nickname === '' || dataForm.message === '') {
      res.json({ id: 0, nickname: "Error", message: "no form data" })
    } else {
      await Message.create(dataForm)//
      const lastData = await Message.findOne({
        order: [['id', 'DESC']],
      });
      res.json(lastData)
    }
  } catch (error) {
    res.json([{ id: 0, nickname: "Error", message: "the database is down" }])
  }

})


//view all messages
router.get('/', async (req, res) => {
  const listMessage = await Message.findAll()
  if (listMessage) {
    listMessage.sort((a, b) => b.createdAt - a.createdAt)
    res.json(listMessage)
  } else {
    res.json([{ id: 0, nickname: "Error", message: "the remote server is down" }])
  }
})

module.exports = router
