import { Logo } from '~/components'

import { ContainerContent } from '~/layouts'

import * as S from './styles'

export const Header = () => (
  <S.HeaderWrapper>
    <ContainerContent>
      <Logo />
    </ContainerContent>
  </S.HeaderWrapper>
)
