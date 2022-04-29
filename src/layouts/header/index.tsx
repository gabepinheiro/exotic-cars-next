import { Logo } from '~/components'
import { ContainerContent } from '../container-content'

import * as S from './styles'

export const Header = () => (
  <S.HeaderWrapper>
    <ContainerContent>
      <Logo />
    </ContainerContent>
  </S.HeaderWrapper>
)
