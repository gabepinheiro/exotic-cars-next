import { ReactNode } from 'react'
import { Header } from '~/layouts'
import * as S from './styles'

type MainLayoutProps = {
  children: ReactNode | ReactNode[]
}

export const MainLayout = ({ children }: MainLayoutProps) => (
  <S.LayoutWrapper>
    <Header />
    <S.MainContent>
      {children}
    </S.MainContent>
  </S.LayoutWrapper>
)
