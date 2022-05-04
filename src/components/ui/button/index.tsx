import styled, { css } from 'styled-components'

type Colors = 'primary'
type VariantsButtons = 'text' | 'outlined' | 'contained'
type Sizes = 'small' | 'medium'

type ButtonProps = {
  color?: Colors
  variant?: VariantsButtons
  size?: Sizes
}

const Variants = {
  text: () => css`
    background-color: transparent;
  `,
  outlined: () => css`
    ${({ theme }) => css`
      border: 2px solid ${theme.colors.primary};
    `}
  `,
  contained: () => css`
    ${({ theme }) => css`
        background-color: ${theme.colors.primary};
        color: #fff;
    `}
  `,
  small: () => css`
    height: 3.6rem;
    padding: 0 1.6rem;
  `,
  medium: () => css`
    height: 4.8rem;
    padding: 0 2.8rem;
  `,
}

export const Button = styled.button<ButtonProps>`
  ${({ theme, color = 'primary', variant = 'text', size = 'small' }) => css`
    background-color: transparent;
    border: 0;
    border-radius: 1.2rem;
    color: ${theme.colors[color]};
    display: inline-flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    transition: all 0.2s ease-in-out;

    &:hover {
      opacity: 0.7;
    }

    ${!!variant && Variants[variant]};
    ${!!size && Variants[size]};
  `}
`
