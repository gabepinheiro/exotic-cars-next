import { Form, Center, Flex } from '~/components'
import * as S from './styles'

export const SignUpTemplate = () => (
  <S.Wrapper>
    <Center>
      <Flex column alignItems='center' gap={64}>
        <S.Heading>Sign Up</S.Heading>
        <Form />
      </Flex>
    </Center>
  </S.Wrapper>
)
