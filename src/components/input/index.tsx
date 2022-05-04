import styled, { css } from 'styled-components'

export const Input = styled.input`
  width: 100%;
  padding: 2.4rem 1.6rem;
  border:0;
  outline: none;

  ${({ theme }) => css`
    border-bottom: 1px solid ${theme.colors.text_secondary};
    &, &::placeholder {
      font-size: 1.4rem;
      color: ${theme.colors.text_secondary};
      font-style: italic;
    }
    &:focus {
      border-color: ${theme.colors.primary};
      color: ${theme.colors.primary};

      &::placeholder {
        color: ${theme.colors.primary};
      }
    }
  `}
`
