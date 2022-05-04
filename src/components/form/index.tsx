import { HTMLAttributes } from 'react'
import { useForm } from 'react-hook-form'
import {
  SignInFormData,
  SignUpFormData,
  isAnSignUpFormData,
} from '~/resources'
import { Input, Button } from '~/components'

import * as S from './styles'

type FormProps = {
  signIn?: boolean
} & HTMLAttributes<HTMLFormElement>

type OnSubmitFormData = SignUpFormData | SignInFormData

export const Form = ({
  signIn = false,
  ...props
}: FormProps) => {
  const { handleSubmit, register } =
    useForm<OnSubmitFormData>()

  const onSubmit = (data: OnSubmitFormData) => {
    if (isAnSignUpFormData(data)) {
      return console.dir(data)
    }

    console.dir(data)
  }

  return (
    <S.FormWrapper onSubmit={handleSubmit(onSubmit)} {...props}>
      {signIn && (
        <S.Inputs>
          <Input placeholder='Email' {...register('email')} />
          <Input placeholder='Password' {...register('password')} />
      </S.Inputs>
      )}

      {!signIn && (
        <S.Inputs>
          <Input placeholder='Name' {...register('name')} />
          <Input placeholder='Email' {...register('email')} />
          <Input placeholder='Password' {...register('password')} />
          <Input placeholder='Confirm password' {...register('confirmPassword')} />
      </S.Inputs>
      )}

      <Button size='medium' variant='contained'>
        {signIn ? 'Sign In' : 'Sign Up'}
      </Button>
    </S.FormWrapper>
  )
}
