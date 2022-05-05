import { useState } from 'react'
import { useSession, signOut } from 'next-auth/react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { ContainerContent } from '~/layouts'
import { Logo, Button, SearchBar, Mobile, Desktop, Flex } from '~/components'
import { AiOutlineMenu as MenuIcon } from 'react-icons/ai'
import { GrClose as CloseIcon } from 'react-icons/gr'

import * as S from './styles'

export const Header = () => {
  const { data: session, status } = useSession()
  const [isOpenMenu, setIsOpenMenu] = useState(false)
  const router = useRouter()

  const handleToggleOpenMenu = () => {
    setIsOpenMenu(state => !state)
  }

  const handleNavigateSignUp = () => {
    router.replace('/sign-up')
    setIsOpenMenu(false)
  }

  const handleNavigateSignIn = () => {
    router.replace('/sign-in')
    setIsOpenMenu(false)
  }

  const handleSignOut = () => {
    signOut()
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
        {status === 'loading' && <p>Loading...</p>}
        {status === 'unauthenticated' && (
          <S.ButtonsWrapper>
            <Button onClick={handleNavigateSignUp}>Sign up</Button>
            <Button variant='outlined' onClick={handleNavigateSignIn}>
              Sign in
            </Button>
          </S.ButtonsWrapper>
        )}
        {status === 'authenticated' && (
          <Flex gap={24} alignItems='center'>
            <p>Olá, {session?.user?.name}</p>
            <Button variant='contained' onClick={handleSignOut}>Sign out</Button>
          </Flex>
        )}
        </Desktop>

        <Mobile>
            <S.MenuFull aria-hidden={!isOpenMenu} isOpen={isOpenMenu}>
              <S.CloseIconWrapper onClick={handleToggleOpenMenu}>
                <CloseIcon size={24} />
              </S.CloseIconWrapper>

              <SearchBar />

              <S.ButtonsWrapper>
                <Button onClick={handleNavigateSignUp}>Sign up</Button>
                <Button variant='outlined' onClick={handleNavigateSignIn}>
                  Sign in
                </Button>
              </S.ButtonsWrapper>
            </S.MenuFull>
          </Mobile>
      </ContainerContent>
    </S.HeaderWrapper>
  )
}
