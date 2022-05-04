import Head from 'next/head'
import { Form, Center, Flex } from '~/components'

import * as S from './styles'

export const SignInTemplate = () => (
  <S.Wrapper>
    <Head>
      <title>Sign in</title>
    </Head>
    <Center>
      <Flex column alignItems='center' gap={64}>
        <S.Heading>Sign In</S.Heading>
        <Form signIn />
      </Flex>
    </Center>
  </S.Wrapper>
)
