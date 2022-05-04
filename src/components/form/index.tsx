import { HTMLAttributes, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import {
  SignInFormData,
  SignUpFormData,
  isAnSignUpFormData,
  schemaSignIn,
  schemaSignUp,
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
  const { handleSubmit, register, formState: { errors } } =
    useForm<OnSubmitFormData>({
      resolver: yupResolver(signIn ? schemaSignIn : schemaSignUp),
    })

  const onSubmit = (data: OnSubmitFormData) => {
    if (isAnSignUpFormData(data)) {
      return console.dir(data)
    }

    console.dir(data)
  }

  useEffect(() => {
    if ('confirmPassword' in errors) {
      errors.name && alert(errors.name.message)
      errors.confirmPassword && alert(errors.confirmPassword.message)
    }

    errors.email && alert(errors.email.message)
    errors.password && alert(errors.password.message)
  }, [errors])

  return (
    <S.FormWrapper onSubmit={handleSubmit(onSubmit)} {...props}>
      {signIn && (
        <S.Inputs>
          <Input
            type='email'
            required
            placeholder='Email'
            {...register('email')}
          />
          <Input
            type='password'
            required
            placeholder='Password'
            {...register('password')}
          />
      </S.Inputs>
      )}

      {!signIn && (
        <S.Inputs>
          <Input required placeholder='Name' {...register('name')} />
          <Input
            required
            type='email'
            placeholder='Email'
            {...register('email')}
          />
          <Input
            type='password'
            placeholder='Password'
            {...register('password')}
          />
          <Input
            type='password'
            placeholder='Confirm password'
            {...register('confirmPassword')}
          />
      </S.Inputs>
      )}

      <Button size='medium' variant='contained'>
        {signIn ? 'Sign In' : 'Sign Up'}
      </Button>
    </S.FormWrapper>
  )
}
