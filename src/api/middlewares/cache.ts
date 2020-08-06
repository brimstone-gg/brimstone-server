import { Request, Response, NextFunction } from 'express'
import * as redis from 'redis'

const REDIS_PORT = parseInt(process.env.REDIS_PORT) || 6379
export const redisClient = redis.createClient(REDIS_PORT)

// redisClient.on('connect', () => {
//   console.log('Redis connected')
// })

export const accountsByRiotIdCache = (req: Request, res: Response, next: NextFunction) => {
  const { region, username, discriminator } = req.params
  const rgn = region.toLowerCase()

  redisClient.get(`accountByRiotId-${rgn}-${username}#${discriminator}`, (err, data) => {
    if (err) throw err

    if (data !== null) {
      const d = JSON.parse(data)
      res.status(200).json({ data: d })
    } else {
      next()
    }
  })
}

export const accountsByPuuidCache = (req: Request, res: Response, next: NextFunction) => {
  const { region, puuid } = req.params
  const rgn = region.toLowerCase()

  redisClient.get(`accountByPuuid-${rgn}-${puuid}`, (err, data) => {
    if (err) throw err

    if (data !== null) {
      const d = JSON.parse(data)
      res.status(200).json({ data: d })
    } else {
      next()
    }
  })
}

export const matchByMatchIdCache = (req: Request, res: Response, next: NextFunction) => {
  const { shard, matchid } = req.params
  const shrd = shard.toLowerCase()

  redisClient.get(`matchByMatchId-${shrd}-${matchid}`, (err, data) => {
    if (err) throw err

    if (data !== null) {
      const d = JSON.parse(data)
      res.status(200).json({ data: d })
    } else {
      next()
    }
  })
}

export const matchMatchlistByPuuidCache = (req: Request, res: Response, next: NextFunction) => {
  const { shard, puuid } = req.params
  const shrd = shard.toLowerCase()

  redisClient.get(`matchMatchlistByPuuid-${shrd}-${puuid}`, (err, data) => {
    if (err) throw err

    if (data !== null) {
      const d = JSON.parse(data)
      res.status(200).json({ data: d })
    } else {
      next()
    }
  })
}
