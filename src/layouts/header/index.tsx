import { Logo, Button, SearchBar } from '~/components'
import { AiOutlineMenu as MenuIcon } from 'react-icons/ai'
import { ContainerContent } from '~/layouts'

import * as S from './styles'
import { Desktop, Mobile } from '~/components/utils'

export const Header = () => (
  <S.HeaderWrapper>
    <ContainerContent>
      <Mobile>
        <MenuIcon size={22} />
      </Mobile>

      <Logo />

      <Desktop>
        <SearchBar />
      </Desktop>
      <Desktop>
        <S.ButtonsWrapper>
          <Button>Sign up</Button>
          <Button variant='outlined'>Sign in</Button>
        </S.ButtonsWrapper>
      </Desktop>
    </ContainerContent>
  </S.HeaderWrapper>
)
