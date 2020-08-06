import { Request, Response } from 'express'
import axios from 'axios'

import { RIOT_API, validRegions } from '../../../../utils/API'
import { redisClient } from '../../../middlewares/cache'

export const getAccount = async (req: Request, res: Response) => {
  const { region, puuid } = req.params

  try {
    const rgn = region.toLowerCase()

    if (validRegions.includes(rgn)) {
      const { data } = await axios.get(`https://${rgn}.${RIOT_API.account.byPuuid}/${puuid}`, {
        headers: {
          'X-Riot-Token': process.env.RIOT_DEV_API_KEY
        }
      })

      redisClient.setex(`accountByPuuid-${rgn}-${puuid}`, 3600, JSON.stringify(data))

      return res.status(200).json({ data })
    } else {
      return res.status(404).json({
        error: {
          message: 'Invalid region. Must be americas, asia or europe'
        }
      })
    }
  } catch (err) {
    return res.status(404).json({
      error: {
        message: 'No account found with that Riot PUUID'
      }
    })
  }
}
