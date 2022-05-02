import { Logo } from '~/components'
import { Button } from '~/components/ui/button'

import { ContainerContent } from '~/layouts'

import * as S from './styles'

export const Header = () => (
  <S.HeaderWrapper>
    <ContainerContent>
      <Logo />
      <Button>Sign up</Button>
      <Button variant='outlined'>Sign in</Button>
    </ContainerContent>
  </S.HeaderWrapper>
)
