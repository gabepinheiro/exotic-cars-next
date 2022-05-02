import { Logo, Button, SearchBar } from '~/components'
import { AiOutlineMenu as MenuIcon } from 'react-icons/ai'
import { ContainerContent } from '~/layouts'

import * as S from './styles'

export const Header = () => (
  <S.HeaderWrapper>
    <ContainerContent>
      <MenuIcon size={24} />
      <Logo />
      <SearchBar />
      <S.ButtonsWrapper>
        <Button>Sign up</Button>
        <Button variant='outlined'>Sign in</Button>
      </S.ButtonsWrapper>
    </ContainerContent>
  </S.HeaderWrapper>
)
