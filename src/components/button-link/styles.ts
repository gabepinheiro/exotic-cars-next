import styled, { css } from 'styled-components'
import { ButtonLinkProps } from '.'

type Props = Pick<ButtonLinkProps, 'color' | 'variant' | 'reverse'>

const Modifiers = {
  black: () => css`
    ${({ theme }) => css`
      color: ${theme.colors.text_primary};
      background-color: ${theme.colors.text_primary};
    `}
  `,

  outlined: () => css`
    border: 1px solid currentColor;
    background-color: transparent;
  `,

  contained: () => css`
    color: #fff;
  `,

  reverse: {
    true: () => css`
      flex-direction: row-reverse;
    `,
  },
}

export const LinkStyled = styled.a<Props>`
  border-radius: 100px;
  text-decoration: none;
  cursor: pointer;
  height: 5.0rem;
  padding: 1.6rem 2.6rem;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 1.2rem;
  font-weight: 300;

  ${({ color, variant, reverse }) => css`
    ${!!color && Modifiers[color]};
    ${!!variant && Modifiers[variant]};
    ${reverse === 'true' ? Modifiers.reverse.true() : ''};
  `}

  svg {
    width: 27px;
    height: 27px;
    fill: currentColor;
  }

  transition: all 0.2s ease-in;

  &:hover {
    opacity: 0.7;
    transform: translateY(-3px);
  }
`
