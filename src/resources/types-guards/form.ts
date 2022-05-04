export type SignInFormData = {
  email: string
  password: string
}

export type SignUpFormData = {
  name: string
  email: string
  password: string
  confirmPassword: string
}

export type PossibleFormsData = SignInFormData | SignUpFormData

export function isAnSignInFormData (data: PossibleFormsData): data is SignInFormData {
  return data && 'email' in data
}

export function isAnSignUpFormData (data: PossibleFormsData): data is SignUpFormData {
  return data && 'confirmPassword' in data
}
