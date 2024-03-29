import { HTMLAttributes, useEffect } from 'react'
import { useRouter } from 'next/router'
import { signIn as signInNextAuth, SignInResponse } from 'next-auth/react'
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
import { toast } from 'react-toastify'

import * as S from './styles'

type FormProps = {
  signIn?: boolean
} & HTMLAttributes<HTMLFormElement>

type OnSubmitFormData = SignUpFormData | SignInFormData

export const Form = ({
  signIn = false,
  ...props
}: FormProps) => {
  const router = useRouter()

  const { handleSubmit, register, formState: { errors } } =
    useForm<OnSubmitFormData>({
      resolver: yupResolver(signIn ? schemaSignIn : schemaSignUp),
    })

  const onSubmit = async (data: OnSubmitFormData) => {
    if (isAnSignUpFormData(data)) {
      const res = await fetch('/api/auth/sign-up', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result = await res.json()

      if (!res.ok) {
        return toast.error(result.message)
      }

      toast.success(result.message)
      router.replace('/sign-in')
      return
    }

    const res = await signInNextAuth(
      'credentials',
      { email: data.email, redirect: false },
    )

    const { error } = res! as SignInResponse

    if (error) {
      console.log(error)
      return toast.error(error)
    }

    toast.success('Autenticado com sucesso!')
    router.replace('/')
  }

  useEffect(() => {
    if ('confirmPassword' in errors) {
      errors.name && toast.error(errors.name.message)
      errors.confirmPassword && toast.error(errors.confirmPassword.message)
    }

    errors.email && toast.error(errors.email.message)
    errors.password && toast.error(errors.password.message)
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
