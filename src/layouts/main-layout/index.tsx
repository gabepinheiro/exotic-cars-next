import { ReactNode } from 'react'
import { Header, ContainerContent } from '~/layouts'
import * as S from './styles'

type MainLayoutProps = {
  children: ReactNode | ReactNode[]
}

export const MainLayout = ({ children }: MainLayoutProps) => (
  <S.LayoutWrapper>
    <Header />
      <S.MainContent>
        <ContainerContent>
          {children}
        </ContainerContent>
      </S.MainContent>
  </S.LayoutWrapper>
)
