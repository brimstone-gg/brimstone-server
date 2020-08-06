import express from 'express'
const router = express.Router()
import { accountsByPuuidCache } from '../../../middlewares/cache'

import * as accountByPuuidController from './controller'

router.get('/:region/:puuid', accountsByPuuidCache, accountByPuuidController.getAccount)

module.exports = router
