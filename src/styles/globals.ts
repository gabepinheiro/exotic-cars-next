import { createGlobalStyle, css } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  html {
    font-size: 10px;
  }

  body {
    font-size: 1.6rem;
  }

  #__next {
    position: relative;
  }

  ${({ theme }) => css`
    body {
      font-family: ${theme.font};
      color: ${theme.colors.text_primary};
      background-color: ${theme.colors.background};
    }

    body, input, textarea, button {
      font-family: ${theme.font};
      font-size: 1.6rem;
    }

    ::selection {
      color: ${theme.colors.primary};
    }
  `}

  button {
    cursor: pointer;

  }
  :disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`
