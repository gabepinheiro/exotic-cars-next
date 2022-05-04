import { Form, Center, Flex } from '~/components'

import * as S from './styles'

export const SignInTemplate = () => (
  <S.Wrapper>
    <Center>
      <Flex column alignItems='center' gap={64}>
        <S.Heading>Sign In</S.Heading>
        <Form signIn />
      </Flex>
    </Center>
  </S.Wrapper>
)
