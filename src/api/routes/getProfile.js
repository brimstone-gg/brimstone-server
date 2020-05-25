const express = require('express')
const router = express.Router()

const userController = require('../controllers/getProfile')

router.get('/:username/:discriminator', userController.getProfile)

module.exports = router
