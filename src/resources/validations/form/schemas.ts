import * as yup from 'yup'

export const schemaSignIn = yup.object({
  email: yup.string().email('Email deve ser um email válido').required('Email é obrigatório'),
  password: yup.string().min(6, 'Senha deve ter pelo menos 6 caracteres').required('Senha é obrigatória'),
}).required()

export const schemaSignUp = yup.object({
  email: yup.string().email().required('Email é obrigatório'),
  password: yup.string()
    .required('Senha é obrigatória')
    .min(6, 'Senha deve ter pelo menos 6 caracteres'),
  confirmPassword: yup.string()
    .required('Senha de confirmação é obrigatória')
    .oneOf([yup.ref('password')], 'As senhas não correspondem.'),
}).required()
