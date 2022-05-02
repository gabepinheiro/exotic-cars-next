import { Logo, Button, SearchBar } from '~/components'
import { ContainerContent } from '~/layouts'

import * as S from './styles'

export const Header = () => (
  <S.HeaderWrapper>
    <ContainerContent>
      <Logo />
      <SearchBar />
      <S.ButtonsWrapper>
        <Button>Sign up</Button>
        <Button variant='outlined'>Sign in</Button>
      </S.ButtonsWrapper>
    </ContainerContent>
  </S.HeaderWrapper>
)
