import express from 'express'
const router = express.Router()
import { matchByMatchIdCache } from '../../../middlewares/cache'

import * as matchByMatchIdController from './controller'

router.get('/:shard/:matchid', matchByMatchIdCache, matchByMatchIdController.getMatch)

module.exports = router
