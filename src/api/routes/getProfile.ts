import express from 'express'
const router = express.Router()

import * as userController from '../controllers/getProfile'

router.get('/:username/:discriminator', userController.getProfile)

module.exports = router
