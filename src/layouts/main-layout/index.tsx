import { ReactNode } from 'react'
import * as S from './styles'

type MainLayoutProps = {
  children: ReactNode | ReactNode[]
}

export const MainLayout = ({ children }: MainLayoutProps) => (
  <S.LayoutWrapper>
    <S.MainContent>
      {children}
    </S.MainContent>
  </S.LayoutWrapper>
)
