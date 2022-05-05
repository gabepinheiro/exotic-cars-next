import { NextApiRequest, NextApiResponse } from 'next'
import { client, CREATE_USER, CreateExoticUserMutation } from '~/graphql'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') return

  const { email, password, name } = req.body

  try {
    const { user } = await client.request<CreateExoticUserMutation>(CREATE_USER, {
      data: {
        email, password, name,
      },
    })

    return res.status(201).json({ message: 'Successfully create user!', email: user?.email })
  } catch (error: any) {
    if (error.response.status === 400) {
      return res.status(error.response.status).json({
        message: 'Email is already in use',
      })
    }
  }
}

export default handler
