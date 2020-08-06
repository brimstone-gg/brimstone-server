import { Request, Response } from 'express'
import axios from 'axios'

import { RIOT_API, validShards } from '../../../../utils/API'
import { redisClient } from '../../../middlewares/cache'

export const getMatch = async (req: Request, res: Response) => {
  const { shard, matchid } = req.params

  try {
    const shrd = shard.toLowerCase()

    if (validShards.includes(shrd)) {
      const { data } = await axios.get(`https://${shrd}.${RIOT_API.match.matches}/${matchid}`, {
        headers: {
          'X-Riot-Token': process.env.RIOT_DEV_API_KEY
        }
      })

      redisClient.setex(`matchByMatchId-${shrd}-${matchid}`, 3600, JSON.stringify(data))

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
        message: 'No match found with that Riot Match ID'
      }
    })
  }
}
