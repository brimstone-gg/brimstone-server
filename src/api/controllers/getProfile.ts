import { Request, Response } from 'express'

export const getProfile = (req: Request, res: Response) => {
  return res.status(200).json({
    data: {
      ...req.params,
      message: 'getProfile'
    }
  })
}
