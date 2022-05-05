import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import { client, GetUserByEmailQuery, GET_USER_BY_EMAIL } from '~/graphql'

export default NextAuth({
  providers: [
    Credentials({
      name: 'credentials',
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
          placeholder: 'example@email.com',
        },
        password: { label: 'Password', type: 'password' },
      },
      authorize: async (credentials) => {
        if (!credentials) return null

        const { email } = credentials

        const { user } = await client.request<GetUserByEmailQuery>(
          GET_USER_BY_EMAIL, {
            email,
          })

        if (!user) {
          throw new Error('User not found')
        }

        return { email: user.email, name: user.name }
      },
    }),
  ],
})
