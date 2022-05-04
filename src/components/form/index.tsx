import { HTMLAttributes } from 'react'
import { Input, Button } from '~/components'

import * as S from './styles'

type FormProps = {
  signIn?: boolean
} & HTMLAttributes<HTMLFormElement>

export const Form = ({
  signIn = false,
  ...props
}: FormProps) => (
  <S.FormWrapper {...props}>
    {signIn && (
      <S.Inputs>
        <Input placeholder='Email' />
        <Input placeholder='Password' />
     </S.Inputs>
    )}

    {!signIn && (
      <S.Inputs>
        <Input placeholder='Name' />
        <Input placeholder='Email' />
        <Input placeholder='Password' />
        <Input placeholder='Confirm password' />
     </S.Inputs>
    )}

    <Button variant='contained'>
      {signIn ? 'Sign In' : 'Sign Up'}
    </Button>
  </S.FormWrapper>
)
