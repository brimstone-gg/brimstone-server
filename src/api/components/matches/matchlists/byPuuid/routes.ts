import express from 'express'
const router = express.Router()
import { matchMatchlistByPuuidCache } from '../../../../middlewares/cache'

import * as matchesMatchlistByPuuidController from './controller'

router.get('/:shard/:puuid', matchMatchlistByPuuidCache, matchesMatchlistByPuuidController.getMatchlist)

module.exports = router
