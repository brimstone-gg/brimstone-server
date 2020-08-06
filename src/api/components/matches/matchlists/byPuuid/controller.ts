import { Request, Response } from 'express'
import axios from 'axios'

import { RIOT_API, validShards } from '../../../../../utils/API'
import { redisClient } from '../../../../middlewares/cache'

export const getMatchlist = async (req: Request, res: Response) => {
  const { shard, puuid } = req.params

  try {
    const shrd = shard.toLowerCase()

    if (validShards.includes(shrd)) {
      const { data } = await axios.get(`https://${shrd}.${RIOT_API.match.matchlist}/${puuid}`, {
        headers: {
          'X-Riot-Token': process.env.RIOT_DEV_API_KEY
        }
      })

      redisClient.setex(`matchMatchlistByPuuid-${shrd}-${puuid}`, 3600, JSON.stringify(data))

      return res.status(200).json({ data })
    } else {
      return res.status(404).json({
        error: {
          message: 'Invalid shard. Must be ap, br, eu, kr, latam or na'
        }
      })
    }
  } catch (err) {
    return res.status(404).json({
      error: {
        message: 'No matchlist found with that Riot PUUID'
      }
    })
  }
}
