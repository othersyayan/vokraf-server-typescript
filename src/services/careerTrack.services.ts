import CareerTrack, { CareerTrackAttributes } from '../models/careerTrack.model'

class CareerTrackService {
  public getCareerTracks = async (): Promise<
    CareerTrack[] | Record<string, any>
  > => {
    try {
      const result = await CareerTrack.findAll()

      if (!result) {
        throw new Error('Cannot find data.')
      }

      return result
    } catch (error: any) {
      return {
        status: 'error',
        msessage: error.message,
      }
    }
  }

  public getCareerTrack = async (
    id: string
  ): Promise<CareerTrackAttributes | Record<string, any>> => {
    try {
      const result = await CareerTrack.findByPk(id)

      if (!result) {
        throw new Error('Cannot find data.')
      }

      return result
    } catch (error: any) {
      return {
        status: 'error',
        message: error.message,
      }
    }
  }
}

export default CareerTrackService
