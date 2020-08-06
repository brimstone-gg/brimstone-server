import express from 'express'
const router = express.Router()
import { accountsByRiotIdCache } from '../../../middlewares/cache'

import * as accountByIdController from './controller'

router.get('/:region/:username/:discriminator', accountsByRiotIdCache, accountByIdController.getAccount)

module.exports = router
