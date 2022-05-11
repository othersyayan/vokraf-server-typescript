import { Request, Response } from 'express'

import CareerTrackService from '../services/careerTrack.services'

class CareerTrackController {
  private CareerTrackService = new CareerTrackService()

  /**
   * name
   */
  public getCTs = async (req: Request, res: Response) => {
    const data = await this.CareerTrackService.getCareerTracks()
    return res.status(200).send(data)
  }

  public getCT = async (req: Request, res: Response) => {
    const { id } = req.params

    const data = await this.CareerTrackService.getCareerTrack(id)
    return res.status(200).send(data)
  }
}

export default CareerTrackController
