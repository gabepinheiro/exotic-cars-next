import { ReactNode } from 'react'
import Link, { LinkProps } from 'next/link'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'

import * as S from './styles'

export type ButtonLinkProps = {
  children: ReactNode | ReactNode[]
  color?: 'black'
  variant?: 'outlined' | 'contained'
  reverse?: 'true' | 'false'
} & LinkProps

export const ButtonLink = ({
  children,
  color = 'black',
  variant = 'contained',
  reverse = 'false',
  ...props
}: ButtonLinkProps) => {
  return (
    <Link {...props} passHref>
      <S.LinkStyled
        color={color}
        variant={variant}
        reverse={reverse}
      >
        {children}
        {reverse === 'true' ? <BsArrowLeft /> : <BsArrowRight />}
      </S.LinkStyled>
    </Link>
  )
}
