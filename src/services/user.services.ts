import User, { UserAttributes } from '../models/user.model'

class UserService {
  public getUsers = async (): Promise<User[] | Record<string, any>> => {
    try {
      const result = await User.findAll()

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

  public getUser = async (
    id: string
  ): Promise<UserAttributes | Record<string, any>> => {
    try {
      const result = await User.findByPk(id)

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

  public getUserByEmail = async (
    email: string
  ): Promise<UserAttributes | Record<string, any>> => {
    try {
      const result = await User.findOne({ where: { email } })

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

  public createUser = async (
    data: any
  ): Promise<string | Record<string, any>> => {
    try {
      const user = await this.getUserByEmail(data.email)

      if (user.id) {
        throw new Error('Email already taken.')
      }

      const saveUser = await User.create(data)

      if (!saveUser) {
        throw new Error('Cannot save data.')
      }

      return {
        id: saveUser.id,
      }
    } catch (error: any) {
      return {
        status: 'error',
        message: error.message,
      }
    }
  }

  public updateUser = async (
    id: string,
    data: any
  ): Promise<boolean | Record<string, any>> => {
    try {
      const user = await User.findByPk(id)

      if (!user) {
        throw new Error('Cannot find data.')
      }

      const updateUser = await User.update(data, {
        where: {
          id,
        },
      })

      if (!updateUser) {
        throw new Error('Cannot update data.')
      }

      return true
    } catch (error: any) {
      return {
        status: 'error',
        message: error.message,
      }
    }
  }

  public deleteUser = async (
    id: string
  ): Promise<boolean | Record<string, any>> => {
    try {
      const deleteUser = await User.destroy({
        where: {
          id,
        },
      })

      if (!deleteUser) {
        throw new Error('Cannot delete data.')
      }

      return true
    } catch (error: any) {
      return {
        status: 'error',
        message: error.message,
      }
    }
  }
}

export default UserService
