import { useState } from 'react'
import Link from 'next/link'
import { ContainerContent } from '~/layouts'
import { Logo, Button, SearchBar, Mobile, Desktop } from '~/components'
import { AiOutlineMenu as MenuIcon } from 'react-icons/ai'
import { GrClose as CloseIcon } from 'react-icons/gr'

import * as S from './styles'

export const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false)

  const handleToggleOpenMenu = () => {
    setIsOpenMenu(state => !state)
  }

  return (
    <S.HeaderWrapper>
      <ContainerContent>
        <Mobile>
          <MenuIcon size={22} onClick={handleToggleOpenMenu} />
        </Mobile>

      <S.LogoWrapper>
        <Link href='/' passHref>
          <a><Logo /></a>
        </Link>
      </S.LogoWrapper>

        <Desktop>
          <SearchBar />
        </Desktop>
        <Desktop>
          <S.ButtonsWrapper>
            <Button>Sign up</Button>
            <Button variant='outlined'>Sign in</Button>
          </S.ButtonsWrapper>
        </Desktop>

        <Mobile>
            <S.MenuFull aria-hidden={!isOpenMenu} isOpen={isOpenMenu}>
              <S.CloseIconWrapper onClick={handleToggleOpenMenu}>
                <CloseIcon size={24} />
              </S.CloseIconWrapper>

              <SearchBar />

              <S.ButtonsWrapper>
                <Button>Sign in</Button>
                <Button variant='outlined'>Sign up</Button>
              </S.ButtonsWrapper>
            </S.MenuFull>
          </Mobile>
      </ContainerContent>
    </S.HeaderWrapper>
  )
}
