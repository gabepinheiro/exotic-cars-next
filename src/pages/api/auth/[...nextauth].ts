import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'

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

        if (email) {
          return { email, name: 'Gabe' }
        }

        return null
      },
    }),
  ],
})
